import React from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import '@app/app.component.css';
import 'src/styles.css';
import '@syncfusion/ej2-react-diagrams/styles/material.css';
import 'antd/dist/antd.css';
export const AppComponent = (props: { children?: ((props: RouteChildrenProps<any>) => React.ReactNode) | React.ReactNode }) => {
  return (
    <div>
      {props.children}
    </div>
  );
};