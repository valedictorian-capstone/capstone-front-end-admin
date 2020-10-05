import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { RootState } from '@stores/states';
import { FormGroupUM } from '@view-models';
import { Button, Card, Form, Input } from 'antd';
import { FormInstance } from 'antd/lib/form';
import React from 'react';
import { useSelector } from 'react-redux';
import './form-detail.component.css';
import { EditOutlined } from '@ant-design/icons';

export interface IFormDetailComponentProps extends IBaseProps {
  input: {
    form: FormGroupUM,
  };
  output: {
    onSave: (form: FormGroupUM) => void,
  };
}

export const FormDetailComponent: React.FC<IFormDetailComponentProps> = (props: IFormDetailComponentProps) => {
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const config = environment.i18n.data.core.modules.form.components['form-detail'][region];
  const [form] = Form.useForm<FormGroupUM>();
  setTimeout(() => {
      form.setFieldsValue(props.input.form);
  }, 0);
  const formRef = React.createRef<FormInstance>();
  return (
    <Card key="detail" title={(
      <span style={{ textAlign: 'center', display: 'block', fontSize: 11, fontWeight: 900 }}>
        {config.label}
      </span>
    )} style={{ height: '100%', background: 'transparent', border: '1px solid rgb(217 217 217' }}>
      {form && (
        <>
          <Form labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} form={form} ref={formRef} name="control-ref">
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
          <Button type="primary" shape="round" htmlType="button" onClick={() => {
            form.isFieldsTouched(true);
            form.validateFields().then(() => props.output.onSave(form.getFieldsValue()));
          }}>
            <EditOutlined /> {config.buttons['save']}
          </Button>
        </Form.Item>
      </Form>
        </>
      )}
    </Card>
  );
};