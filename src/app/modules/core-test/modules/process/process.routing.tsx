import { IBaseProps } from '@extras/interfaces';
import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { ProcessMainComponent, ProcessEditableComponent } from './pages';

export interface IProcessRoutesProps extends IBaseProps {
  input: {};
  output: {};
}
export const ProcessRoutes: React.FC<IProcessRoutesProps> = (props: IProcessRoutesProps) => {
  return (
    <Switch>
      <Route exact={true} path="/core/process" component={(routeProps: RouteComponentProps) => <ProcessMainComponent input={{}} output={{}} {...routeProps} fatherProps={props} />} />
      <Route path="/core/process/:id" component={(routeProps: RouteComponentProps) => <ProcessEditableComponent input={{}} output={{}} {...routeProps} fatherProps={props} />} />
    </Switch>
  );
};