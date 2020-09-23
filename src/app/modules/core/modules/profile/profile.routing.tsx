import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ProfileMainComponent } from './pages';

export interface IProfileRoutesProps extends IBaseProps {
  input?: {};
  output?: {};
}
export const ProfileRoutes = (props: IProfileRoutesProps) => {
  return (
    <BrowserRouter>
      <Route path={['']} component={() => <ProfileMainComponent />} />
    </BrowserRouter>
  );
};