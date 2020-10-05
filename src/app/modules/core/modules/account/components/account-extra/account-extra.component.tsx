import { InfoCircleOutlined } from '@ant-design/icons';
import { IBaseProps } from '@extras/interfaces';
import { AccountExtraInformationCM, AccountExtraInformationUM } from '@view-models';
import { AutoComplete, Checkbox, DatePicker, Input, Radio, Select, Switch, TimePicker, Tooltip } from 'antd';
import moment from 'moment';
import React from 'react';

export interface IAccountExtraComponentProps extends IBaseProps {
  input: {
    item: AccountExtraInformationCM | AccountExtraInformationUM,
    index: number,
    disabled?: boolean,
  };
  output: {
  };
}

export const AccountExtraComponent: React.FC<IAccountExtraComponentProps> = (props: IAccountExtraComponentProps) => {
  const renderInput = (item: AccountExtraInformationCM | AccountExtraInformationUM) => {
    switch (item.type) {
      case 'select':
        return <Select
          showSearch={true}
          allowClear={true}
          disabled={props.input.disabled ? props.input.disabled : false}
          placeholder={item.placeHolder}
          style={{ width: '100%', background: 'white' }}
          optionFilterProp="children"
          filterOption={(input, option) => option?.children.toLowerCase().includes(input.toLowerCase())}
        >
          {JSON.parse(item.options).map((option: { label: string, value: string }) => (
            <Select.Option key={option.value} value={option.value}>{option.label}</Select.Option>
          ))}
        </Select>;
      case 'multi-select':
        return <Select
          showSearch={true}
          allowClear={true}
          mode="multiple"
          disabled={props.input.disabled ? props.input.disabled : false}
          placeholder={item.placeHolder}
          style={{ width: '100%', background: 'white' }}
          optionFilterProp="children"
          filterOption={(input, option) => option?.children.toLowerCase().includes(input.toLowerCase())}
        >
          {JSON.parse(item.options).map((option: { label: string, value: string }) => (
            <Select.Option key={option.value} value={option.value}>{option.label}</Select.Option>
          ))}
        </Select>;
      case 'auto-complete':
        return <AutoComplete
          options={JSON.parse(item.options)}
          disabled={props.input.disabled ? props.input.disabled : false}
          style={{ width: '100%', background: 'white' }}
          placeholder={item.placeHolder}
          filterOption={(input, option) => option?.value.toLowerCase().includes(input.toLowerCase())}
        />;
      case 'radio':
        return <Radio.Group style={{ width: '100%' }} disabled={props.input.disabled ? props.input.disabled : false}>
          {JSON.parse(item.options).map((option: { label: string, value: string }) => (
            <Radio.Button key={option.value} value={option.value}>{option.label}</Radio.Button>
          ))}
        </Radio.Group>;
      case 'check-box':
        return JSON.parse(item.options).map((option: { label: string, value: string }) => (
          <Checkbox disabled={props.input.disabled ? props.input.disabled : false} style={{ width: '100%' }} value={option.value} key={option.value}>{option.label}</Checkbox>
        ));
      case 'check-box-group':
        return <Checkbox.Group disabled={props.input.disabled ? props.input.disabled : false} style={{ width: '100%' }} options={JSON.parse(item.options)} />;
      case 'date-picker':
        return <DatePicker
          disabled={props.input.disabled ? props.input.disabled : false}
          style={{ width: '100%', background: 'white' }}
          placeholder={item.placeHolder}
        />;
      case 'date-range':
        return <DatePicker.RangePicker
          disabled={props.input.disabled ? props.input.disabled : false}
          style={{ width: '100%', background: 'white' }}
          placeholder={JSON.parse(item.placeHolder)}
        />;
      case 'time-picker':
        return <TimePicker
          disabled={props.input.disabled ? props.input.disabled : false}
          style={{ width: '100%', background: 'white' }}
          placeholder={item.placeHolder}
          defaultValue={moment('00:00:00', 'HH:mm:ss')}
        />;
      case 'text-area':
        return <Input.TextArea disabled={props.input.disabled ? props.input.disabled : false} rows={5} name={item.name} id={item.id} key={item.id + '-' + item.name} placeholder={item.placeHolder} style={{ width: '100%', background: 'white' }} />;
      case 'switch':
        return <Switch disabled={props.input.disabled ? props.input.disabled : false} checkedChildren={JSON.parse(item.placeHolder)[0]} unCheckedChildren={JSON.parse(item.placeHolder)[1]} />;
      default:
        return <Input disabled={props.input.disabled ? props.input.disabled : false} suffix={
          <Tooltip title={item.tooltip}>
            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
          </Tooltip>
        } name={item.name} id={item.id} key={item.id + '-' + item.name} type={item.subType} placeholder={item.placeHolder} style={{ width: '100%', background: 'white' }} />;
    }
  };
  return renderInput(props.input.item as AccountExtraInformationCM | AccountExtraInformationUM);
};