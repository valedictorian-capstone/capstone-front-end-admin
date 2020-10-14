import { IBaseProps } from '@extras/interfaces';
import { FormControlVM } from '@view-models';
import { Switch } from 'antd';
import React from 'react';
import './switch.component.css';
export interface ISwitchComponentProps extends IBaseProps {
  input: {
    item: FormControlVM,
    isDesign?: boolean,
    index: number,
  };
  output: {
  };
}

export const SwitchComponent: React.FC<ISwitchComponentProps> = (props: ISwitchComponentProps) => {
  return (
    <Switch />
  );
};