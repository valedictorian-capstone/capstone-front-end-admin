import React from 'react';
import { IBaseProps } from '@extras/interfaces';
import { Button, Form, Input, Modal } from 'antd';
import { AccountCM, AccountExtraInformationVM } from '@view-models';
import { FormInstance } from 'antd/lib/form';
import { PlusOutlined } from '@ant-design/icons';
import { environment } from '@environments/environment';
import { RootState } from '@stores/states';
import { useSelector } from 'react-redux';
import { AccountExtraComponent } from '..';

export interface IAccountCreateComponentProps extends IBaseProps {
  input: {
    code?: string;
    fullname?: string;
    email?: string;
    phone?: string;
    visible: boolean;
  };
  output: {
    onCreate: (form: AccountCM) => void;
    onClose: () => void;
  };
}

export const AccountCreateComponent: React.FC<IAccountCreateComponentProps> = (props: IAccountCreateComponentProps) => {
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const config = environment.i18n.data.core.modules.account.components['account-create'][region];
  const arr = useSelector<RootState, AccountExtraInformationVM[]>((state) => state.accountExtraInformation.arr);
  const [form] = Form.useForm<AccountCM>();
  setTimeout(() => {
    if (props.input.visible) {
      form.setFieldsValue({
        code: props.input.code || '',
        fullname: props.input.fullname || '',
        email: props.input.email || '',
        phone: props.input.phone || '',
      });
    }
  }, 0);
  const formRef = React.createRef<FormInstance>();
  return (
    <Modal
      title={<span style={{ display: 'block', textAlign: 'center' }}>{config.label}</span>}
      visible={props.input.visible || false}
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
            <AccountExtraComponent input={{ item, index, disabled: false }} output={{}} />
          </Form.Item>
        ))}
        <Form.Item wrapperCol={{ span: 24 }} style={{textAlign: 'center'}}>
          <Button type="primary" shape="round" htmlType="button" onClick={() => {
            form.isFieldsTouched(true);
            form.validateFields().then(() => props.output.onCreate(form.getFieldsValue()));
          }}>
            <PlusOutlined /> {config.buttons['create']}
          </Button>
        </Form.Item>
      </Form>
    </Modal >
  );
};