import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { FormRoutes } from './form.routing';

export interface IFormModuleProps extends IBaseProps {
  input: {};
  output: {};
}

export const FormModule: React.FC<IFormModuleProps> = (props: IFormModuleProps) => {
  return (
    <FormRoutes fatherProps={props} input={{}} output={{}} />
  );
};