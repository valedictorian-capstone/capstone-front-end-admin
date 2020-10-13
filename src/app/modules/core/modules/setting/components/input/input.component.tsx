import { IBaseProps } from '@extras/interfaces';
import { AutoComplete, Form, Input, Select, Cascader, DatePicker } from 'antd';
import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './input.component.scss';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
export interface IInputComponentProps extends IBaseProps {
  input?: {
    name: string,
    label: any,
    rules: object[],
    type?: string,
    help?: string,
    style?: {},
  };
  output?: {};
}

export const InputComponent: FC<IInputComponentProps> = (props: IInputComponentProps) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = React.useState<{ collapsed: boolean }>({ collapsed: true });
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

  const { name, label, rules } = props.input ?? {
    name: 'string',
    label: 'string',
    rules: [{
      required: true,
      message: 'Please input your value',
    }],
  };

  const inputType = () => {
    switch (name) {
      case 'phone':
        return (
          <Input addonBefore={prefixSelector} style={{ width: '100%' }} allowClear={true} />
        );
      case 'website':
        return (
          <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
            <Input allowClear={true} />
          </AutoComplete>
        );
      case 'street':
        return (
          <Input.TextArea allowClear={true} />
        );
      case 'password':
        return (
          <Input.Password allowClear={true} />
        );
      case 'confirm':
        return (
          <Input.Password allowClear={true} />
        );
      case 'date-time-picker':
        return (
          <DatePicker showTime={true} format="YYYY-MM-DD HH:mm:ss" />
        );
      default:
        return <Input allowClear={true} />;
    }
  };

  return (
    <>
      <Form.Item
        name={name}
        label={label}
        dependencies={[name === 'confirm' ? ['password'] : '']}
        hasFeedback={true}
        // help={props.input?.help ?? false}
        // style={props.input?.style ?? ''}
        rules={[
          ...rules,
          name === 'confirm' ?
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('The two passwords that you entered do not match!');
              },
            }) : {},
          // ({ getFieldValue }) => ({
          //   validator(rule, value) {
          //     const convertedValue = Number(getFieldValue('password'));
          //     if (isNaN(convertedValue)) {
          //       return Promise.reject('Number only please');
          //     } else {
          //       return Promise.resolve();
          //     }
          //   },
          // }),
        ]}
      >
        {inputType()}
      </Form.Item>
    </>
  );
};