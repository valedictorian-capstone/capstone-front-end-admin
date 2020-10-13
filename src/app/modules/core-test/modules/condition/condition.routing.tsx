import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { ConditionMainComponent } from './pages';

export interface IConditionRoutesProps extends IBaseProps {
  input: {};
  output: {};
}
export const ConditionRoutes: React.FC<IConditionRoutesProps> = (props: IConditionRoutesProps) => {
  return (
    <Switch>
      <Route exact={true} path="/core/condition" component={(routeProps: RouteComponentProps) => <ConditionMainComponent input={{}} output={{}} {...routeProps} fatherProps={props} />} />
    </Switch>
  );
};