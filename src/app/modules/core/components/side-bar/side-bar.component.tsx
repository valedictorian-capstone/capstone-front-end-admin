import React, { CSSProperties, useState } from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import './side-bar.component.scss';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { environment } from '@environments/environment';
import { RootState } from '@stores/states';
import { useSelector } from 'react-redux';
export const SideBarComponent = (
  props: {
    children?: ((props: RouteChildrenProps<any>) => React.ReactNode) | React.ReactNode,
    style?: CSSProperties,
    className?: string,
    id?: string,
  }) => {
  const region = useSelector<RootState>((data) => data.language.language.region);
  const [state, setState] = useState<{ collapsed: boolean }>({ collapsed: true });
  const toggle = (collapsed: boolean) => {
    setState({ collapsed });
  };
  return (
    <Layout.Sider trigger={
      React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)
    } onCollapse={toggle} collapsible={true} collapsed={state.collapsed} >
      <div style={{ height: 32, background: 'rgba(255, 255, 255, 0.2)', margin: 10 }} />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        {environment.languages.find((lang) => lang.value === region)?.data.categories.map((category) => (
          <Menu.Item key={category.value} icon={category.icon}>
            {category.label}
          </Menu.Item>
        ))}
      </Menu>
    </Layout.Sider>
  );
};