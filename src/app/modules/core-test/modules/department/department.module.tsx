import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { DepartmentRoutes } from './department.routing';

export interface IDepartmentModuleProps extends IBaseProps {
  input: {};
  output: {};
}

export const DepartmentModule: React.FC<IDepartmentModuleProps> = (props: IDepartmentModuleProps) => {
  return (
    <DepartmentRoutes fatherProps={props} input={{}} output={{}} />
  );
};