import React from 'react';
import { IBaseProps } from '@extras/interfaces';
import './form-create.component.css';
import { CheckCircleOutlined, CheckOutlined, EditOutlined, EyeOutlined, InfoCircleOutlined, MinusCircleOutlined, MinusOutlined, RestOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, message, Popover, Result, Row, Tag } from 'antd';
import { TabView, TabPanel } from 'primereact/tabview';
import { FormControlVM, FormGroupCM, FormGroupVM } from '@view-models';
import { environment } from '@environments/environment';
import { RootState } from '@stores/states';
import { useDispatch, useSelector } from 'react-redux';
import { FormInstance } from 'antd/lib/form';
import { FormEditableComponent, FormPreviewComponent } from '..';
import { useFormGroupAction } from '@stores/actions';
import swal from 'sweetalert2';

export interface IFormCreateComponentProps extends IBaseProps {
  input: {
    action: 'create' | 'edit' | '',
  };
  output: {
    onDone: () => void,
  };
}

export const FormCreateComponent: React.FC<IFormCreateComponentProps> = (props: IFormCreateComponentProps) => {
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const config = environment.i18n.data.core.modules.form.components['form-create'][region];
  const [submit, setSubmit] = React.useState<'completed' | 'processing' | 'cancel' | 'none'>('none');
  const [form] = Form.useForm<FormGroupCM>();
  const [index, setIndex] = React.useState<number>(0);
  const [editing, setEditing] = React.useState<boolean>(false);
  const [formControls, setFormControls] = React.useState<FormControlVM[]>([]);
  const dispatch = useDispatch();
  React.useEffect(() => {
    form.setFieldsValue({
      code: '',
      name: '',
      description: '',
    });
    setFormControls([]);
    setIndex(0);
  }, [props.input.action]);
  const formRef = React.createRef<FormInstance>();
  return (
    <div id="new-form" key="new-form" className="form-item selected" style={{ display: props.input.action === 'create' ? 'block' : 'none' }}>
      <div className="form-item-header">
        <Row className="form-item-header-content">
          <Col span={0} className="form-item-header-content-left" />
          <Col span={24} className="form-item-header-content-right" style={{ height: '100%', justifyContent: 'center' }}>
            <span>New Form</span>
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
          <div className="form-create" style={{ display: index === 0 ? 'block' : 'none' }}>
            <div className="content">
              <Form id="new-control" form={form} name="control-ref">
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
            <FormEditableComponent input={{ controls: [] }} output={{
              onEdit: setEditing,
              onDone: (data) => setFormControls(data),
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
                    dispatch(useFormGroupAction().create({ ...form.getFieldsValue(), formControls: formControls.map((formControl, i) => ({ ...formControl, position: i })) },
                      () => {
                        swal.fire('Notification', 'Created successfully', 'success');
                        props.output.onDone();
                        setSubmit('completed');
                      },
                      (err: any) => {
                        swal.fire('Notification', 'Created failed', 'error');
                        props.output.onDone();
                        setSubmit('completed');
                      },
                    ));
                  }, 1000);
                });
              }} disabled={submit === 'processing'} loading={submit === 'processing'} className="setting" />
              <Button size="middle" shape="circle" icon={<MinusOutlined />} danger={true} className="setting" disabled={submit === 'processing'} onClick={props.output.onDone} />
            </div>
          </Col>
          <Col xs={8} sm={8} md={0} className="form-item-footer-content-right" />
          <Col xs={0} sm={0} md={8} className="form-item-footer-content-right" />
        </Row>
      </div>
    </div>
  );
};