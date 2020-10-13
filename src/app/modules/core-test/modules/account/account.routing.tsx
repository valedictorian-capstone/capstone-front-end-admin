import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { BrowserRouter, Route, RouteComponentProps } from 'react-router-dom';
import { AccountMainComponent, AccountEditableComponent } from './pages';

export interface IAccountRoutesProps extends IBaseProps {
  input: {};
  output: {};
}
export const AccountRoutes: React.FC<IAccountRoutesProps> = (props: IAccountRoutesProps) => {
  return (
    <BrowserRouter>
      <Route exact={true} path="/core/account" component={(routeProps: RouteComponentProps) => <AccountMainComponent {...routeProps} input={{}} output={{}} fatherProps={props} />} />
      <Route exact={true} path="/core/account/extra" component={(routeProps: RouteComponentProps) => <AccountEditableComponent {...routeProps} input={{}} output={{}} fatherProps={props} />} />
    </BrowserRouter>
  );
};