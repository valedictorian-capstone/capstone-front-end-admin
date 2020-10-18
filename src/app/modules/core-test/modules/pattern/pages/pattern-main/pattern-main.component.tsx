import { IBaseProps } from '@extras/interfaces';
import { usePatternAction } from '@stores/actions';
import { RootState } from '@stores/states';
import { PatternVM } from '@view-models';
import { Col, Row } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { PatternFooterComponent, PatternListComponent, PatternSupportComponent } from '../../components';
import './pattern-main.component.css';
export interface IPatternMainComponentProps extends IBaseProps {
  input: {};
  output: {};
}

export const PatternMainComponent: React.FC<IPatternMainComponentProps> = (props: IPatternMainComponentProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const rows = useSelector<RootState, PatternVM[]>((state) => state.pattern.arr);
  const [updated, setUpdated] = React.useState<Date>(new Date());
  const [rowFilters, setRowFilter] = React.useState<PatternVM[]>(rows);
  const [pagination, setPagination] = React.useState<{ rows: PatternVM[], itemPerPage: number }>({ rows, itemPerPage: rowFilters.length });
  const [selected, setSelected] = React.useState<PatternVM | undefined>(undefined);
  const [action, setAction] = React.useState<'create' | 'edit' | ''>('');
  React.useEffect(() => {
    dispatch(usePatternAction().getAll());
  }, [updated]);
  React.useEffect(() => {
    setRowFilter(rows);
  }, [rows]);
  return (
    <Row className="pattern-container">
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} className="pattern-content">
        <PatternSupportComponent input={{ action, rows }} output={{ onCreate: () => setAction('create'), onSearch: setRowFilter }} />
        <PatternListComponent input={{ rows: pagination.rows, action }} output={{ onSelect: setSelected, onActionChange: setAction }} />
        <PatternFooterComponent input={{ rows: rowFilters, selected, action }} output={{ onChange: setPagination }} />
      </Col>
    </Row>
  );
};