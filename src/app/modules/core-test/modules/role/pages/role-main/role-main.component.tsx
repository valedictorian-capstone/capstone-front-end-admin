import { IBaseProps } from '@extras/interfaces';
import { useRoleAction } from '@stores/actions';
import { RootState } from '@stores/states';
import { RoleVM } from '@view-models';
import { Col, Row } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RoleFooterComponent, RoleListComponent, RoleSupportComponent } from '../../components';
import './role-main.component.css';
export interface IRoleMainComponentProps extends IBaseProps {
  input: {};
  output: {};
}

export const RoleMainComponent: React.FC<IRoleMainComponentProps> = (props: IRoleMainComponentProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const rows = useSelector<RootState, RoleVM[]>((state) => state.role.arr);
  const [updated, setUpdated] = React.useState<Date>(new Date());
  const [rowFilters, setRowFilter] = React.useState<RoleVM[]>(rows);
  const [pagination, setPagination] = React.useState<{ rows: RoleVM[], itemPerPage: number }>({ rows, itemPerPage: rowFilters.length });
  const [selected, setSelected] = React.useState<RoleVM | undefined>(undefined);
  const [action, setAction] = React.useState<'create' | 'edit' | ''>('');
  React.useEffect(() => {
    dispatch(useRoleAction().getAll());
  }, [updated]);
  React.useEffect(() => {
    setRowFilter(rows);
  }, [rows]);
  return (
    <Row className="role-container">
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} className="role-content">
        <RoleSupportComponent input={{ action, rows }} output={{ onCreate: () => setAction('create'), onSearch: setRowFilter }} />
        <RoleListComponent input={{ rows: pagination.rows, action }} output={{ onSelect: setSelected, onActionChange: setAction }} />
        <RoleFooterComponent input={{ rows: rowFilters, selected, action }} output={{ onChange: setPagination }} />
      </Col>
    </Row>
  );
};