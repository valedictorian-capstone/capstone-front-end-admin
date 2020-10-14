import { CheckCircleOutlined, CheckOutlined, EyeOutlined, InfoCircleOutlined, MinusCircleOutlined, MinusOutlined, RestOutlined, SettingOutlined } from '@ant-design/icons';
import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { useFormGroupAction } from '@stores/actions';
import { RootState } from '@stores/states';
import { FormControlVM, FormGroupUM, FormGroupVM } from '@view-models';
import { Button, Col, Form, Input, message, Popover, Result, Row, Tag } from 'antd';
import { FormInstance } from 'antd/lib/form';
import { TabPanel, TabView } from 'primereact/tabview';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormEditableComponent, FormPreviewComponent } from '..';
import './form-detail.component.css';
import swal from 'sweetalert2';
export interface IFormDetailComponentProps extends IBaseProps {
  input: {
    row: FormGroupVM | undefined,
    action: 'create' | 'edit' | '',
  };
  output: {
    onDone: () => void,
  };
}

export const FormDetailComponent: React.FC<IFormDetailComponentProps> = (props: IFormDetailComponentProps) => {
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const config = environment.i18n.data.core.modules.form.components['form-create'][region];
  const [submit, setSubmit] = React.useState<'completed' | 'processing' | 'cancel' | 'none'>('none');
  const [index, setIndex] = React.useState<number>(0);
  const [form] = Form.useForm<FormGroupUM>();
  const [editing, setEditing] = React.useState<boolean>(false);
  const [formControlRemove, setFormControlRemove] = React.useState<string[]>([]);
  const [formControls, setFormControls] = React.useState<FormControlVM[]>(props.input.row ? props.input.row.formControls : []);
  const dispatch = useDispatch();
  React.useEffect(() => {
    form.setFieldsValue({
      code: props.input.row?.code || '',
      name: props.input.row?.name || '',
      description: props.input.row?.description || '',
    });
    setFormControls(props.input.row ? props.input.row.formControls : []);
    setFormControlRemove([]);
    setIndex(0);
  }, [props.input.row]);
  const formRef = React.createRef<FormInstance>();
  return (
    <div id={props.input.row?.id} key={props.input.row?.id} className="form-item selected" style={{ display: props.input.row && props.input.action === 'edit' ? 'block' : 'none' }}>
      <div className="form-item-header">
        <Row className="form-item-header-content">
          <Col span={12} className="form-item-header-content-left">
            <Tag style={{ width: '100%', borderRadius: '10px' }} color="processing">
              <span style={{ display: 'block', maxWidth: '80%', overflow: 'hidden', float: 'left' }}><b>{props.input.row?.code}</b></span>
              <span style={{ float: 'right' }}>
                <Popover placement="bottomRight" trigger="hover" content={
                  <>
                    <table style={{ border: '1px solid gray', background: 'white' }}>
                      <tbody>
                        <tr style={{ borderSpacing: '5em' }}>
                          <th colSpan={2} style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}>Form Information</th>
                        </tr>
                        <tr style={{ borderSpacing: '5em' }}>
                          <th style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}>Code</th>
                          <th style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}>{props.input.row?.code}</th>
                        </tr>
                        <tr style={{ borderSpacing: '5em' }}>
                          <th style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}>Name</th>
                          <th style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}>{props.input.row?.name}</th>
                        </tr>
                        <tr style={{ borderSpacing: '5em' }}>
                          <th style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}>Status</th>
                          <th style={{ border: '1px solid gray', padding: '1rem', textAlign: 'center' }}><Tag style={{ width: '100%', borderRadius: '10px', textAlign: 'center' }} color={props.input.row?.isDelete ? 'error' : 'success'}>{props.input.row?.isDelete ? 'Deactive' : 'Active'}</Tag></th>
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
            <Button disabled={editing} size="small" shape="circle" className="setting" style={{ marginRight: 5 }} type="primary" icon={<EyeOutlined />} />
            <Button disabled={editing} size="small" shape="circle" className="setting" danger={!props.input.row?.isDelete} style={{ marginRight: 5 }} icon={props.input.row?.isDelete ? <CheckCircleOutlined /> : <MinusCircleOutlined />} />
            <Button disabled={editing} size="small" shape="circle" className="setting" danger={true} type="primary" icon={<RestOutlined />} />
          </Col>
        </Row>
      </div>
      <div className="form-item-content">
        <TabView activeIndex={index} onTabChange={(e) => setIndex(e.index)}>
          <TabPanel disabled={editing} header={
            <>
              <span className="text">
                Information
            </span>
              <span className="icon">
                <InfoCircleOutlined />
              </span>
            </>
          } headerStyle={{ width: '33.3333333%' }} />
          <TabPanel contentClassName="editable" header={
            <>
              <span className="text">
                Setting
          </span>
              <span className="icon">
                <SettingOutlined />
              </span>
            </>
          } headerStyle={{ width: '33.3333333%' }} />
          <TabPanel disabled={editing} header={
            <>
              <span className="text">
                Preview
            </span>
              <span className="icon">
                <EyeOutlined />
              </span>
            </>
          } headerStyle={{ width: '33.3333333%' }} />
        </TabView>
        <div className="tab-view">
          <div className="form-detail" style={{ display: index === 0 ? 'block' : 'none' }}>
            <div className="content">
              <Form id={props.input.row?.id} form={form} name="control-ref">
                <div className="form-control">
                  <label>{config.fields.code.label}</label>
                  <Form.Item name="code" rules={[{ required: true, message: config.fields.code['error-message'] }]}>
                    <Input />
                  </Form.Item>
                </div>
                <div className="form-control">
                  <label>{config.fields.name.label}</label>
                  <Form.Item name="name" rules={[{ required: true, message: config.fields.name['error-message'] }]}>
                    <Input />
                  </Form.Item>
                </div>
                <div className="form-control">
                  <label>{config.fields.description.label}</label>
                  <Form.Item name="description">
                    <Input.TextArea rows={5} />
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
          <div className="form-editable" style={{ display: index === 1 ? 'block' : 'none' }}>
            <FormEditableComponent input={{ controls: props.input.row ? props.input.row.formControls : [] }} output={{
              onEdit: setEditing,
              onDone: (data, remove) => {
                setFormControls(data);
                setFormControlRemove(remove);
              },
            }} />
          </div>
          <div className="form-preview" style={{ display: index === 2 ? 'block' : 'none' }}>
            <FormPreviewComponent input={{ controls: formControls }} output={{}} />
          </div>
        </div>
      </div>
      <div className="form-item-footer" >
        <Row className="form-item-footer-content">
          <Col span={8} className="form-item-footer-content-left" />
          <Col span={8} className="form-item-footer-content-middle">
            <div className="form-item-footer-content-middle-buttons">
              <Button size="middle" shape="circle" icon={<CheckOutlined />} style={{ marginRight: 10 }} onClick={() => {
                setSubmit('processing');
                form.isFieldsTouched(true);
                form.validateFields().then(() => {
                  setTimeout(() => {
                    dispatch(useFormGroupAction().update({ id: props.input.row?.id, ...form.getFieldsValue(), formControls: formControls.map((formControl, i) => ({...formControl, position: i})), formControlRemove },
                      () => {
                        swal.fire('Notification', 'Updated successfully', 'success');
                        props.output.onDone();
                        setSubmit('completed');
                      },
                      (err: any) => {
                        swal.fire('Notification', 'Updated failed', 'error');
                        props.output.onDone();
                        setSubmit('completed');
                      },
                    ));
                  }, 1000);
                });
              }} disabled={submit === 'processing' || editing} loading={submit === 'processing'} className="setting" />
              <Button size="middle" shape="circle" icon={<MinusOutlined />} danger={true} className="setting" disabled={submit === 'processing' || editing} onClick={props.output.onDone} />
            </div>
          </Col>
          <Col xs={8} sm={8} md={0} className="form-item-footer-content-right">
            <div className="content">
              <Tag style={{ width: '100%', borderRadius: '10px', textAlign: 'center' }} color={props.input.row?.isDelete ? 'error' : 'success'}>{props.input.row?.isDelete ? 'Deactive' : 'Active'}</Tag>
            </div>
          </Col>
          <Col xs={0} sm={0} md={8} className="form-item-footer-content-right">
            <div className="content">
              <Tag style={{ width: '40%', borderRadius: '10px', textAlign: 'center' }} color={props.input.row?.isDelete ? 'error' : 'success'}>{props.input.row?.isDelete ? 'Deactive' : 'Active'}</Tag>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};