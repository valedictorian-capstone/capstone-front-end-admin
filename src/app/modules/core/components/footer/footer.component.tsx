import React, { CSSProperties } from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import { Layout } from 'antd';
import './footer.component.css';
export const FooterComponent = (
  props: {
    children?: ((props: RouteChildrenProps<any>) => React.ReactNode) | React.ReactNode,
    style?: CSSProperties,
    className?: string,
    id?: string,
  }) => {
  return (
    <Layout.Footer
    className={props.className}
    id={props.id}
      style={{
        ...props.style,
      }}
    >
      {props.children}
    </Layout.Footer>
  );
};