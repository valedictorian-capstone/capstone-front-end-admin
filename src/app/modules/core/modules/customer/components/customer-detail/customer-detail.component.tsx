import React from 'react';
import { IBaseProps } from '@extras/interfaces';
import { Button, Form, Input, Modal } from 'antd';
import { CustomerUM, CustomerExtraInformationVM, CustomerVM } from '@view-models';
import { FormInstance } from 'antd/lib/form';
import { PlusOutlined } from '@ant-design/icons';
import { environment } from '@environments/environment';
import { RootState } from '@stores/states';
import { useSelector } from 'react-redux';
import { CustomerExtraComponent } from '..';

export interface ICustomerDetailComponentProps extends IBaseProps {
  input: {
    data: CustomerVM | undefined,
  };
  output: {
    onUpdate: (form: CustomerUM) => void;
    onClose: () => void;
  };
}

export const CustomerDetailComponent: React.FC<ICustomerDetailComponentProps> = (props: ICustomerDetailComponentProps) => {
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const config = environment.i18n.data.core.modules.customer.components['customer-detail'][region];
  const arr = useSelector<RootState, CustomerExtraInformationVM[]>((state) => state.customerExtraInformation.arr);
  const [form] = Form.useForm<CustomerUM>();
  setTimeout(() => {
    if (props.input.data) {
      form.setFieldsValue(props.input.data);
    }
  }, 0);
  const formRef = React.createRef<FormInstance>();
  return (
    <Modal
      title={<span style={{ display: 'block', textAlign: 'center' }}>{config.label}</span>}
      visible={props.input.data ? true : false}
      footer={null}
      width={800}
      onCancel={() => {
        props.output.onClose();
      }}
      destroyOnClose={true}
      centered={true}
    >
      <Form labelCol={{ span: 4 }} wrapperCol={{ span: 20 }} form={form} ref={formRef} name="control-ref">
        <Form.Item name="code" label={config.fields.code.label} rules={[{ required: true, message: config.fields.code['error-message'] }]}>
          <Input placeholder={config.fields.code.label} />
        </Form.Item>
        <Form.Item name="fullname" label={config.fields.fullname.label} rules={[{ required: true, message: config.fields.fullname['error-message'] }]}>
          <Input placeholder={config.fields.fullname.label} />
        </Form.Item>
        <Form.Item name="email" label={config.fields.email.label} rules={[{ required: true, message: config.fields.email['error-message'] }]}>
          <Input placeholder={config.fields.email.label} />
        </Form.Item>
        <Form.Item name="phone" label={config.fields.phone.label} rules={[{ required: true, message: config.fields.phone['error-message'] }]}>
          <Input placeholder={config.fields.phone.label} />
        </Form.Item>
        {arr.map((item, index) => (
          <Form.Item key={index} name={item.name} label={item.name}>
            <CustomerExtraComponent input={{ item, index, disabled: false }} output={{}} />
          </Form.Item>
        ))}
        <Form.Item  wrapperCol={{ span: 24 }} style={{textAlign: 'center'}}>
          <Button type="primary" shape="round" htmlType="button" onClick={() => {
            form.isFieldsTouched(true);
            form.validateFields().then(() => props.output.onUpdate(form.getFieldsValue()));
          }}>
            <PlusOutlined /> {config.buttons['save']}
          </Button>
        </Form.Item>
      </Form>
    </Modal >
  );
};