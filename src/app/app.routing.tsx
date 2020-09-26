import { IBaseProps } from '@extras/interfaces';
import { AuthModule, CoreModule } from '@modules';
import { AuthenticationComponent } from '@modules/auth/components/auth/authentication.component';
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

export interface IAppRoutesProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const AppRoutes = (props: IAppRoutesProps) => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path={['/', '/login', '/home']} component={() => <AuthenticationComponent />} />
        {/* <Route exact={true} path="/" component={() => <Redirect to="/core" />} /> */}
        <Route exact={true} path="/core" component={() => <CoreModule />} />
        {/* <Route path="/auth" component={() => <AuthModule />} /> */}
      </Switch>
    </Router>
  );
};