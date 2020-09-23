import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { CustomerMainComponent } from './pages';

export interface ICustomerRoutesProps extends IBaseProps {
  input?: {};
  output?: {};
}
export const CustomerRoutes = (props: ICustomerRoutesProps) => {
  return (
    <BrowserRouter>
      <Route path={['']} component={() => <CustomerMainComponent />} />
    </BrowserRouter>
  );
};