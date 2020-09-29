import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { FormRoutes } from './form.routing';

export interface IFormModuleProps extends IBaseProps {
  input: {};
  output: {};
}

export const FormModule = (props: IFormModuleProps) => {
  return (
    <FormRoutes input={{}} output={{}} />
  );
};