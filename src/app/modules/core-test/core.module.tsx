import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { CoreRoutes } from './core.routing';
import { LayoutComponent } from './pages';

export interface ICoreModuleProps extends IBaseProps {
  input: {};
  output: {};
}

export const CoreModule: React.FC<ICoreModuleProps> = (props: ICoreModuleProps) => {
  return (
    <LayoutComponent fatherProps={props} input={{}} output={{}}>
      <CoreRoutes fatherProps={props} input={{}} output={{}} />
    </LayoutComponent>
  );
};