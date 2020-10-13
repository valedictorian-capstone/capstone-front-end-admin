import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { ConditionRoutes } from './condition.routing';

export interface IConditionModuleProps extends IBaseProps {
  input: {};
  output: {};
}

export const ConditionModule: React.FC<IConditionModuleProps> = (props: IConditionModuleProps) => {
  return (
    <ConditionRoutes fatherProps={props} input={{}} output={{}} />
  );
};