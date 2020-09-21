import React, { CSSProperties } from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import { Layout } from 'antd';
import './content.component.scss';
export const ContentComponent = (
  props: {
    children?: ((props: RouteChildrenProps<any>) => React.ReactNode) | React.ReactNode,
    style?: CSSProperties,
    className?: string,
    id?: string,
  }) => {
  return (
    <Layout.Content
      className={props.className}
      id={props.id}
      style={{
        ...props.style,
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
        height: window.innerHeight - 110,
        maxHeight: window.innerHeight - 110,
        overflow: 'auto',
      }}
    >
      {props.children}
    </Layout.Content>
  );
};