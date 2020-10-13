import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { ProcessRoutes } from './process.routing';

export interface IProcessModuleProps extends IBaseProps {
  input: {};
  output: {};
}

export const ProcessModule: React.FC<IProcessModuleProps> = (props: IProcessModuleProps) => {
  return (
    <ProcessRoutes fatherProps={props} input={{}} output={{}} />
  );
};