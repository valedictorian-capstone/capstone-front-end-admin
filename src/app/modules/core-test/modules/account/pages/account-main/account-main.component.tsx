import { IBaseProps } from '@extras/interfaces';
import { useAccountAction, useDepartmentAction, useExtraInformationAction, useRoleAction } from '@stores/actions';
import { Col, Row } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AccountListComponent, AccountSupportComponent, AccountFooterComponent, AccountHelperComponent, AccountExtraComponent } from '../../components';
import './account-main.component.css';
import { ExtraInformationVM, AccountVM, RoleVM, DepartmentVM } from '@view-models';
import { RootState } from '@stores/states';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
export interface IAccountMainComponentProps extends IBaseProps {
  input: {};
  output: {};
}

export const AccountMainComponent: React.FC<IAccountMainComponentProps> = (props: IAccountMainComponentProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const rows = useSelector<RootState, AccountVM[]>((state) => state.account.arr);
  const roles = useSelector<RootState, RoleVM[]>((state) => state.role.arr);
  const departments = useSelector<RootState, DepartmentVM[]>((state) => state.department.arr);
  const extraInformations = useSelector<RootState, ExtraInformationVM[]>((state) => state.extraInformation.arr.sort((a, b) => (a.position - b.position)));
  const [updated, setUpdated] = React.useState<Date>(new Date());
  const [rowFilters, setRowFilter] = React.useState<AccountVM[]>(rows);
  const [pagination, setPagination] = React.useState<{ rows: AccountVM[], itemPerPage: number }>({ rows, itemPerPage: rowFilters.length });
  const [selected, setSelected] = React.useState<AccountVM | undefined>(undefined);
  const [action, setAction] = React.useState<'create' | 'edit' | 'setting' | ''>('');
  React.useEffect(() => {
    dispatch(useAccountAction().getAll());
    dispatch(useRoleAction().getAll());
    dispatch(useDepartmentAction().getAll());
    dispatch(useExtraInformationAction().getAll('account'));
  }, [updated]);
  React.useEffect(() => {
    setRowFilter(rows);
  }, [rows]);
  return (
    <DndProvider backend={HTML5Backend}>
      <Row className="account-container">
        <Col xs={0} sm={0} md={0} lg={action === 'setting' ? 4 : 0} xl={action === 'setting' ? 4 : 0} xxl={action === 'setting' ? 4 : 0} className="account-helper">
          <AccountHelperComponent input={{}} output={{}} />
        </Col>
        <Col xs={24} sm={24} md={24} lg={action === 'setting' ? 20 : 24} xl={action === 'setting' ? 20 : 24} xxl={action === 'setting' ? 20 : 24} className="account-content">
          <AccountSupportComponent input={{ action, rows, roles, departments }} output={{ onCreate: () => setAction('create'), onSearch: setRowFilter, onSetting: () => setAction('setting') }} />
          {action !== 'setting' && <AccountListComponent input={{ rows: pagination.rows, action, extraInformations, roles, departments }} output={{ onSelect: setSelected, onActionChange: setAction }} />}
          {action === 'setting' && <AccountExtraComponent input={{ action, extraInformations }} output={{
            onDone: () => {
              setAction('');
              setUpdated(new Date());
            },
          }} />}
          {action !== 'setting' && <AccountFooterComponent input={{ rows: rowFilters, selected, action }} output={{ onChange: setPagination }} />}
        </Col>
      </Row>
    </DndProvider>
  );
};