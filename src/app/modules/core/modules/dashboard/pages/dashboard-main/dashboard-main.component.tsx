import { IBaseProps } from '@extras/interfaces';
import { Row } from 'antd';
import React from 'react';
import './dashboard-main.component.css';

export interface IDashboardMainComponentProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const DashboardMainComponent = (props: IDashboardMainComponentProps) => {
  return (
    <span>This is dashboard</span>
  );
};