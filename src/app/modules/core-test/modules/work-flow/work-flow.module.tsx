import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { WorkFlowRoutes } from './work-flow.routing';

export interface IWorkFlowModuleProps extends IBaseProps {
  input: {};
  output: {};
}

export const WorkFlowModule: React.FC<IWorkFlowModuleProps> = (props: IWorkFlowModuleProps) => {
  return (
    <WorkFlowRoutes fatherProps={props} input={{}} output={{}} />
  );
};