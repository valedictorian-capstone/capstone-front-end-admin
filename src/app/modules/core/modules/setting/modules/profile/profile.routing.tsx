import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { AccountPasswordComponent, AccountProfileComponent } from './components';
import { EmailSyncComponent } from './components/email-sync/email-sync.component';

export interface IProfileRoutesProps extends IBaseProps {
  input?: {};
  output?: {};
}
export const ProfileRoutes = (props: IProfileRoutesProps) => {
  return (
    <Switch>
      {/* <Route exact={true} path="/core/setting/profile" component={() => <Redirect to="/core/setting/profile" />} /> */}
      <Route exact={true} path="/core/setting/profile" component={(routeProps: RouteComponentProps) => <AccountProfileComponent {...routeProps} input={{}} output={{}} fatherProps={props} />} />
      <Route exact={true} path="/core/setting/profile/password" component={(routeProps: RouteComponentProps) => <AccountPasswordComponent {...routeProps} input={{}} output={{}} fatherProps={props} />} />
      <Route exact={true} path="/core/setting/profile/email" component={(routeProps: RouteComponentProps) => <EmailSyncComponent {...routeProps} input={{}} output={{}} fatherProps={props} />} />
    </Switch>
  );
};