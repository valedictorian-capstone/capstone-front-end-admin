import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { WorkFlowMainComponent } from './pages';

export interface IWorkFlowRoutesProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const WorkFlowRoutes = (props: IWorkFlowRoutesProps) => {
  return (
    <Switch>
      <Route path="/core/work-flow" component={() => <WorkFlowMainComponent />} />
    </Switch>
  );
};