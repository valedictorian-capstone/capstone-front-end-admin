import { IBaseProps } from '@extras/interfaces';
import { Layout } from 'antd';
import React from 'react';
import './footer.component.css';

export interface IFooterComponentProps extends IBaseProps {
  input: {};
  output: {};
}

export const FooterComponent = (props: IFooterComponentProps) => {
  return (
    <Layout.Footer
      className={props.className}
      id={props.id}
      style={{
        ...props.styles,
      }}
    >
      {props.children}
    </Layout.Footer>
  );
};