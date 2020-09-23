import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DashboardMainComponent } from './pages';

export interface IDashboardRoutesProps extends IBaseProps {
  input?: {};
  output?: {};
}
export const DashboardRoutes = (props: IDashboardRoutesProps) => {
  console.log(props);
  return (
    <Switch>
      <Route path={['/core', '/core/dashboard']} component={() => <DashboardMainComponent />} />
    </Switch>
  );
};