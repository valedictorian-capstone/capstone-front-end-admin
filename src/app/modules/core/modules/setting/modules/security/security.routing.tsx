import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { BrowserRouter, Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { SecurityMainComponent } from './pages';

export interface ISecurityRoutesProps extends IBaseProps {
  input?: {};
  output?: {};
}
export const SecurityRoutes = (props: ISecurityRoutesProps) => {
  return (
    <Switch>
      {/* <Route exact={true} path="/core/setting/security" component={() => <Redirect to="/core/setting/security" />} /> */}
      <Route exact={true} path="/core/setting/security" component={() => <SecurityMainComponent input={{ mode: 1 }} />} />
    </Switch>
  );
};