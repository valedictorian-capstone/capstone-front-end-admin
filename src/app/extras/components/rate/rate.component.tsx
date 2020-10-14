import { IBaseProps } from '@extras/interfaces';
import { FormControlVM } from '@view-models';
import { Rate } from 'antd';
import React from 'react';
import './rate.component.css';
export interface IRateComponentProps extends IBaseProps {
  input: {
    item: FormControlVM,
    isDesign?: boolean,
    index: number,
  };
  output: {
  };
}

export const RateComponent: React.FC<IRateComponentProps> = (props: IRateComponentProps) => {
  return (
    <Rate />
  );
};