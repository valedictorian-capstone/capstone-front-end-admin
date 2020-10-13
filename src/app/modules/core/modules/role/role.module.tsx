import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { RoleRoutes } from './role.routing';

export interface IRoleModuleProps extends IBaseProps {
  input: {};
  output: {};
}

export const RoleModule: React.FC<IRoleModuleProps> = (props: IRoleModuleProps) => {
  return (
    <RoleRoutes fatherProps={props} input={{}} output={{}} />
  );
};