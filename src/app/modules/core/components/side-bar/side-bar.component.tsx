import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { useLoadingAction } from '@stores/actions';
import { RootState } from '@stores/states';
import { Layout, Menu } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './side-bar.component.scss';

export interface ISideBarComponentProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const SideBarComponent = (props: ISideBarComponentProps) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = React.useState<{ collapsed: boolean }>({ collapsed: true });
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((data) => data.language.language.region);
  const config = environment.i18n[region].data;
  const toggle = (collapsed: boolean) => {
    setState({ collapsed });
  };
  const gotoPage = (link: string) => {
    dispatch(useLoadingAction().showLoader());
    setTimeout(() => {
      history.push(link);
      dispatch(useLoadingAction().hideLoader());
    }, 500);
  };
  return (
    <Layout.Sider trigger={
      React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)
    } onCollapse={toggle} collapsible={true} collapsed={state.collapsed} >
      <div style={{ height: 32, background: 'rgba(255, 255, 255, 0.2)', margin: 10 }} />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        {(config?.categories as any).map((category: any) => (
          <Menu.Item key={category.value} icon={category.icon} onClick={() => gotoPage('/core/' + category.value)}>
            <span>{category.label}</span>
          </Menu.Item>
        ))}
      </Menu>
    </Layout.Sider>
  );
};