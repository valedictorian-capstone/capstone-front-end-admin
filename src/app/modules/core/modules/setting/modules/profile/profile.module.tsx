import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { ProfileMainComponent } from './pages';
import { ProfileRoutes } from './profile.routing';

export interface IProfileModuleProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const ProfileModule = (props: IProfileModuleProps) => {
  return (
    <ProfileMainComponent>
      <ProfileRoutes fatherProps={props} input={{}} output={{}} />
    </ProfileMainComponent>
  );
};