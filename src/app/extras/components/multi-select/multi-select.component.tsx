import { IBaseProps } from '@extras/interfaces';
import { FormControlVM } from '@view-models';
import { Select } from 'antd';
import React from 'react';
import './multi-select.component.css';

export interface IMultiSelectComponentProps extends IBaseProps {
  input: {
    item: FormControlVM,
    isDesign?: boolean,
    index: number,
  };
  output: {
  };
}

export const MultiSelectComponent: React.FC<IMultiSelectComponentProps> = (props: IMultiSelectComponentProps) => {
  return (
    <Select
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
    </Select>
  );
};