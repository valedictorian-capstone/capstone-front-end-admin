import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { DashboardRoutes } from './dashboard.routing';

export interface IDashboardModuleProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const DashboardModule = (props: IDashboardModuleProps) => {
  return (
    <DashboardRoutes />
  );
};