import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { AccountModule, CustomerModule, DashboardModule, FormModule, ProfileModule, WorkFlowModule, ProcessModule } from './modules';

export interface ICoreRoutesProps extends IBaseProps {
  input: {};
  output: {};
}
export const CoreRoutes: React.FC<ICoreRoutesProps> = (props: ICoreRoutesProps) => {
  return (
    <Switch>
      <Route exact={true} path="/core" component={() => <Redirect to="/core/dashboard" />} />
      <Route path="/core/work-flow" component={(routeProps: RouteComponentProps) => <WorkFlowModule {...routeProps} input={{}} output={{}} fatherProps={props} />} />
      <Route path="/core/account" component={(routeProps: RouteComponentProps) => <AccountModule {...routeProps} input={{}} output={{}} fatherProps={props} />} />
      <Route path="/core/customer" component={(routeProps: RouteComponentProps) => <CustomerModule {...routeProps} input={{}} output={{}} fatherProps={props} />} />
      <Route path="/core/dashboard" component={(routeProps: RouteComponentProps) => <DashboardModule {...routeProps} input={{}} output={{}} fatherProps={props} />} />
      <Route path="/core/profile" component={(routeProps: RouteComponentProps) => <ProfileModule {...routeProps} input={{}} output={{}} fatherProps={props} />} />
      <Route path="/core/form" component={(routeProps: RouteComponentProps) => <FormModule input={{}} output={{}} {...routeProps} fatherProps={props} />} />
      <Route path="/core/process" component={(routeProps: RouteComponentProps) => <ProcessModule input={{}} output={{}} {...routeProps} fatherProps={props} />} />
    </Switch>
  );
};