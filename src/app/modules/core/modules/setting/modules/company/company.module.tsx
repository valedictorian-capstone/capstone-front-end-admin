import { IBaseProps } from '@extras/interfaces';
import React, { FC } from 'react';
import { CompanyRoutes } from './company.routing';

export interface ICompanyModuleProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const CompanyModule: FC<ICompanyModuleProps> = (props: ICompanyModuleProps) => {
  return (
    <CompanyRoutes fatherProps={props} input={{}} output={{}} />
  );
};