import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { AccountRoutes } from './account.routing';

export interface IAccountModuleProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const AccountModule = (props: IAccountModuleProps) => {
  return (
    <AccountRoutes />
  );
};