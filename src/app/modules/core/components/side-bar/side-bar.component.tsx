import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { RootState } from '@stores/states';
import { Layout, Menu } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './side-bar.component.scss';

export interface ISideBarComponentProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const SideBarComponent = (props: ISideBarComponentProps) => {
  const [state, setState] = React.useState<{ collapsed: boolean }>({ collapsed: true });
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((data) => data.language.language.region);
  const config = environment.i18n[region].data;
  const toggle = (collapsed: boolean) => {
    setState({ collapsed });
  };
  return (
    <Layout.Sider trigger={
      React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)
    } onCollapse={toggle} collapsible={true} collapsed={state.collapsed} >
      <div style={{ height: 32, background: 'rgba(255, 255, 255, 0.2)', margin: 10 }} />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        {(config?.categories as any).map((category: any) => (
          <Menu.Item key={category.value} icon={category.icon}>
            <Link to={'/core/' + category.value}>{category.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Layout.Sider>
  );
};