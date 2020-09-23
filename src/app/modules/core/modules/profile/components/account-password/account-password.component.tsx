import { IBaseProps } from '@extras/interfaces';
import { Row } from 'antd';
import React from 'react';
import './account-password.component.css';

export interface IAccountPasswordComponentProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const AccountPasswordComponent = (props: IAccountPasswordComponentProps) => {
  return (
    <Row gutter={16} />
  );
};