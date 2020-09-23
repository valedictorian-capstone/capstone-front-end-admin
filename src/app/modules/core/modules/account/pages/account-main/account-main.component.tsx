import { IBaseProps } from '@extras/interfaces';
import { Row } from 'antd';
import React from 'react';
import './account-main.component.css';

export interface IAccountMainComponentProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const AccountMainComponent = (props: IAccountMainComponentProps) => {
  return (
    <Row gutter={16} />
  );
};