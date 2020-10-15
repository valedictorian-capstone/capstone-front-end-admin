import { CheckCircleOutlined, CheckOutlined, EditOutlined, EyeOutlined, InfoCircleOutlined, MinusCircleOutlined, MinusOutlined, RestOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Popconfirm, Popover, Row, Tag } from 'antd';
import { TabView, TabPanel } from 'primereact/tabview';
import { IBaseProps } from '@extras/interfaces';
import { FormGroupCM, FormGroupVM } from '@view-models';
import React from 'react';
import { FormCreateComponent, FormDetailComponent, FormEditableComponent, FormPreviewComponent } from '..';
import './form-list.component.css';
import { useDispatch } from 'react-redux';
import { useFormGroupAction } from '@stores/actions';
import swal from 'sweetalert2';
export interface IFormListComponentProps extends IBaseProps {
  input: {
    rows: FormGroupVM[],
    action: 'create' | 'edit' | '',
  };
  output: {
    onSelect: (row: FormGroupVM | undefined) => void,
    onActionChange: (action: 'create' | 'edit' | '') => void,
  };
}

export const FormListComponent: React.FC<IFormListComponentProps> = (props: IFormListComponentProps) => {
  const [selected, setSelected] = React.useState<FormGroupVM | undefined>(undefined);
  const [action, setAction] = React.useState<'create' | 'edit' | ''>(props.input.action);
  const edit = (row: FormGroupVM | undefined) => {
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
    <div className="form-list" style={{ overflow: selected || action !== '' ? 'hidden' : 'auto' }}>
      {props.input.rows.map((row) => (
        <div id={row.id} key={row.id} className="form-item" style={{ display: !selected && action === '' ? 'block' : 'none' }}>
          <div className="form-item-header">
            <Row className="form-item-header-content">
              <Col span={12} className="form-item-header-content-left">
                <Tag style={{ width: '100%', borderRadius: '10px' }} color="processing">
                  <span style={{ display: 'block', maxWidth: '80%', overflow: 'hidden', float: 'left' }}><b>{row.code + '-' + row.name}</b></span>
                  <span style={{ float: 'right' }}>
                    <Popover placement="bottomRight" trigger="click" content={
                      <>
                        <table style={{ border: '1px solid gray' }}>
                          <tbody>
                            <tr style={{ borderSpacing: '5em' }}>
                              <th colSpan={2} style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}>Form Information</th>
                            </tr>
                            <tr style={{ borderSpacing: '5em' }}>
                              <th style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}>Code</th>
                              <th style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}>{row.code}</th>
                            </tr>
                            <tr style={{ borderSpacing: '5em' }}>
                              <th style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}>Name</th>
                              <th style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}>{row.name}</th>
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
              <Col span={12} className="form-item-header-content-right">
                <Popconfirm
                  title={`Are you sure ${row.isDelete ? 'active' : 'deactive'} this form?`}
                  onConfirm={() => {
                    dispatch(row.isDelete ? useFormGroupAction().active([row.id],
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
                    ) : useFormGroupAction().deactive([row.id],
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
                  title="Are you sure delete this form?"
                  onConfirm={() => {
                    dispatch(useFormGroupAction().remove(row.id,
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
          <div className="form-item-content" />
          <div className="form-item-footer" >
            <Row className="form-item-footer-content">
              <Col span={8} className="form-item-footer-content-left" />
              <Col span={8} className="form-item-footer-content-middle" />
              <Col xs={8} sm={8} md={0} className="form-item-footer-content-right">
                <div className="content">
                  <Tag style={{ width: '100%', borderRadius: '10px', textAlign: 'center' }} color={row.isDelete ? 'error' : 'success'}>{row.isDelete ? 'Deactive' : 'Active'}</Tag>
                </div>
              </Col>
              <Col xs={0} sm={0} md={8} className="form-item-footer-content-right">
                <div className="content">
                  <Tag style={{ width: '40%', borderRadius: '10px', textAlign: 'center' }} color={row.isDelete ? 'error' : 'success'}>{row.isDelete ? 'Deactive' : 'Active'}</Tag>
                </div>
              </Col>
            </Row>
          </div>
          <div className="form-item-edit">
            <Button size="large" shape="circle" icon={<EditOutlined />} className="setting" onClick={() => edit(row)} />
          </div>
        </div>
      ))
      }
      <FormDetailComponent input={{ row: selected, action }} output={{
        onDone: () => {
          edit(undefined);
          setAction('');
          props.output.onActionChange('');
        },
      }} />
      <FormCreateComponent input={{ action }} output={{
        onDone: () => {
          edit(undefined);
          setAction('');
          props.output.onActionChange('');
        },
      }} />
    </div>
  );
};