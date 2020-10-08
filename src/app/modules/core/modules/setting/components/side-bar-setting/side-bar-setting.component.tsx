import { AppstoreOutlined, BarChartOutlined, CalendarOutlined, CloudOutlined, LinkOutlined, MailOutlined, MenuFoldOutlined, MenuUnfoldOutlined, SecurityScanOutlined, SettingOutlined, ShopOutlined, TeamOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { useLoadingAction } from '@stores/actions';
import { RootState } from '@stores/states';
import { Divider, Layout, Menu, Switch } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './side-bar-setting.component.scss';

type MenuMode = 'vertical' | 'vertical-left' | 'vertical-right' | 'horizontal' | 'inline';
type ThemeMode = 'dark' | 'light' | undefined;
export interface ISideBarSettingComponentProps extends IBaseProps {
  input?: {
    menuMode: any,
    menuTheme: any,
  };
  output?: {};
}

export const SideBarSettingComponent: FC<ISideBarSettingComponentProps> = (props: ISideBarSettingComponentProps) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = React.useState<{ collapsed: boolean }>({ collapsed: true });
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((data) => data.language.language.region);
  const config = environment.i18n.data.core.modules['setting']['components'];
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

  const OPEN_KEYS = ['sub1', 'sub2', 'sub3'];
  const [openKeys, setOpenKeys] = useState<string[]>(OPEN_KEYS);
  const onOpenChange = () => setOpenKeys([...OPEN_KEYS, ...openKeys]);

  return (
    <div style={{ maxHeight: window.innerHeight - 50, overflow: 'auto' }}>
      <Layout.Sider width="256">
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={openKeys}
          onOpenChange={onOpenChange}
          mode="inline"
          theme="light"
          style={{ height: '100%', width: 256 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="PROFILE SETTINGS">
            {(config?.profile as any).map((category: any) => (
              <Menu.Item key={category.value} onClick={() => gotoPage('/core/setting/profile/' + category.value)}>
                <span>{category.label}</span>
              </Menu.Item>
            ))}
          </SubMenu>
          <SubMenu key="sub2" icon={<SettingOutlined />} title="COMPANY SETTINGS">
            {(config?.company as any).map((category: any) => (
              <Menu.Item key={category.value} onClick={() => gotoPage('/core/setting/company/' + category.value)}>
                <span>{category.label}</span>
              </Menu.Item>
            ))}
          </SubMenu>
          <SubMenu key="sub3" icon={<SecurityScanOutlined />} title="SECURITY CENTER">
            {(config?.security as any).map((category: any) => (
              <Menu.Item key={category.value} onClick={() => gotoPage('/core/setting/security' + category.value)}>
                <span>{category.label}</span>
              </Menu.Item>
            ))}
          </SubMenu>
        </Menu>
      </Layout.Sider>
    </div>
  );
};