import { CheckCircleOutlined, EditOutlined, InfoCircleOutlined, MinusCircleOutlined, RestOutlined } from '@ant-design/icons';
import { IBaseProps } from '@extras/interfaces';
import { useCustomerAction } from '@stores/actions';
import { CustomerExtraInformationVM, CustomerVM } from '@view-models';
import { Button, Col, Popconfirm, Popover, Row, Tag } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert2';
import { CustomerCreateComponent, CustomerDetailComponent } from '..';
import './customer-list.component.css';
export interface ICustomerListComponentProps extends IBaseProps {
  input: {
    rows: CustomerVM[],
    action: 'create' | 'edit' | 'setting' | '',
    customerExtraInformations: CustomerExtraInformationVM[],
  };
  output: {
    onSelect: (row: CustomerVM | undefined) => void,
    onActionChange: (action: 'create' | 'edit' | 'setting' | '') => void,
  };
}

export const CustomerListComponent: React.FC<ICustomerListComponentProps> = (props: ICustomerListComponentProps) => {
  const [selected, setSelected] = React.useState<CustomerVM | undefined>(undefined);
  const [action, setAction] = React.useState<'create' | 'edit' | 'setting' | ''>(props.input.action);
  const edit = (row: CustomerVM | undefined) => {
    setSelected(row);
    setAction('edit');
    props.output.onSelect(row);
    props.output.onActionChange('edit');
  };
  const dispatch = useDispatch();
  React.useEffect(() => {
    setAction(props.input.action);
  }, [props.input.action]);
  return (
    <div className="customer-list" style={{ overflow: selected || action !== '' ? 'hidden' : 'auto' }}>
      {props.input.rows.map((row) => (
        <div id={row.id} key={row.id} className="customer-item" style={{ display: !selected && action === '' ? 'block' : 'none' }}>
          <div className="customer-item-header">
            <Row className="customer-item-header-content">
              <Col span={12} className="customer-item-header-content-left">
                <Tag style={{ width: '100%', borderRadius: '10px' }} color="processing">
                  <span style={{ display: 'block', maxWidth: '80%', overflow: 'hidden', float: 'left' }}><b>{row.code + '-' + row.fullname + '-' + row.phone}</b></span>
                  <span style={{ float: 'right' }}>
                    <Popover placement="bottomRight" trigger="click" content={
                      <>
                        <table style={{ border: '1px solid gray' }}>
                          <tbody>
                            <tr style={{ borderSpacing: '5em' }}>
                              <th colSpan={2} style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}>Customer Incustomeration</th>
                            </tr>
                            <tr style={{ borderSpacing: '5em' }}>
                              <th style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}>Code</th>
                              <th style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}>{row.code}</th>
                            </tr>
                            <tr style={{ borderSpacing: '5em' }}>
                              <th style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}>FullName</th>
                              <th style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}>{row.fullname}</th>
                            </tr>
                            <tr style={{ borderSpacing: '5em' }}>
                              <th style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}>Phone</th>
                              <th style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}>{row.phone}</th>
                            </tr>
                            <tr style={{ borderSpacing: '5em' }}>
                              <th style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}>Email</th>
                              <th style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}>{row.email}</th>
                            </tr>
                            <tr style={{ borderSpacing: '5em' }}>
                              <th style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}>Gender</th>
                              <th style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}>{row.gender ? 'Male' : 'Female'}</th>
                            </tr>
                            <tr style={{ borderSpacing: '5em' }}>
                              <th style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}>Status</th>
                              <th style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}><Tag style={{ width: '100%', borderRadius: '10px', textAlign: 'center' }} color={row.isDelete ? 'error' : 'success'}>{row.isDelete ? 'Deactive' : 'Active'}</Tag></th>
                            </tr>
                          </tbody>
                        </table>
                      </>
                    }>
                      <InfoCircleOutlined />
                    </Popover>
                  </span>
                </Tag>
              </Col>
              <Col span={12} className="customer-item-header-content-right">
                <Popconfirm
                  title={`Are you sure ${row.isDelete ? 'active' : 'deactive'} this customer?`}
                  onConfirm={() => {
                    dispatch(row.isDelete ? useCustomerAction().active([row.id],
                      () => {
                        swal.fire('Notification', 'Actived successfully', 'success');
                        edit(undefined);
                        setAction('');
                        props.output.onActionChange('');
                      },
                      (err: any) => {
                        swal.fire('Notification', 'Actived failed', 'error');
                        edit(undefined);
                        setAction('');
                        props.output.onActionChange('');
                      },
                    ) : useCustomerAction().deactive([row.id],
                      () => {
                        swal.fire('Notification', 'Deactived successfully', 'success');
                        edit(undefined);
                        setAction('');
                        props.output.onActionChange('');
                      },
                      (err: any) => {
                        swal.fire('Notification', 'Deactived failed', 'error');
                        edit(undefined);
                        setAction('');
                        props.output.onActionChange('');
                      },
                    ));
                  }}
                  okText="Sure"
                  cancelText="No"
                >
                  <Button size="small" shape="circle" className="setting" danger={!row.isDelete} style={{ marginRight: 5 }} icon={row.isDelete ? <CheckCircleOutlined /> : <MinusCircleOutlined />} />
                </Popconfirm>
                <Popconfirm
                  title="Are you sure delete this customer?"
                  onConfirm={() => {
                    dispatch(useCustomerAction().remove(row.id,
                      () => {
                        swal.fire('Notification', 'Removed successfully', 'success');
                        edit(undefined);
                        setAction('');
                        props.output.onActionChange('');
                      },
                      (err: any) => {
                        swal.fire('Notification', 'Removed failed', 'error');
                        edit(undefined);
                        setAction('');
                        props.output.onActionChange('');
                      },
                    ));
                  }}
                  okText="Sure"
                  cancelText="No"
                >
                  <Button size="small" shape="circle" className="setting" danger={true} type="primary" icon={<RestOutlined />} />
                </Popconfirm>
              </Col>
            </Row>
          </div>
          <div className="customer-item-content" />
          <div className="customer-item-footer" >
            <Row className="customer-item-footer-content">
              <Col span={8} className="customer-item-footer-content-left" />
              <Col span={8} className="customer-item-footer-content-middle" />
              <Col xs={8} sm={8} md={0} className="customer-item-footer-content-right">
                <div className="content">
                  <Tag style={{ width: '100%', borderRadius: '10px', textAlign: 'center' }} color={row.isDelete ? 'error' : 'success'}>{row.isDelete ? 'Deactive' : 'Active'}</Tag>
                </div>
              </Col>
              <Col xs={0} sm={0} md={8} className="customer-item-footer-content-right">
                <div className="content">
                  <Tag style={{ width: '40%', borderRadius: '10px', textAlign: 'center' }} color={row.isDelete ? 'error' : 'success'}>{row.isDelete ? 'Deactive' : 'Active'}</Tag>
                </div>
              </Col>
            </Row>
          </div>
          <div className="customer-item-edit">
            <Button size="large" shape="circle" icon={<EditOutlined />} className="setting" onClick={() => edit(row)} />
          </div>
        </div>
      ))
      }
      <CustomerDetailComponent input={{ row: selected, action, customerExtraInformations: props.input.customerExtraInformations }} output={{
        onDone: () => {
          edit(undefined);
          setAction('');
          props.output.onActionChange('');
        },
      }} />
      <CustomerCreateComponent input={{ action, customerExtraInformations: props.input.customerExtraInformations }} output={{
        onDone: () => {
          edit(undefined);
          setAction('');
          props.output.onActionChange('');
        },
      }} />
    </div>
  );
};