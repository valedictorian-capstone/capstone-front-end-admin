import { IBaseProps } from '@extras/interfaces';
import { Layout } from 'antd';
import React from 'react';
import './header.component.css';

export interface IHeaderComponentProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const HeaderComponent = (props: IHeaderComponentProps) => {
  return (
    <Layout.Header
      className={props.className}
      id={props.id}
      style={{
        ...props.styles,
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