import { IBaseProps } from '@extras/interfaces';
import { AccountComponent, ContentComponent, HeaderComponent, LanguageComponent, NotificationComponent, SideBarComponent } from '@modules/core/components';
import { Layout } from 'antd';
import React from 'react';
import './layout.component.css';

export interface ILayoutComponentProps extends IBaseProps {
  input?: {};
  output?: {};
}
export const LayoutComponent = (props: ILayoutComponentProps) => {
  const account: any = localStorage.getItem('m-crm-username');
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBarComponent />
      <Layout className="site-layout">
        <HeaderComponent>
          <NotificationComponent />
          {account && <AccountComponent input={{ account }} />}
          <LanguageComponent />
        </HeaderComponent>
        <ContentComponent>
          {props.children}
        </ContentComponent>
      </Layout>
    </Layout>
  );
};