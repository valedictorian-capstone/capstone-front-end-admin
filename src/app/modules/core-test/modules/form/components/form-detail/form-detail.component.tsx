import React from 'react';
import { IBaseProps } from '@extras/interfaces';
import './form-detail.component.css';
import { FloatLabelComponent } from '@extras/components';
import { CheckCircleOutlined, CheckOutlined, EditOutlined, EyeOutlined, InfoCircleOutlined, MinusCircleOutlined, MinusOutlined, RestOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Popover, Row, Tag } from 'antd';
import { TabView, TabPanel } from 'primereact/tabview';
import { FormGroupCM, FormGroupVM } from '@view-models';
import { environment } from '@environments/environment';
import { RootState } from '@stores/states';
import { useSelector } from 'react-redux';
import { FormInstance } from 'antd/lib/form';
import { FormEditableComponent, FormPreviewComponent } from '..';

export interface IFormDetailComponentProps extends IBaseProps {
  input: {
    row: FormGroupVM | undefined,
  };
  output: {
    onDone: () => void,
  };
}

export const FormDetailComponent: React.FC<IFormDetailComponentProps> = (props: IFormDetailComponentProps) => {
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const config = environment.i18n.data.core.modules.form.components['form-create'][region];
  const [submit, setSubmit] = React.useState<'completed' | 'processing' | 'cancel' | 'none'>('none');
  const [form] = Form.useForm<FormGroupCM>();
  React.useEffect(() => {
    form.setFieldsValue({
      code: props.input.row?.code || '',
      name: props.input.row?.name || '',
      description: props.input.row?.description || '',
      formControls: [],
    });
  }, [props.input.row]);
  const formRef = React.createRef<FormInstance>();
  return (
    <div id={props.input.row?.id} key={props.input.row?.id} className="form-item selected" style={{ display: props.input.row ? 'block' : 'none' }}>
      <div className="form-item-header">
        <Row className="form-item-header-content">
          <Col span={12} className="form-item-header-content-left">
            <Tag style={{ width: '100%', borderRadius: '10px' }} color="processing">
              <span style={{ display: 'block', maxWidth: '80%', overflow: 'hidden', float: 'left' }}><b>{props.input.row?.code}</b></span>
              <span style={{ float: 'right' }}>
                <Popover placement="bottomRight" trigger="hover" content={
                  <>
                    <table style={{ border: '1px solid gray' }}>
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
            <Button size="small" shape="circle" className="setting" style={{ marginRight: 5 }} type="primary" icon={<EyeOutlined />} />
            <Button size="small" shape="circle" className="setting" danger={!props.input.row?.isDelete} style={{ marginRight: 5 }} icon={props.input.row?.isDelete ? <CheckCircleOutlined /> : <MinusCircleOutlined />} />
            <Button size="small" shape="circle" className="setting" danger={true} type="primary" icon={<RestOutlined />} />
          </Col>
        </Row>
      </div>
      <div className="form-item-content">
        <TabView>
          <TabPanel header={
            <>
              <span className="text">
                Information
            </span>
              <span className="icon">
                <InfoCircleOutlined />
              </span>
            </>
          } headerStyle={{ width: '33.3333333%' }}>
            <h3 style={{ textAlign: 'center' }}>Form Information</h3>
            <div className="form-detail">
              <div className="content">
                <Form id={props.input.row?.id} form={form} name="control-ref">
                  <Form.Item name="code" rules={[{ required: true, message: config.fields.code['error-message'] }]}>
                    <label>{config.fields.code.label}</label>
                    <Input />
                  </Form.Item>
                  <Form.Item name="name" rules={[{ required: true, message: config.fields.name['error-message'] }]}>
                    <label>{config.fields.name.label}</label>
                    <Input />
                  </Form.Item>
                  <Form.Item name="description">
                    <label>{config.fields.description.label}</label>
                    <Input.TextArea rows={5} />
                  </Form.Item>
                </Form>
              </div>
            </div>
          </TabPanel>
          <TabPanel header={
            <>
              <span className="text">
                Setting
          </span>
              <span className="icon">
                <SettingOutlined />
              </span>
            </>
          } headerStyle={{ width: '33.3333333%' }}>
            <FormEditableComponent input={{ row: props.input.row }} output={{}} />
          </TabPanel>
          <TabPanel header={
            <>
              <span className="text">
                Preview
            </span>
              <span className="icon">
                <EyeOutlined />
              </span>
            </>
          } headerStyle={{ width: '33.3333333%' }}>
            <FormPreviewComponent input={{ row: props.input.row }} output={{}} />
          </TabPanel>
        </TabView>
      </div>
      <div className="form-item-footer" >
        <Row className="form-item-footer-content">
          <Col span={8} className="form-item-footer-content-left" />
          <Col span={8} className="form-item-footer-content-middle">
            <div className="form-item-footer-content-middle-buttons">
              <Button size="middle" shape="circle" icon={<CheckOutlined />} style={{ marginRight: 10 }} onClick={() => {
                setSubmit('processing');
                form.isFieldsTouched(true);
                console.log(form.getFieldsValue());
                form.validateFields().then(() => {
                  props.output.onDone();
                  setSubmit('completed');
                });
              }} disabled={submit === 'processing'} loading={submit === 'processing'} className="setting" />
              <Button size="middle" shape="circle" icon={<MinusOutlined />} danger={true} className="setting" disabled={submit === 'processing'} onClick={props.output.onDone} />
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