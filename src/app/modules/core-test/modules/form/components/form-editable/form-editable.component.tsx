import React from 'react';
import { IBaseProps } from '@extras/interfaces';
import './form-editable.component.css';
import { FormGroupVM } from '@view-models';

export interface IFormEditableComponentProps extends IBaseProps {
  input: {
    row: FormGroupVM | undefined,
  };
  output: {};
}

export const FormEditableComponent: React.FC<IFormEditableComponentProps> = (props: IFormEditableComponentProps) => {
  return <></>;
};