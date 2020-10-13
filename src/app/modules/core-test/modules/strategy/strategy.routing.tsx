import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { StrategyMainComponent } from './pages';

export interface IStrategyRoutesProps extends IBaseProps {
  input: {};
  output: {};
}
export const StrategyRoutes: React.FC<IStrategyRoutesProps> = (props: IStrategyRoutesProps) => {
  return (
    <Switch>
      <Route exact={true} path="/core/strategy" component={(routeProps: RouteComponentProps) => <StrategyMainComponent input={{}} output={{}} {...routeProps} fatherProps={props} />} />
    </Switch>
  );
};