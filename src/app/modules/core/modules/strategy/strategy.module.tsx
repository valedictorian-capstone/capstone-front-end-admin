import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { StrategyRoutes } from './strategy.routing';

export interface IStrategyModuleProps extends IBaseProps {
  input: {};
  output: {};
}

export const StrategyModule: React.FC<IStrategyModuleProps> = (props: IStrategyModuleProps) => {
  return (
    <StrategyRoutes fatherProps={props} input={{}} output={{}} />
  );
};