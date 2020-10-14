import { IBaseProps } from '@extras/interfaces';
import { FormControlVM } from '@view-models';
import { Slider } from 'antd';
import React from 'react';
import './slider.component.css';
export interface ISliderComponentProps extends IBaseProps {
  input: {
    item: FormControlVM,
    isDesign?: boolean,
    index: number,
  };
  output: {
  };
}

export const SliderComponent: React.FC<ISliderComponentProps> = (props: ISliderComponentProps) => {
  return (
    <Slider />
  );
};