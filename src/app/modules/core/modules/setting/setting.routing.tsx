import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { ProfileModule, CompanyModule, SecurityModule } from './modules';
// import { AccountModule, CustomerModule, DashboardModule, FormModule, P, WorkFlowModule } from './modules';

export interface ISettingRoutesProps extends IBaseProps {
  input: {};
  output: {};
}
export const SettingRoutes = (props: ISettingRoutesProps) => {
  return (
    <Switch>
      <Route exact={true} path="/core/setting" component={() => <Redirect to="/core/setting/profile" />} />
      <Route path="/core/setting/company" component={(routeProps: RouteComponentProps) => <CompanyModule input={{}} output={{}} {...routeProps} fatherProps={props} />} />
      <Route path="/core/setting/profile" component={(routeProps: RouteComponentProps) => <ProfileModule input={{}} output={{}} {...routeProps} fatherProps={props} />} />
      <Route path="/core/setting/security" component={(routeProps: RouteComponentProps) => <SecurityModule input={{}} output={{}} {...routeProps} fatherProps={props} />} />
    </Switch>
  );
};