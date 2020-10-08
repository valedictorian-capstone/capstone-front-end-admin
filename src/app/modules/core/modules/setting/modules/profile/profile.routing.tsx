import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { BrowserRouter, Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { AccountPasswordComponent, AccountProfileComponent } from './components';
import { EmailSyncComponent } from './components/email-sync/email-sync.component';
import { LayoutProfileComponent } from './pages';

export interface IProfileRoutesProps extends IBaseProps {
  input?: {};
  output?: {};
}
export const ProfileRoutes = (props: IProfileRoutesProps) => {
  return (
    <Switch>
      {/* <Route exact={true} path="/core/setting/profile" component={() => <Redirect to="/core/setting/profile" />} /> */}
      <Route exact={true} path="/core/setting/profile" component={() => <AccountProfileComponent input={{header: 'PROFILE' }} />} />
      <Route exact={true} path="/core/setting/profile/password" component={() => <AccountPasswordComponent input={{header: 'PASSWORD' }} />} />
      <Route exact={true} path="/core/setting/profile/email" component={() => <EmailSyncComponent input={{header: 'EMAIL SYNC' }} />} />
    </Switch>
  );
};