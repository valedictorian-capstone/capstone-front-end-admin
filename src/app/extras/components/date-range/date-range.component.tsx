import { IBaseProps } from '@extras/interfaces';
import { FormControlVM } from '@view-models';
import { DatePicker } from 'antd';
import React from 'react';
import './date-range.component.css';
export interface IDateRangeComponentProps extends IBaseProps {
  input: {
    item: FormControlVM,
    isDesign?: boolean,
    index: number,
  };
  output: {
  };
}

export const DateRangeComponent: React.FC<IDateRangeComponentProps> = (props: IDateRangeComponentProps) => {
  return (
    <DatePicker.RangePicker
      key={props.input.item.id}
      style={{ fontSize: props.input.item.fontSize, width: '100%', background: 'white' }}
      placeholder={['From date', 'To date']}
    />
  );
};