import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { FormMainComponent } from './pages';

export interface IFormRoutesProps extends IBaseProps {
  input?: {};
  output?: {};
}
export const FormRoutes = (props: IFormRoutesProps) => {
  return (
    <Switch>
      <Route path="/core/form" component={() => <FormMainComponent />} />
    </Switch>
  );
};