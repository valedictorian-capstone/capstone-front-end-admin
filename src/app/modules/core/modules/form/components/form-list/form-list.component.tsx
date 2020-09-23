import { IBaseProps } from '@extras/interfaces';
import { Row } from 'antd';
import React from 'react';
import './form-list.component.css';

export interface IFormListComponentProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const FormListComponent = (props: IFormListComponentProps) => {
  return (
    <Row gutter={16} />
  );
};