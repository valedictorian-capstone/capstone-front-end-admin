import { IBaseProps } from '@extras/interfaces';
import { FormControlVM } from '@view-models';
import { DatePicker } from 'antd';
import React from 'react';
import './date-picker.component.css';
export interface IDatePickerComponentProps extends IBaseProps {
  input: {
    item: FormControlVM,
    isDesign?: boolean,
    index: number,
  };
  output: {
  };
}

export const DatePickerComponent: React.FC<IDatePickerComponentProps> = (props: IDatePickerComponentProps) => {
  return (
    <DatePicker
    key={props.input.item.id}
      style={{ fontSize: props.input.item.fontSize, width: '100%', background: 'white' }}
      placeholder={props.input.item.placeHolder}
    />
  );
};