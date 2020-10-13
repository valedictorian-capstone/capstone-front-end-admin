import { IBaseProps } from '@extras/interfaces';
import { Row } from 'antd';
import React from 'react';
import './profile-main.component.css';

export interface IProfileMainComponentProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const ProfileMainComponent = (props: IProfileMainComponentProps) => {
  return (
    <Row gutter={16} />
  );
};