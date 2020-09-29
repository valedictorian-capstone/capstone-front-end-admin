import { IBaseProps } from '@extras/interfaces';
import { AuthModule, CoreModule } from '@modules';
import React from 'react';
import { HashRouter, Redirect, Route, RouteComponentProps } from 'react-router-dom';

export interface IAppRoutesProps extends IBaseProps {
  input: {};
  output: {};
}

export const AppRoutes = (props: IAppRoutesProps) => {
  return (
    <HashRouter>
      <Route exact={true} path="/" component={() => <Redirect to="/core" />} />
      <Route path="/core" component={(routeProps: RouteComponentProps) => <CoreModule input={{}} output={{}} {...routeProps} fatherProps={props} />} />
      <Route path="/auth" component={(routeProps: RouteComponentProps) => <AuthModule />} />
    </HashRouter>
  );
};