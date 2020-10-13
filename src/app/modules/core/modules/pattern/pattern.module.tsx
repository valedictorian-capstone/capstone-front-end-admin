import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { PatternRoutes } from './pattern.routing';

export interface IPatternModuleProps extends IBaseProps {
  input: {};
  output: {};
}

export const PatternModule: React.FC<IPatternModuleProps> = (props: IPatternModuleProps) => {
  return (
    <PatternRoutes fatherProps={props} input={{}} output={{}} />
  );
};