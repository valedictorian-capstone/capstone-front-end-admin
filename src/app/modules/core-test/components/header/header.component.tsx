import { IBaseProps } from '@extras/interfaces';
import { MenuOutlined } from '@material-ui/icons';
import { Layout } from 'antd';
import React from 'react';
import './header.component.css';

export interface IHeaderComponentProps extends IBaseProps {
  input: {};
  output: {
    onToggle: () => void,
  };
}

export const HeaderComponent: React.FC<IHeaderComponentProps> = (props: IHeaderComponentProps) => {
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
        <div className="left">
          <MenuOutlined style={{cursor: 'pointer'}} onClick={props.output.onToggle} />
        </div>
        <div className="right">
          {props.children}
        </div>
      </div>
    </Layout.Header>
  );
};