import { IBaseProps } from '@extras/interfaces';
import { Layout } from 'antd';
import React from 'react';
import './content.component.scss';

export interface IContentComponentProps extends IBaseProps {
  input: {};
  output: {};
}

export const ContentComponent: React.FC<IContentComponentProps> = (props: IContentComponentProps) => {
  return (
    <Layout.Content
      className={props.className}
      id={props.id}
      style={{
        ...props.styles,
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
        height: window.innerHeight - 110,
        maxHeight: window.innerHeight - 110,
        overflow: 'hidden',
      }}
    >
      {props.children}
    </Layout.Content>
  );
};