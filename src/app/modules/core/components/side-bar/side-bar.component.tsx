import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { useLoadingAction } from '@stores/actions';
import { RootState } from '@stores/states';
import { Layout, Menu } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './side-bar.component.css';

export interface ISideBarComponentProps extends IBaseProps {
  input: {
    toggle: boolean;
  };
  output: {
    onOutSideClick: () => void;
  };
}

export const SideBarComponent: React.FC<ISideBarComponentProps> = (props: ISideBarComponentProps) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((data) => data.language.language.region);
  const config = environment.i18n.data.core.components['side-bar'][region];
  const gotoPage = (link: string) => {
    dispatch(useLoadingAction().showLoader());
    setTimeout(() => {
      history.push(link);
      dispatch(useLoadingAction().hideLoader());
    }, 500);
  };
  window.onclick = (e: any) => {
    if (e.path[2].className !== 'left') {
      if (e.x > 200) {
        props.output.onOutSideClick();
      } else {
        if (e.x > 60 && e.y <= 25) {
          props.output.onOutSideClick();
        }
      }
    }

  };
  return (
    <Layout.Sider className={props.input.toggle ? 'side-bar show' : 'side-bar'} collapsed={!props.input.toggle} defaultCollapsed={false}>
      <div style={{ height: 32, background: 'rgba(255, 255, 255, 0.2)', margin: 10 }} />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[history.location.pathname.split('/')[2]]}>
        {(config.categories as any).map((category: any) => (
          <Menu.Item key={category.value} icon={category.icon} onClick={() => gotoPage('/core/' + category.value)}>
            <span>{category.label}</span>
          </Menu.Item>
        ))}
      </Menu>
    </Layout.Sider>
  );
};