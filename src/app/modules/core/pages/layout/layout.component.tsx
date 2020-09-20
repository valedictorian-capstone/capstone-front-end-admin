import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { RouteChildrenProps } from 'react-router-dom';
import './layout.component.scss';
export const LayoutComponent = (props: { children?: ((props: RouteChildrenProps<any>) => React.ReactNode) | React.ReactNode }) => {
  const [state, setState] = useState<{ collapsed: boolean }>({ collapsed: true });
  const { Header, Sider, Content } = Layout;
  const toggle = () => {
    setState({
      collapsed: !state.collapsed,
    });
  };
  return (
    <Layout>
      <Sider trigger={null} collapsible={true} collapsed={state.collapsed}>
        <div style={{height: 32, background: 'rgba(255, 255, 255, 0.2)', margin: 16 }} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
            </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
            </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
            </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{background: 'white', paddingLeft: 30, paddingRight: 30 }}>
          {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            height: window.innerHeight - 110,
            maxHeight: window.innerHeight - 110,
            overflow: 'auto',
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};