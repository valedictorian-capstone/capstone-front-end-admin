import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { FormMainComponent } from './pages';

export interface IFormRoutesProps extends IBaseProps {
  input: {};
  output: {};
}
export const FormRoutes = (props: IFormRoutesProps) => {
  return (
    <Switch>
      <Route path="/core/form" component={(routeProps: RouteComponentProps) => <FormMainComponent input={{}} output={{}} {...routeProps} fatherProps={props} />} />
    </Switch>
  );
};