import React from 'react';
import { IBaseProps } from '@extras/interfaces';
import './float-label.component.css';

export interface IFloatLabelComponentProps extends IBaseProps {
  input: {
    label: string,
    value: any,
  };
  output: {};
}

export const FloatLabelComponent: React.FC<IFloatLabelComponentProps> = (props: IFloatLabelComponentProps) => {
  const [focus, setFocus] = React.useState<boolean>(false);
  return (
    <div
      className="float-label"
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      {props.children}
      <label className={focus || (props.input.value && props.input.value.length !== 0) ? 'label label-float' : 'label'}>{props.input.label}</label>
    </div>
  );
};