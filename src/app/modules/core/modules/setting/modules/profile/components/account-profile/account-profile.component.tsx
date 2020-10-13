import { QuestionCircleOutlined } from '@ant-design/icons';
import { IBaseProps } from '@extras/interfaces';
import { InputComponent } from '@modules/core/modules/setting/components/input/input.component';
import { AutoComplete, Typography, Button, Cascader, Checkbox, Col, DatePicker, Form, Input, Layout, Row, Select, Tooltip } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import './account-profile.component.css';

export interface IAccountProfileComponentProps extends IBaseProps {
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
const inputField = [
  {
    name: 'email',
    label: 'E-mail',
    rules: [
      {
        type: 'email',
        message: 'The input is not valid E-mail!',
      },
      {
        required: true,
        message: 'Please input your E-mail!',
      },
    ],
  },
  {
    name: 'password',
    label: 'Password',
    rules: [
      {
        type: 'string',
        required: true,
        pattern: new RegExp(/\d+/g),
        min: 6,
        max: 20,
        message: 'Please input your password!',
      },
    ],
  },
  {
    name: 'confirm',
    label: 'Confirm Password',
    rules: [
      {
        type: 'string',
        required: true,
        pattern: new RegExp(/\w+/g),
        min: 6,
        max: 20,
        // message: 'Please input your password!',
      },
    ],
  },
  {
    name: 'phone',
    label: 'Phone Number',
    rules: [
      {
        type: 'string',
        required: true,
        pattern: new RegExp(/\d+/g),
        min: 10,
        max: 20,
        message: 'Please input your phone!',
      },
    ],
  },
  // {
  //   name: 'residence',
  //   label: 'Habitual Residence',
  //   rules: [
  //     {
  //       type: 'array',
  //       required: true,
  //       message: 'Please select your habitual residence!',
  //     },
  //   ],
  // },
  {
    name: 'street',
    label: 'Habitual Residence',
    rules: [
      {
        required: true,
        message: 'Please input your habitual residence!',
        whitespace: true,
      },
    ],
  },
  {
    name: 'website',
    label: 'Website',
    rules: [
      {
        required: true,
        message: 'Please input website!',
      },
    ],
  },
];

export const AccountProfileComponent: FC<IAccountProfileComponentProps> = (props: IAccountProfileComponentProps) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle={true}>
      <Select style={{ width: 70 }}>
        <Option value="084">084</Option>
      </Select>
    </Form.Item>
  );

  const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

  const onWebsiteChange = (value: any) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map(domain => `${value}${domain}`));
    }
  };

  const websiteOptions = autoCompleteResult.map(website => ({
    label: website,
    value: website,
  }));

  return (
    <>
      <Col span={20} style={{ maxHeight: window.innerHeight - 110, padding: '12px 0' }}>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ['zhejiang', 'hangzhou', 'xihu'],
            prefix: '084',
          }}
          scrollToFirstError={true}
        >

          {inputField.map((value, index) => {
            return <InputComponent key={index} input={value} />;
          })}

          <Form.Item name="date" label="Date"
            rules={[
              {
                type: 'date',
                required: true,
                message: 'Please choose correct date!',
              },
            ]}
          >
            <DatePicker showTime={true} format="YYYY-MM-DD HH:mm:ss" />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Update Profile
        </Button>
          </Form.Item>
        </Form>
      </Col>
    </>
  );
};
