import { IBaseProps } from '@extras/interfaces';
import { Layout } from 'antd';
import React from 'react';
import './content.component.scss';

export interface IContentComponentProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const ContentComponent = (props: IContentComponentProps) => {
  return (
    <Layout.Content
    className="site-layout"
      id={props.id}
      style={{
        ...props.styles,
        // margin: '24px 16px',
        padding: '0 24px 24px',
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