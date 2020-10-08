import { IBaseProps } from '@extras/interfaces';
import { InputComponent } from '@modules/core/modules/setting/components/input/input.component';
import { Button, Form, Col, Row, Typography } from 'antd';
import React, { FC } from 'react';
import './account-password.component.css';

export interface IAccountPasswordComponentProps extends IBaseProps {
  input?: {};
  output?: {};
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export const AccountPasswordComponent: FC<IAccountPasswordComponentProps> = (props: IAccountPasswordComponentProps) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const inputField = [
    {
      name: 'password',
      label: 'New Password',
      rules: [{
        type: 'string',
        required: true,
        pattern: new RegExp(/\d+/g),
        min: 6,
        max: 20,
        message: 'Please input your password!',
      }],
    },
    {
      name: 'confirm',
      label: 'Confirm Password',
      rules: [{
        type: 'string',
        required: true,
        pattern: new RegExp(/\d+/g),
        min: 6,
        max: 20,
        // message: 'Please input your password!',
      }],
    },
  ];

  return (
    <>
      {/* <Row style={{ minHeight: '7vh', height: 'fit-content', padding: '12px 0 24px 60px' }} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}> */}
      {/* <Col span={20}> */}
      <Typography.Title style={{ textAlign: 'left' }} >
        <h3>
          Change password
            </h3>
        <h4>
          Keep your data safe by creating a password that is complex and long enough. It should be easy for you to remember but hard for others to guess.
            </h4>
      </Typography.Title>
      {/* </Col>
      </Row> */}
      <Col span={20} style={{ maxHeight: window.innerHeight - 110, padding: '12px 0' }}>
        <Form
          {...formItemLayout}
          form={form}
          name="changePassword"
          onFinish={onFinish}
          scrollToFirstError={true}
        >
          {/* <Form.Item
        name="password"
        label="New Password"
        rules={[
          {
            type: 'string', required: true, pattern: new RegExp(/\d+/g), min: 6, max: 20, message: 'Please input your password!',
          },
        ]}
        hasFeedback={true}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback={true}
        rules={[
          { type: 'string', required: true, min: 6, max: 20, message: 'invalid zip' },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
          ({ getFieldValue }) => ({
            validator(rule, value) {
              const convertedValue = Number(getFieldValue('confirm'));
              if (isNaN(convertedValue)) {
                return Promise.reject('Number only please');
              } else {
                return Promise.resolve();
              }
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item> */}
          {inputField.map((value, index) => {
            return <InputComponent key={index} input={value} />;
          })}

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Change password
          </Button>
          </Form.Item>
        </Form>
      </Col>
    </>
  );
};