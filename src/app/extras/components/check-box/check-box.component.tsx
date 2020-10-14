import { IBaseProps } from '@extras/interfaces';
import { FormControlVM } from '@view-models';
import React from 'react';
import './check-box.component.css';
import { Checkbox } from 'antd';

export interface ICheckBoxComponentProps extends IBaseProps {
  input: {
    item: FormControlVM,
    isDesign?: boolean,
    index: number,
  };
  output: {
  };
}
export const CheckBoxComponent: React.FC<ICheckBoxComponentProps> = (props: ICheckBoxComponentProps) => {

  return <Checkbox
    key={props.input.item.id}
  >{props.input.item.label}</Checkbox>;
};