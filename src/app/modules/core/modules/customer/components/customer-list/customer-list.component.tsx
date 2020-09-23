import { IBaseProps } from '@extras/interfaces';
import { Row } from 'antd';
import React from 'react';
import './customer-list.component.css';

export interface ICustomerListComponentProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const CustomerListComponent = (props: ICustomerListComponentProps) => {
  return (
    <Row gutter={16} />
  );
};