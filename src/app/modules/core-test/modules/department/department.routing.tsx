import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { DepartmentMainComponent } from './pages';

export interface IDepartmentRoutesProps extends IBaseProps {
  input: {};
  output: {};
}
export const DepartmentRoutes: React.FC<IDepartmentRoutesProps> = (props: IDepartmentRoutesProps) => {
  return (
    <Switch>
      <Route exact={true} path="/core/department" component={(routeProps: RouteComponentProps) => <DepartmentMainComponent input={{}} output={{}} {...routeProps} fatherProps={props} />} />
    </Switch>
  );
};