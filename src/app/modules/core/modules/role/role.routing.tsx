import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { RoleMainComponent } from './pages';

export interface IRoleRoutesProps extends IBaseProps {
  input: {};
  output: {};
}
export const RoleRoutes: React.FC<IRoleRoutesProps> = (props: IRoleRoutesProps) => {
  return (
    <Switch>
      <Route exact={true} path="/core/role" component={(routeProps: RouteComponentProps) => <RoleMainComponent input={{}} output={{}} {...routeProps} fatherProps={props} />} />
    </Switch>
  );
};