import { IBaseProps } from '@extras/interfaces';
import { Row } from 'antd';
import React from 'react';
import './account-list.component.css';

export interface IAccountListComponentProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const AccountListComponent = (props: IAccountListComponentProps) => {
  return (
    <Row gutter={16} />
  );
};