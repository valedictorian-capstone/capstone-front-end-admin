import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { BrowserRouter, Route, RouteComponentProps } from 'react-router-dom';
import { CustomerMainComponent } from './pages';

export interface ICustomerRoutesProps extends IBaseProps {
  input: {};
  output: {};
}
export const CustomerRoutes: React.FC<ICustomerRoutesProps> = (props: ICustomerRoutesProps) => {
  return (
    <BrowserRouter>
      <Route exact={true} path="/core/customer" component={(routeProps: RouteComponentProps) => <CustomerMainComponent {...routeProps} input={{}} output={{}} fatherProps={props} />} />
    </BrowserRouter>
  );
};