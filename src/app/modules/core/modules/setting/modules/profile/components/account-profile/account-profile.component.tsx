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
          {/* <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
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
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        name="residence"
        label="Habitual Residence"
        rules={[
          { type: 'array', required: true, message: 'Please select your habitual residence!' },
        ]}
      >
        <Cascader options={residences} />
      </Form.Item>

      <Form.Item
        name="street"
        label={
          <span>
            Street&nbsp;
            <Tooltip title="Where is your habitual residence street ?">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[{ required: true, message: 'Please input your street!', whitespace: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="website"
        label="Website"
        rules={[{ required: true, message: 'Please input website!' }]}
      >
        <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
          <Input />
        </AutoComplete>
      </Form.Item>

      <Form.Item label="Captcha" extra="We must make sure that your are a human.">
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              name="captcha"
              noStyle={true}
              rules={[{ required: true, message: 'Please input the captcha you got!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button>Get captcha</Button>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          { validator: (_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>*/}

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
