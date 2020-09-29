import { IBaseProps } from '@extras/interfaces';
import { AccountComponent, ContentComponent, HeaderComponent, LanguageComponent, NotificationComponent, SideBarComponent } from '@modules/core/components';
import { RootState } from '@stores/states';
import { Layout } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import './layout.component.css';
import { ProgressBar } from 'primereact/progressbar';
export interface ILayoutComponentProps extends IBaseProps {
  input?: {};
  output?: {};
}
export const LayoutComponent = (props: ILayoutComponentProps) => {
  const account: any = localStorage.getItem('m-crm-username');
  const status = useSelector<RootState, boolean>((state: RootState) => state.loading.loading.status);
  return (
    <Layout style={{ minHeight: '100vh', overflow: 'hidden' }}>
      <SideBarComponent />
      <Layout className="site-layout">
        <HeaderComponent>
          <NotificationComponent />
          {account && <AccountComponent input={{ account }} />}
          <LanguageComponent />
        </HeaderComponent>
        {status && <ProgressBar mode="indeterminate" style={{ height: '4px' }} />}
        <ContentComponent>
          {props.children}
        </ContentComponent>
      </Layout>
    </Layout>
  );
};