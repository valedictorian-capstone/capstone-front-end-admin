import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { CustomerRoutes } from './customer.routing';

export interface ICustomerModuleProps extends IBaseProps {
  input: {};
  output: {};
}

export const CustomerModule: React.FC<ICustomerModuleProps> = (props: ICustomerModuleProps) => {
  return (
    <CustomerRoutes input={{}} output={{}} fatherProps={props} />
  );
};