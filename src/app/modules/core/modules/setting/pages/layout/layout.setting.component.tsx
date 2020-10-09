import { IBaseProps } from '@extras/interfaces';
import { Layout, Menu } from 'antd';
import React, { FC } from 'react';
import { ContentComponent, SideBarSettingComponent } from '../../components';
import './layout.setting.component.css';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
export interface ILayoutSettingComponentProps extends IBaseProps {
  input?: {};
  output?: {};
}
export const LayoutSettingComponent: FC<ILayoutSettingComponentProps> = (props: ILayoutSettingComponentProps) => {
  // console.log(props.children);
  return (
    <>
      <Layout style={{ overflow: 'hidden' }}>
        <Content style={{ overflow: 'hidden' }}>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <SideBarSettingComponent />
            <ContentComponent>
              {props.children}
            </ContentComponent>
          </Layout>
        </Content>
      </Layout>
    </>
  );
};