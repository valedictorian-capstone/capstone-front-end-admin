import { IBaseProps } from '@extras/interfaces';
import { Layout, Row } from 'antd';
import React from 'react';
import './content.setting.component.scss';
const { Content } = Layout;
export interface IContentSettingComponentProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const ContentSettingComponent = (props: IContentSettingComponentProps) => {
  return (
    <Content
      style={{
        padding: '0 24px',
        minHeight: 280,
        background: 'white',
        height: window.innerHeight - 110,
        maxHeight: window.innerHeight - 110,
        overflow: 'auto',
      }}>
      <Row justify="center" style={{ minHeight: '7vh', height: 'fit-content', padding: '12px 60px 24px 10px' }} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {props.children}
      </Row>
    </Content>
  );
};