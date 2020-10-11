import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { SecurityRoutes } from './security.routing';

export interface ISecurityModuleProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const SecurityModule = (props: ISecurityModuleProps) => {
  return (
    <SecurityRoutes fatherProps={props} input={{}} output={{}} />
  );
};