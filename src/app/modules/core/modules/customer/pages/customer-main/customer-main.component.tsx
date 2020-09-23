import { IBaseProps } from '@extras/interfaces';
import { Row } from 'antd';
import React from 'react';
import './customer-main.component.css';

export interface ICustomerMainComponentProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const CustomerMainComponent = (props: ICustomerMainComponentProps) => {
  return (
    <Row gutter={16} />
  );
};