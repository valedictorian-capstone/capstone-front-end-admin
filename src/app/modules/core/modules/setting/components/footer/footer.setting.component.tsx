import { IBaseProps } from '@extras/interfaces';
import { Layout } from 'antd';
import React from 'react';
import './footer.setting.component.scss';

export interface IFooterSettingComponentProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const FooterSettingComponent = (props: IFooterSettingComponentProps) => {
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