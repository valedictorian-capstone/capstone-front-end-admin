import React from 'react';
import { IBaseProps } from '@extras/interfaces';
import './form-control.component.css';
import { FormControlUM, CustomerExtraInformationUM } from '@view-models';
import { Button, Checkbox, Col, Form, Input, Popconfirm, Row, Select, Tooltip, AutoComplete, DatePicker, TimePicker, Radio, Upload, Rate, Switch, Slider } from 'antd';
import { EditOutlined, InfoCircleOutlined, RestOutlined, CloseOutlined, CheckOutlined, MinusCircleOutlined, PlusOutlined, InboxOutlined, UploadOutlined } from '@ant-design/icons';
import moment from 'moment';
export interface IFormControlComponentProps extends IBaseProps {
  input: {
    item: FormControlUM | CustomerExtraInformationUM,
    index: number,
    isNew?: boolean,
    active: number,
  };
  output: { };
}
interface DragItem {
  index: number;
  id: string;
  type: string;
  item: FormControlUM | CustomerExtraInformationUM;
}
export const FormControlComponent: React.FC<IFormControlComponentProps> = (props: IFormControlComponentProps) => {
  const render = () => {
    switch (props.input.item.type) {
      case 'auto-complete':
        return <AutoComplete
        key={props.input.item.id}
        options={props.input.item.options}
        style={{ fontSize: props.input.item.fontSize, width: '100%', background: 'white' }}
        placeholder={props.input.item.placeHolder}
        filterOption={(input, option) => option?.value.toLowerCase().includes(input.toLowerCase())}
        />;
      case 'date-picker':
        return     <DatePicker
        key={props.input.item.id}
          style={{ fontSize: props.input.item.fontSize, width: '100%', background: 'white' }}
          placeholder={props.input.item.placeHolder}
        />;
      case 'date-range':
        return <DatePicker.RangePicker
        key={props.input.item.id}
        style={{ fontSize: props.input.item.fontSize, width: '100%', background: 'white' }}
        placeholder={['From date', 'To date']}
      />;
      case 'select':
        return     <Select
        showSearch={true}
        allowClear={true}
        placeholder={props.input.item.placeHolder}
        style={{ fontSize: props.input.item.fontSize, width: '100%', background: 'white' }}
        optionFilterProp="children"
        filterOption={(input, option) => option?.children.toLowerCase().includes(input.toLowerCase())}
      >
        {props.input.item.options.map((option: { label: string, value: string }) => (
          <Select.Option key={option.value} value={option.value}>{option.label}</Select.Option>
        ))}
      </Select>;
      case 'multi-select':
        return     <Select
        showSearch={true}
        allowClear={true}
        mode="multiple"
        placeholder={props.input.item.placeHolder}
        style={{ fontSize: props.input.item.fontSize, width: '100%', background: 'white' }}
        optionFilterProp="children"
        filterOption={(input, option) => option?.children.toLowerCase().includes(input.toLowerCase())}
      >
        {props.input.item.options.map((option: { label: string, value: string }) => (
          <Select.Option key={option.value} value={option.value}>{option.label}</Select.Option>
        ))}
      </Select>;
      case 'input':
        return <Input type={props.input.item.subType} placeholder={props.input.item.placeHolder} style={{ fontSize: props.input.item.fontSize, width: '100%', background: 'white' }} />;
      case 'text-area':
        return <Input.TextArea name={props.input.item.name} id={props.input.item.id} key={props.input.item.id + '-' + props.input.item.name} placeholder={props.input.item.placeHolder} style={{ fontSize: props.input.item.fontSize, width: '100%', background: 'white' }} />;
      case 'time-picker':
        return     <TimePicker
        style={{ fontSize: props.input.item.fontSize, width: '100%', background: 'white' }}
        placeholder={props.input.item.placeHolder}
        defaultValue={moment('00:00:00', 'HH:mm:ss')}
      />;
      case 'check-box':
        return <Checkbox
        key={props.input.item.id}
      >{props.input.item.label}</Checkbox>;
      case 'radio':
        return     <Radio.Group
        style={{ fontSize: props.input.item.fontSize, width: '100%', background: 'white' }}
      >
        {props.input.item.options.map((option: { label: string, value: string }) => (
          <Radio key={option.value} value={option.value}>{option.label}</Radio>
        ))}
      </Radio.Group>;
      case 'rate':
        return <Rate />;
      case 'switch':
        return <Switch />;
      case 'slider':
        return <Slider />;
      case 'file-upload':
        return <Upload.Dragger name="files" action="/upload.do">
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">Support for a single or bulk upload.</p>
      </Upload.Dragger>;
      case 'check-box-group':
        return <Checkbox.Group style={{ fontSize: props.input.item.fontSize, width: '100%', background: 'white' }}>
        {props.input.item.options.map((option: { label: string, value: string }) => (
          <Checkbox key={option.value} value={option.value}>{option.label}</Checkbox>
        ))}
      </Checkbox.Group>;
      default:
        return <Input type={props.input.item.subType} placeholder={props.input.item.placeHolder} style={{ fontSize: props.input.item.fontSize, width: '100%', background: 'white' }} />;
    }
  };
  return (
    <Col key={props.input.item.id} id={props.input.item.id} xs={props.input.item.xs} sm={props.input.item.sm} md={props.input.item.sm} lg={props.input.item.lg} xl={props.input.item.xl} xxl={props.input.item.xxl}>
      <div className="form-control" style={{ position: 'relative' }}>
        <label>
          {props.input.item.label}
          <Tooltip title={props.input.item.tooltip}>
            <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
          </Tooltip>
        </label>
        <Form.Item name={props.input.item.name + '-<hr>-' + props.input.item.id} rules={[{ required: true, message: props.input.item.label + ' must be required' }]}>
          {render()}
        </Form.Item>
      </div>
    </Col>
  );
};