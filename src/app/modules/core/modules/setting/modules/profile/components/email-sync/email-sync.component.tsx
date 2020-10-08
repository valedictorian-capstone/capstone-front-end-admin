import { QuestionCircleOutlined } from '@ant-design/icons';
import { IBaseProps } from '@extras/interfaces';
import { InputComponent } from '@modules/core/modules/setting/components/input/input.component';
import { AutoComplete, Button, Cascader, Checkbox, Col, DatePicker, Form, Input, Layout, Row, Select, Tooltip } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import './email-sync.component.css';

export interface IEmailSyncComponentProps extends IBaseProps {
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

export const EmailSyncComponent: FC<IEmailSyncComponentProps> = (props: IEmailSyncComponentProps) => {
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
    <div id="email_integration_tab">
      <h1 className="title with-line cui4-text cui4-spacing--top-l cui4-spacing--right-l cui4-spacing--left-l">Email integration</h1>
      <div id="mailbox_v2_settings_container" data-connection-status="">
        <div className="promo" data-composer-drafts-sent-promo="silver-admin-promo">
          <div className="promo__content cui4-spacing--right-l cui4-spacing--left-l">
            <section className="promo__unlock-inbox">
              <div className="header">
                <div>
                  <div className="header__text">Unlock your Sales Inbox</div>
                  <div className="cui4-badge cui4-badge--tier-gold" style={{ marginLeft: '12px', marginTop: '2px'}}>
                    <div className="cui4-badge__label">Advanced</div>
                  </div>
                </div>
                <div className="header__explanation">
                  Tab switching and manually forwarding emails to Pipedrive is a thing of the past. When unlocked, you can use your Sales Inbox to send email directly from Pipedrive while automatically linking them to related deals and contacts.				</div>
              </div>
            </section>

            <section className="promo__features">
              <div className="feature">
                <span className="icon-check"/>
                <span>Sync Pipedrive emails with any major email provider</span>
              </div>
              <div className="feature">
                <span className="icon-check"/>
                <span>Track email opens and clicks</span>
              </div>
              <div className="feature">
                <span className="icon-check"/>
                <span>Save time by making use of customizable templates</span>
              </div>
              <div className="feature">
                <span className="icon-check"/>
                <span>Customize your signature for a more professional look</span>
              </div>
              <div className="icon-email-sync">
                <img src="https://cdn.us-east-1.pipedriveassets.com/statikos/img/icons/email-sync.svg" />
              </div>
            </section>

            <section className="promo__upgrade">
              <div className="account-container">
                <div className="new-account">
                  <button className="button open-3party-auth" data-usage-tracking-data="{&quot;component_code&quot;:&quot;settings_sync_add_account&quot;, &quot;action_code&quot;: &quot;clicked&quot;, &quot;source&quot;: &quot;email_settings_page&quot;, &quot;sync_type&quot;: &quot;email_sync&quot;, &quot;sync_provider&quot;: &quot;pipemailer&quot;, &quot;flag_existing_accounts&quot;: &quot;false&quot;}">
                    <span className="primary">Add new account</span>
                  </button>
                  <div className="button mail-spinner">
                    <span className="primary">Add new account</span>
                    <div className="cui4-spinner cui4-spinner--s cui4-spinner--light">
                      <div className="cui4-spinner__trail"/>
                    </div>
                  </div>
                  <a className="learn-more" target="_blank" href="https://www.pipedrive.com/en/features/email-integration">Learn more about Email integration</a>
                </div>
              </div>
            </section>
            <div className="promo__border"/>
          </div>
        </div>
        <div className="clear"/>
      </div>
    </div>

  );
};
