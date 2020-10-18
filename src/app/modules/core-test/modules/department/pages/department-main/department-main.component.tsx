import { IBaseProps } from '@extras/interfaces';
import { useDepartmentAction } from '@stores/actions';
import { RootState } from '@stores/states';
import { DepartmentVM } from '@view-models';
import { Col, Row } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { DepartmentFooterComponent, DepartmentListComponent, DepartmentSupportComponent } from '../../components';
import './department-main.component.css';
export interface IDepartmentMainComponentProps extends IBaseProps {
  input: {};
  output: {};
}

export const DepartmentMainComponent: React.FC<IDepartmentMainComponentProps> = (props: IDepartmentMainComponentProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const rows = useSelector<RootState, DepartmentVM[]>((state) => state.department.arr);
  const [updated, setUpdated] = React.useState<Date>(new Date());
  const [rowFilters, setRowFilter] = React.useState<DepartmentVM[]>(rows);
  const [pagination, setPagination] = React.useState<{ rows: DepartmentVM[], itemPerPage: number }>({ rows, itemPerPage: rowFilters.length });
  const [selected, setSelected] = React.useState<DepartmentVM | undefined>(undefined);
  const [action, setAction] = React.useState<'create' | 'edit' | ''>('');
  React.useEffect(() => {
    dispatch(useDepartmentAction().getAll());
  }, [updated]);
  React.useEffect(() => {
    setRowFilter(rows);
  }, [rows]);
  return (
    <Row className="department-container">
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} className="department-content">
        <DepartmentSupportComponent input={{ action, rows }} output={{ onCreate: () => setAction('create'), onSearch: setRowFilter }} />
        <DepartmentListComponent input={{ rows: pagination.rows, action }} output={{ onSelect: setSelected, onActionChange: setAction }} />
        <DepartmentFooterComponent input={{ rows: rowFilters, selected, action }} output={{ onChange: setPagination }} />
      </Col>
    </Row>
  );
};