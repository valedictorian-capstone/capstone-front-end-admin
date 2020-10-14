import { IBaseProps } from '@extras/interfaces';
import { FormControlVM } from '@view-models';
import React from 'react';
import './check-box-group.component.css';
import { Checkbox } from 'antd';

export interface ICheckBoxGroupComponentProps extends IBaseProps {
  input: {
    item: FormControlVM,
    isDesign?: boolean,
    index: number,
  };
  output: {
  };
}
export const CheckBoxGroupComponent: React.FC<ICheckBoxGroupComponentProps> = (props: ICheckBoxGroupComponentProps) => {

  return (
    <Checkbox.Group style={{ fontSize: props.input.item.fontSize, width: '100%', background: 'white' }}>
      {props.input.item.options.map((option: { label: string, value: string }) => (
        <Checkbox key={option.value} value={option.value}>{option.label}</Checkbox>
      ))}
    </Checkbox.Group>
  );
};