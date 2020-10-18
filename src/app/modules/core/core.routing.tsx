import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import {
  DashboardModule,
  FormModule,
  ProfileModule,
  WorkFlowModule,
  ProcessModule,
  ConditionModule,
  DepartmentModule,
  GroupModule,
  RoleModule,
  PatternModule,
  StrategyModule,
} from './modules';

export interface ICoreRoutesProps extends IBaseProps {
  input: {};
  output: {};
}
export const CoreRoutes: React.FC<ICoreRoutesProps> = (props: ICoreRoutesProps) => {
  return (
    <Switch>
      <Route exact={true} path="/core" component={() => <Redirect to="/core/dashboard" />} />
      <Route path="/core/work-flow" component={(routeProps: RouteComponentProps) => <WorkFlowModule {...routeProps} input={{}} output={{}} fatherProps={props} />} />
      <Route path="/core/dashboard" component={(routeProps: RouteComponentProps) => <DashboardModule {...routeProps} input={{}} output={{}} fatherProps={props} />} />
      <Route path="/core/profile" component={(routeProps: RouteComponentProps) => <ProfileModule {...routeProps} input={{}} output={{}} fatherProps={props} />} />
      <Route path="/core/form" component={(routeProps: RouteComponentProps) => <FormModule input={{}} output={{}} {...routeProps} fatherProps={props} />} />
      <Route path="/core/process" component={(routeProps: RouteComponentProps) => <ProcessModule input={{}} output={{}} {...routeProps} fatherProps={props} />} />
      <Route path="/core/condition" component={(routeProps: RouteComponentProps) => <ConditionModule input={{}} output={{}} {...routeProps} fatherProps={props} />} />
      <Route path="/core/department" component={(routeProps: RouteComponentProps) => <DepartmentModule input={{}} output={{}} {...routeProps} fatherProps={props} />} />
      <Route path="/core/group" component={(routeProps: RouteComponentProps) => <GroupModule input={{}} output={{}} {...routeProps} fatherProps={props} />} />
      <Route path="/core/role" component={(routeProps: RouteComponentProps) => <RoleModule input={{}} output={{}} {...routeProps} fatherProps={props} />} />
      <Route path="/core/pattern" component={(routeProps: RouteComponentProps) => <PatternModule input={{}} output={{}} {...routeProps} fatherProps={props} />} />
      <Route path="/core/strategy" component={(routeProps: RouteComponentProps) => <StrategyModule input={{}} output={{}} {...routeProps} fatherProps={props} />} />
    </Switch>
  );
};