import React from 'react';
import { IBaseProps } from '@extras/interfaces';
import './form-preview.component.css';

export interface IFormPreviewComponentProps extends IBaseProps {
  input: {};
  output: {};
}

export const FormPreviewComponent: React.FC<IFormPreviewComponentProps> = (props: IFormPreviewComponentProps) => {
  return <></>;
};