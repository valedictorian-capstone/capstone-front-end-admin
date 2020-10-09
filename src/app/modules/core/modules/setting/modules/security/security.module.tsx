import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { SecurityMainComponent } from './pages';
import { SecurityRoutes } from './security.routing';

export interface ISecurityModuleProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const SecurityModule = (props: ISecurityModuleProps) => {
  return (
    <SecurityMainComponent>
      <SecurityRoutes fatherProps={props} input={{}} output={{}} />
    </SecurityMainComponent>
  );
};