import { IBaseProps } from '@extras/interfaces';
import React, { FC } from 'react';
import { SettingRoutes } from './setting.routing';
import { LayoutSettingComponent } from './pages';

export interface ISettingModuleProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const SettingModule: FC<ISettingModuleProps> = (props: ISettingModuleProps) => {
  return (
    <LayoutSettingComponent>
      <SettingRoutes fatherProps={props} input={{}} output={{}} />
    </LayoutSettingComponent>
  );
};