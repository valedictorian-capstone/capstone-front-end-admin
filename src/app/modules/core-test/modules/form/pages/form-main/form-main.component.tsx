import { IBaseProps } from '@extras/interfaces';
import { useFormGroupAction } from '@stores/actions';
import { Col, Row } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FormListComponent, FormSupportComponent, FormFooterComponent, FormHelperComponent } from '../../components';
import './form-main.component.css';
import { FormGroupVM } from '@view-models';
import { RootState } from '@stores/states';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
export interface IFormMainComponentProps extends IBaseProps {
  input: {};
  output: {};
}

export const FormMainComponent: React.FC<IFormMainComponentProps> = (props: IFormMainComponentProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const rows = useSelector<RootState, FormGroupVM[]>((state) => state.formGroup.arr);
  const [updated, setUpdated] = React.useState<Date>(new Date());
  const [rowFilters, setRowFilter] = React.useState<FormGroupVM[]>(rows);
  const [pagination, setPagination] = React.useState<{ rows: FormGroupVM[], itemPerPage: number }>({ rows, itemPerPage: rowFilters.length });
  const [selected, setSelected] = React.useState<FormGroupVM | undefined>(undefined);
  React.useEffect(() => {
    dispatch(useFormGroupAction().getAll());
  }, [updated]);
  React.useEffect(() => {
    setRowFilter(rows);
  }, [rows]);
  return (
    <DndProvider backend={HTML5Backend}>
      <Row className="form-container">
        <Col xs={0} sm={0} md={0} lg={4} xl={4} xxl={4} className="form-helper">
          <FormHelperComponent input={{}} output={{}} />
        </Col>
        <Col xs={24} sm={24} md={24} lg={20} xl={20} xxl={20} className="form-content">
          <FormSupportComponent input={{}} output={{}} />
          <FormListComponent input={{ rows: pagination.rows }} output={{ onSelect: setSelected }} />
          <FormFooterComponent input={{ rows: rowFilters, selected }} output={{ onChange: setPagination }} />
        </Col>
      </Row>
    </DndProvider>
  );
};