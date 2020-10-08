import { IBaseProps } from '@extras/interfaces';
import React, { FC } from 'react';
import { BrowserRouter, Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { CompanyMainComponent } from './pages';

export interface ICompanyRoutesProps extends IBaseProps {
  input?: {};
  output?: {};
}
export const CompanyRoutes: FC<ICompanyRoutesProps> = (props: ICompanyRoutesProps) => {
  return (
    <Switch>
      {/* <Route exact={true} path="/core/setting/company" component={() => <Redirect to="/core/setting/company" />} /> */}
      <Route exact={true} path="/core/setting/company" component={() => <CompanyMainComponent input={{ mode: 1 }} />} />
    </Switch>
  );
};