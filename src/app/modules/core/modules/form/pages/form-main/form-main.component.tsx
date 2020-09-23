import { IBaseProps } from '@extras/interfaces';
import { Row } from 'antd';
import React from 'react';
import './form-main.component.css';

export interface IFormMainComponentProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const FormMainComponent = (props: IFormMainComponentProps) => {
  return (
    <Row gutter={16} />
  );
};