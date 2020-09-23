import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { AccountMainComponent } from './pages';

export interface IAccountRoutesProps extends IBaseProps {
  input?: {};
  output?: {};
}
export const AccountRoutes = (props: IAccountRoutesProps) => {
  return (
    <BrowserRouter>
      <Route path={['']} component={() => <AccountMainComponent />} />
    </BrowserRouter>
  );
};