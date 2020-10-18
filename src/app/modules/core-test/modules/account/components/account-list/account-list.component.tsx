import { CheckCircleOutlined, EditOutlined, InfoCircleOutlined, MinusCircleOutlined, RestOutlined } from '@ant-design/icons';
import { IBaseProps } from '@extras/interfaces';
import { useAccountAction } from '@stores/actions';
import { ExtraInformationVM, AccountVM, RoleVM, DepartmentVM } from '@view-models';
import { Button, Col, Empty, Popconfirm, Popover, Row, Tag } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert2';
import { AccountCreateComponent, AccountDetailComponent } from '..';
import './account-list.component.css';
export interface IAccountListComponentProps extends IBaseProps {
  input: {
    rows: AccountVM[],
    action: 'create' | 'edit' | 'setting' | '',
    extraInformations: ExtraInformationVM[],
    roles: RoleVM[],
    departments: DepartmentVM[],
  };
  output: {
    onSelect: (row: AccountVM | undefined) => void,
    onActionChange: (action: 'create' | 'edit' | 'setting' | '') => void,
  };
}

export const AccountListComponent: React.FC<IAccountListComponentProps> = (props: IAccountListComponentProps) => {
  const [selected, setSelected] = React.useState<AccountVM | undefined>(undefined);
  const [action, setAction] = React.useState<'create' | 'edit' | 'setting' | ''>(props.input.action);
  const edit = (row: AccountVM | undefined) => {
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
    <div className="account-list" style={{ overflow: selected || action !== '' ? 'hidden' : 'auto' }}>
      {props.input.rows.map((row) => (
        <div id={row.id} key={row.id} className="account-item" style={{ display: !selected && action === '' ? 'block' : 'none' }}>
          <div className="account-item-header">
            <Row className="account-item-header-content">
              <Col span={12} className="account-item-header-content-left">
                <Tag style={{ width: '100%', borderRadius: '10px' }} color="processing">
                  <span style={{ display: 'block', maxWidth: '80%', overflow: 'hidden', float: 'left' }}><b>{row.code + '-' + row.fullname + '-' + row.phone}</b></span>
                  <span style={{ float: 'right' }}>
                    <Popover placement="bottomRight" trigger="click" content={
                      <>
                        <table style={{ border: '1px solid gray' }}>
                          <tbody>
                            <tr style={{ borderSpacing: '5em' }}>
                              <th colSpan={2} style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}>Account Inaccountation</th>
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
              <Col span={12} className="account-item-header-content-right">
                <Popconfirm
                  title={`Are you sure ${row.isDelete ? 'active' : 'deactive'} this account?`}
                  onConfirm={() => {
                    dispatch(row.isDelete ? useAccountAction().active([row.id],
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
                    ) : useAccountAction().deactive([row.id],
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
                  title="Are you sure delete this account?"
                  onConfirm={() => {
                    dispatch(useAccountAction().remove(row.id,
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
          <div className="account-item-content" />
          <div className="account-item-footer" >
            <Row className="account-item-footer-content">
              <Col span={8} className="account-item-footer-content-left" />
              <Col span={8} className="account-item-footer-content-middle" />
              <Col xs={8} sm={8} md={0} className="account-item-footer-content-right">
                <div className="content">
                  <Tag style={{ width: '100%', borderRadius: '10px', textAlign: 'center' }} color={row.isDelete ? 'error' : 'success'}>{row.isDelete ? 'Deactive' : 'Active'}</Tag>
                </div>
              </Col>
              <Col xs={0} sm={0} md={8} className="account-item-footer-content-right">
                <div className="content">
                  <Tag style={{ width: '40%', borderRadius: '10px', textAlign: 'center' }} color={row.isDelete ? 'error' : 'success'}>{row.isDelete ? 'Deactive' : 'Active'}</Tag>
                </div>
              </Col>
            </Row>
          </div>
          <div className="account-item-edit">
            <Button size="large" shape="circle" icon={<EditOutlined />} className="setting" onClick={() => edit(row)} />
          </div>
        </div>
      ))
      }
      {(props.input.rows.length === 0 && action === '') && <div style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex'}}><Empty /></div>}
      <AccountDetailComponent input={{ row: selected, action, extraInformations: props.input.extraInformations, roles: props.input.roles, departments: props.input.departments }} output={{
        onDone: () => {
          edit(undefined);
          setAction('');
          props.output.onActionChange('');
        },
      }} />
      <AccountCreateComponent input={{ action, extraInformations: props.input.extraInformations, roles: props.input.roles, departments: props.input.departments }} output={{
        onDone: () => {
          edit(undefined);
          setAction('');
          props.output.onActionChange('');
        },
      }} />
    </div>
  );
};