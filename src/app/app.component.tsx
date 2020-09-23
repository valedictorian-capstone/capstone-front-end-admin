import React from 'react';
import { IBaseProps } from '@extras/interfaces';
import '@app/app.component.css';

export interface IAppComponentProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const AppComponent = (props: IAppComponentProps) => {
  return (
    <div>
      {props.children}
    </div>
  );
};