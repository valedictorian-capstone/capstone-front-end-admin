import React from 'react';
import { IBaseProps } from '@extras/interfaces';
import { Button, Form, Input, Modal } from 'antd';
import { FormGroupCM } from '@view-models';
import { FormInstance } from 'antd/lib/form';
import { PlusOutlined } from '@ant-design/icons';
import { environment } from '@environments/environment';
import { RootState } from '@stores/states';
import { useSelector } from 'react-redux';

export interface IFormCreateComponentProps extends IBaseProps {
  input: {
    code?: string;
    name?: string;
    visible: boolean;
  };
  output: {
    onCreate: (form: FormGroupCM, edit: boolean) => void;
    onClose: () => void;
  };
}

export const FormCreateComponent: React.FC<IFormCreateComponentProps> = (props: IFormCreateComponentProps) => {
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const config = environment.i18n.data.core.modules.form.components['form-create'][region];
  const [form] = Form.useForm<FormGroupCM>();
  setTimeout(() => {
    if (props.input.visible) {
      form.setFieldsValue({
        code: props.input.code || '',
        name: props.input.name || '',
        description: '',
        formControls: [],
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
        <Form.Item name="name" label={config.fields.name.label} rules={[{ required: true, message: config.fields.name['error-message'] }]}>
          <Input placeholder={config.fields.name.label} />
        </Form.Item>
        <Form.Item name="description" label={config.fields.description.label}>
          <Input.TextArea rows={5} placeholder={config.fields.description.label} />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }} style={{textAlign: 'center'}}>
          <Button type="primary" shape="round" htmlType="button" style={{ marginRight: 10 }} onClick={() => {
            form.isFieldsTouched(true);
            form.validateFields().then(() => props.output.onCreate(form.getFieldsValue(), true));
          }}>
            <PlusOutlined /> {config.buttons['create-and-edit']}
          </Button>
          <Button type="primary" shape="round" htmlType="button" onClick={() => {
            form.isFieldsTouched(true);
            form.validateFields().then(() => props.output.onCreate(form.getFieldsValue(), false));
          }}>
            <PlusOutlined /> {config.buttons['create']}
          </Button>
        </Form.Item>
      </Form>
    </Modal >
  );
};