import React from 'react';
import { Layout } from 'antd';
import { RouteChildrenProps } from 'react-router-dom';
import './layout.component.css';
import { ContentComponent, HeaderComponent, SideBarComponent, AccountComponent, FooterComponent, LanguageComponent, NotificationComponent } from '@modules/core/components';
export const LayoutComponent = (props: { children?: ((props: RouteChildrenProps<any>) => React.ReactNode) | React.ReactNode }) => {
  const account: any = localStorage.getItem('m-crm-username');
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBarComponent />
      <Layout className="site-layout">
        <HeaderComponent>
          <NotificationComponent />
          {account && <AccountComponent account={account} />}
          <LanguageComponent />
        </HeaderComponent>
        <ContentComponent>
          {props.children}
        </ContentComponent>
      </Layout>
    </Layout>
  );
};