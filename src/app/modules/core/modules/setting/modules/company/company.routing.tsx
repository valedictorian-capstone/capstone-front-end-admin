import { IBaseProps } from '@extras/interfaces';
import React, { FC } from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { CompanySettingComponent, DataFieldComponent, UserManagementComponent } from './components';

export interface ICompanyRoutesProps extends IBaseProps {
  input?: {};
  output?: {};
}
export const CompanyRoutes: FC<ICompanyRoutesProps> = (props: ICompanyRoutesProps) => {
  return (
    <Switch>
      {/* <Route exact={true} path="/core/setting/profile" component={() => <Redirect to="/core/setting/profile" />} /> */}
      <Route exact={true} path={['/core/setting/company', '/core/setting/company/company']} component={(routeProps: RouteComponentProps) => <CompanySettingComponent input={{}} output={{}} {...routeProps} fatherProps={props} />} />
      <Route exact={true} path="/core/setting/company/manage-user" component={(routeProps: RouteComponentProps) => <UserManagementComponent input={{}} output={{}} {...routeProps} fatherProps={props} />} />
      <Route exact={true} path="/core/setting/company/data-field" component={(routeProps: RouteComponentProps) => <DataFieldComponent input={{}} output={{}} {...routeProps} fatherProps={props} />} />
    </Switch>
  );
};