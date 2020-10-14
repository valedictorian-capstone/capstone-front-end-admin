import { IBaseProps } from '@extras/interfaces';
import { FormControlVM } from '@view-models';
import { Radio } from 'antd';
import React from 'react';
import './radio.component.css';

export interface IRadioComponentProps extends IBaseProps {
  input: {
    item: FormControlVM,
    isDesign?: boolean,
    index: number,
  };
  output: {
  };
}

export const RadioComponent: React.FC<IRadioComponentProps> = (props: IRadioComponentProps) => {
  return (
    <Radio.Group
      style={{ fontSize: props.input.item.fontSize, width: '100%', background: 'white' }}
    >
      {props.input.item.options.map((option: { label: string, value: string }) => (
        <Radio key={option.value} value={option.value}>{option.label}</Radio>
      ))}
    </Radio.Group>
  );
};