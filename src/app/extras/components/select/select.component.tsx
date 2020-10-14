import { IBaseProps } from '@extras/interfaces';
import { FormControlVM } from '@view-models';
import { Select } from 'antd';
import React from 'react';
import './select.component.css';

export interface ISelectComponentProps extends IBaseProps {
  input: {
    item: FormControlVM,
    isDesign?: boolean,
    index: number,
  };
  output: {
  };
}

export const SelectComponent: React.FC<ISelectComponentProps> = (props: ISelectComponentProps) => {

  return (
    <Select
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
    </Select>
  );
};