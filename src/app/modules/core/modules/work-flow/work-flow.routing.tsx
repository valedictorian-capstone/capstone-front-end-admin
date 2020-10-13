import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { WorkFlowMainComponent, WorkFlowEditableComponent } from './pages';

export interface IWorkFlowRoutesProps extends IBaseProps {
  input: {};
  output: {};
}
export const WorkFlowRoutes: React.FC<IWorkFlowRoutesProps> = (props: IWorkFlowRoutesProps) => {
  return (
    <Switch>
      <Route exact={true} path="/core/work-flow" component={(routeProps: RouteComponentProps) => <WorkFlowMainComponent input={{}} output={{}} {...routeProps} fatherProps={props} />} />
      <Route path="/core/work-flow/:id" component={(routeProps: RouteComponentProps) => <WorkFlowEditableComponent input={{}} output={{}} {...routeProps} fatherProps={props} />} />
    </Switch>
  );
};