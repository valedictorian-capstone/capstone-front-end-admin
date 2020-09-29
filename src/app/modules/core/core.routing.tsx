import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { AccountModule, CustomerModule, DashboardModule, FormModule, ProfileModule, WorkFlowModule } from './modules';

export interface ICoreRoutesProps extends IBaseProps {
  input: {};
  output: {};
}
export const CoreRoutes = (props: ICoreRoutesProps) => {
  return (
    <Switch>
      <Route path="/core/work-flow" component={(routeProps: RouteComponentProps) => <WorkFlowModule {...routeProps} fatherProps={props} />} />
      <Route path="/core/account" component={(routeProps: RouteComponentProps) => <AccountModule {...routeProps} fatherProps={props} />} />
      <Route path="/core/customer" component={(routeProps: RouteComponentProps) => <CustomerModule {...routeProps} fatherProps={props} />} />
      <Route path={['/core', '/core/dashboard']} component={(routeProps: RouteComponentProps) => <FormModule {...routeProps} input={{}} output={{}} fatherProps={props} />} />
      <Route path="/core/profile" component={(routeProps: RouteComponentProps) => <ProfileModule {...routeProps} fatherProps={props} />} />
      <Route path={['/core/form', '/core/form/:id']} component={(routeProps: RouteComponentProps) => <FormModule input={{}} output={{}} {...routeProps} fatherProps={props} />} />
    </Switch>
  );
};