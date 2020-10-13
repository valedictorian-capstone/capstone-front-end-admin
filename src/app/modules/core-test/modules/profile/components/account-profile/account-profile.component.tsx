import { IBaseProps } from '@extras/interfaces';
import { Row } from 'antd';
import React from 'react';
import './account-profile.component.css';

export interface IAccountProfileComponentProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const AccountProfileComponent = (props: IAccountProfileComponentProps) => {
  return (
    <Row gutter={16} />
  );
};