import { IBaseProps } from '@extras/interfaces';
import { FormControlVM } from '@view-models';
import { TimePicker } from 'antd';
import moment from 'moment';
import React from 'react';
import './time-picker.component.css';
export interface ITimePickerComponentProps extends IBaseProps {
  input: {
    item: FormControlVM,
    isDesign?: boolean,
    index: number,
  };
  output: {
  };
}

export const TimePickerComponent: React.FC<ITimePickerComponentProps> = (props: ITimePickerComponentProps) => {
  return (
    <TimePicker
      style={{ fontSize: props.input.item.fontSize, width: '100%', background: 'white' }}
      placeholder={props.input.item.placeHolder}
      defaultValue={moment('00:00:00', 'HH:mm:ss')}
    />
  );
};