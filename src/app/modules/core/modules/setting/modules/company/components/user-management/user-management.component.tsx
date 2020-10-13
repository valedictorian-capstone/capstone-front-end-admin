import { QuestionCircleOutlined } from '@ant-design/icons';
import { IBaseProps } from '@extras/interfaces';
import { InputComponent } from '@modules/core/modules/setting/components/input/input.component';
import { AutoComplete, Button, Cascader, Checkbox, Col, Form, Input, Layout, Row, Select, Tooltip, Typography } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import './user-management.component.css';

export interface IUserManagementComponentProps extends IBaseProps {
  input?: {};
  output?: {};
}
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

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

export const UserManagementComponent: FC<IUserManagementComponentProps> = (props: IUserManagementComponentProps) => {
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
      <Typography.Title style={{ textAlign: 'left' }} >
        User Management
      </Typography.Title>
      <Col span={20} style={{ maxHeight: window.innerHeight - 110, padding: '12px 0' }}>
        <Form
          {...formItemLayout}
          form={form}
          name="changePassword"
          onFinish={onFinish}
          scrollToFirstError={true}
        >
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