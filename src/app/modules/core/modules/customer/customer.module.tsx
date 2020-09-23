import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { CustomerRoutes } from './customer.routing';

export interface ICustomerModuleProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const CustomerModule = (props: ICustomerModuleProps) => {
  return (
    <CustomerRoutes />
  );
};