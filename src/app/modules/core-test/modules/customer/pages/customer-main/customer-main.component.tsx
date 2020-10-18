import { IBaseProps } from '@extras/interfaces';
import { useCustomerAction, useExtraInformationAction } from '@stores/actions';
import { Col, Row } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CustomerListComponent, CustomerSupportComponent, CustomerFooterComponent, CustomerHelperComponent, CustomerExtraComponent } from '../../components';
import './customer-main.component.css';
import { ExtraInformationVM, CustomerVM } from '@view-models';
import { RootState } from '@stores/states';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
export interface ICustomerMainComponentProps extends IBaseProps {
  input: {};
  output: {};
}

export const CustomerMainComponent: React.FC<ICustomerMainComponentProps> = (props: ICustomerMainComponentProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const rows = useSelector<RootState, CustomerVM[]>((state) => state.customer.arr);
  const extraInformations = useSelector<RootState, ExtraInformationVM[]>((state) => state.extraInformation.arr.sort((a, b) => (a.position - b.position)));
  const [updated, setUpdated] = React.useState<Date>(new Date());
  const [rowFilters, setRowFilter] = React.useState<CustomerVM[]>(rows);
  const [pagination, setPagination] = React.useState<{ rows: CustomerVM[], itemPerPage: number }>({ rows, itemPerPage: rowFilters.length });
  const [selected, setSelected] = React.useState<CustomerVM | undefined>(undefined);
  const [action, setAction] = React.useState<'create' | 'edit' | 'setting' | ''>('');
  React.useEffect(() => {
    dispatch(useCustomerAction().getAll());
    dispatch(useExtraInformationAction().getAll('customer'));
  }, [updated]);
  React.useEffect(() => {
    setRowFilter(rows);
  }, [rows]);
  return (
    <DndProvider backend={HTML5Backend}>
      <Row className="customer-container">
        <Col xs={0} sm={0} md={0} lg={action === 'setting' ? 4 : 0} xl={action === 'setting' ? 4 : 0} xxl={action === 'setting' ? 4 : 0} className="customer-helper">
          <CustomerHelperComponent input={{}} output={{}} />
        </Col>
        <Col xs={24} sm={24} md={24} lg={action === 'setting' ? 20 : 24} xl={action === 'setting' ? 20 : 24} xxl={action === 'setting' ? 20 : 24} className="customer-content">
          <CustomerSupportComponent input={{ action, rows }} output={{ onCreate: () => setAction('create'), onSearch: setRowFilter, onSetting: () => setAction('setting') }} />
          {action !== 'setting' && <CustomerListComponent input={{ rows: pagination.rows, action, extraInformations }} output={{ onSelect: setSelected, onActionChange: setAction }} />}
          {action === 'setting' && <CustomerExtraComponent input={{ action, extraInformations }} output={{
            onDone: () => {
              setAction('');
              setUpdated(new Date());
          } }} />}
          {action !== 'setting' && <CustomerFooterComponent input={{ rows: rowFilters, selected, action }} output={{ onChange: setPagination }} />}
        </Col>
      </Row>
    </DndProvider>
  );
};