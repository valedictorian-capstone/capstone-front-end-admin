import { IBaseProps } from '@extras/interfaces';
import React, { FC, useEffect } from 'react';
import { CompanyRoutes } from './company.routing';
import { CompanyMainComponent } from './pages';

export interface ICompanyModuleProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const CompanyModule: FC<ICompanyModuleProps> = (props: ICompanyModuleProps) => {
  const getHeader = () => {
    // const url: string[] = props.location?.pathname?.split('/') ?? ['General'];
    // const [space, sub, ...rest] = url.reverse();
    // return sub;
    switch (props.location?.pathname) {
      case '/core/setting/company/user':
        return 'Manage Users';
      case '/core/setting/company/data-field':
        return 'Data fields';
      default: return 'Company settings';
    }
  };
  return (
    <CompanyMainComponent input={{ header: getHeader() }}>
      <CompanyRoutes fatherProps={props} input={{}} output={{}} />
    </CompanyMainComponent>
  );
};