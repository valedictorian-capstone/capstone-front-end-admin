import { IBaseProps } from '@extras/interfaces';
import { AuthModule, CoreModule } from '@modules';
import { AuthenticationComponent } from '@modules/auth/components/auth/authentication.component';
import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

export interface IAppRoutesProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const AppRoutes = (props: IAppRoutesProps) => {
  return (
    <HashRouter>
      <Route path={['/', '/login', '/home']} component={() => <AuthenticationComponent/>} />
      {/* <Route exact={true} path="/" component={() => <Redirect to="/core" />} /> */}
      <Route path="/core" component={() => <CoreModule />} />
      {/* <Route path="/auth" component={() => <AuthModule />} /> */}
    </HashRouter>
  );
};