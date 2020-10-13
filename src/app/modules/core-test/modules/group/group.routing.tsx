import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { GroupMainComponent } from './pages';

export interface IGroupRoutesProps extends IBaseProps {
  input: {};
  output: {};
}
export const GroupRoutes: React.FC<IGroupRoutesProps> = (props: IGroupRoutesProps) => {
  return (
    <Switch>
      <Route exact={true} path="/core/group" component={(routeProps: RouteComponentProps) => <GroupMainComponent input={{}} output={{}} {...routeProps} fatherProps={props} />} />
    </Switch>
  );
};