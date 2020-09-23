import { IBaseProps } from '@extras/interfaces';
import { Row } from 'antd';
import React from 'react';
import './dashboard-list.component.css';

export interface IDashboardListComponentProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const DashboardListComponent = (props: IDashboardListComponentProps) => {
  return (
    <Row gutter={16} />
  );
};