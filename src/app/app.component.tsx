import React from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import '@app/app.component.scss';
export const AppComponent = (props: { children?: ((props: RouteChildrenProps<any>) => React.ReactNode) | React.ReactNode }) => {
  return (
    <div>
      {props.children}
    </div>
  );
};