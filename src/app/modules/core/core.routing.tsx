import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AccountModule, CustomerModule, DashboardModule, FormModule, ProfileModule, WorkFlowModule } from './modules';

export interface ICoreRoutesProps extends IBaseProps {
  input?: {};
  output?: {};
}
export const CoreRoutes = (props: ICoreRoutesProps) => {
  return (
    <Switch>
      <Route path="/core/work-flow" component={() => <WorkFlowModule />} />
      <Route path="/core/account" component={() => <AccountModule />} />
      <Route path="/core/customer" component={() => <CustomerModule />} />
      <Route path={['/core', '/core/dashboard']} component={() => <DashboardModule />} />
      <Route path="/core/profile" component={() => <ProfileModule />} />
      <Route path="/core/form" component={() => <FormModule />} />
    </Switch>
  );
};