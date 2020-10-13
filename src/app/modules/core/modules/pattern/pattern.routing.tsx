import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { PatternMainComponent } from './pages';

export interface IPatternRoutesProps extends IBaseProps {
  input: {};
  output: {};
}
export const PatternRoutes: React.FC<IPatternRoutesProps> = (props: IPatternRoutesProps) => {
  return (
    <Switch>
      <Route exact={true} path="/core/pattern" component={(routeProps: RouteComponentProps) => <PatternMainComponent input={{}} output={{}} {...routeProps} fatherProps={props} />} />
    </Switch>
  );
};