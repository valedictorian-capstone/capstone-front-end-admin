import React, { CSSProperties } from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import { Layout } from 'antd';
import './header.component.css';
export const HeaderComponent = (
  props: {
    children?: ((props: RouteChildrenProps<any>) => React.ReactNode) | React.ReactNode,
    style?: CSSProperties,
    className?: string,
    id?: string,
  }) => {
  return (
    <Layout.Header
      className={props.className}
      id={props.id}
      style={{
        ...props.style,
        background: 'white',
        padding: '0px 20px 0px 20px',
        height: 'auto',
      }}
    >
      <div className="header">
        <div className="right">
          {props.children}
        </div>
      </div>
    </Layout.Header>
  );
};