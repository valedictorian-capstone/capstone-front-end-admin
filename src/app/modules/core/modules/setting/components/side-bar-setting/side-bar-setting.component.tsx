import { MenuFoldOutlined, MenuUnfoldOutlined, SecurityScanOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { useLoadingAction } from '@stores/actions';
import { useSettingAction } from '@stores/actions/extra-actions/setting.action';
import { RootState } from '@stores/states';
import { SettingVM } from '@view-models';
import { Layout, Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './side-bar-setting.component.scss';

export interface ISideBarSettingComponentProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const SideBarSettingComponent: FC<ISideBarSettingComponentProps> = (props: ISideBarSettingComponentProps) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [collapse, setCollapse] = React.useState<{ collapsed: boolean }>({ collapsed: true });
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((data) => data.language.language.region);
  // const config = environment.i18n.data.core.components['side-bar'][region];
  const toggle = (collapsed: boolean) => {
    setCollapse({ collapsed });
  };
  const gotoPage = (link: string) => {
    dispatch(useLoadingAction().showLoader());
    setTimeout(() => {
      history.push(link);
      dispatch(useLoadingAction().hideLoader());
    }, 500);
  };
  const { menuItemOpen } = useSelector<RootState, SettingVM>((state) => state.setting.setting);
  const config = environment.i18n.data.core.modules['setting']['components'];
  const OPEN_KEYS = ['profile', 'company', 'security'];
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const onOpenChange = (keys: any) => {
    console.log(keys);
    if (keys.length !== 0) {
      const latestOpenKey = keys.find((key: string) => openKeys.indexOf(key) === -1);
      console.log(latestOpenKey);
      if (OPEN_KEYS.indexOf(latestOpenKey ?? '') === -1) {
        setOpenKeys(openKeys);
      } else {
        setOpenKeys((latestOpenKey && latestOpenKey !== openKeys[0]) ? [latestOpenKey] : []);
      }
    } else {
      setOpenKeys([]);
    }
  };

  const [selectedKeys, onSelectedKeys] = useState<string[]>(['']);
  const onSelectChange = (keys: any) => {
    console.log(keys);
    dispatch(useSettingAction().storeMenuItemOpen(keys.key ?? 'profile'));
    onSelectedKeys([keys.key]);
  };
  // useEffect(() => {
  // onSelectedKeys([menuItemOpen]);
  // const search = (config?.profile as any).find((category: any) => category.value === menuItemOpen) ? 'profile'
  //   : (config?.company as any).find((category: any) => category.value === menuItemOpen) ? 'company' : 'security';
  // setOpenKeys([search]);
  // dispatch(useLoadingAction().showLoader());
  // setTimeout(() => {
  //   const search = (config?.profile as any).find((category: any) => category.value === menuItemOpen) ? 'profile'
  //     : (config?.company as any).find((category: any) => category.value === menuItemOpen) ? 'company' : 'security';
  //   setOpenKeys([search]);
  //   onSelectedKeys([menuItemOpen]);
  //   dispatch(useLoadingAction().hideLoader());
  // }, 200);
  // }, [menuItemOpen]);

  return (
    <Layout.Sider trigger={
      React.createElement(collapse.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)
    } onCollapse={toggle} collapsible={true} collapsed={collapse.collapsed} >
      <Menu
        defaultSelectedKeys={[history.location.pathname.split('/')[4]]}
        // selectedKeys={selectedKeys}
        // onSelect={onSelectChange}
        defaultOpenKeys={[history.location.pathname.split('/')[3]]}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        forceSubMenuRender={true}
        mode="inline"
        theme="light"
        style={{ height: '100%', width: 256 }}
      >
        <SubMenu key="profile" icon={<UserOutlined />} title="PROFILE SETTINGS">
          {(config?.profile as any).map((category: any) => (
            <Menu.Item key={category.value} onClick={() => gotoPage('/core/setting/profile/' + category.value)}>
              <span>{category.label}</span>
            </Menu.Item>
          ))}
        </SubMenu>
        <SubMenu key="company" icon={<SettingOutlined />} title="COMPANY SETTINGS">
          {(config?.company as any).map((category: any) => (
            <Menu.Item key={category.value} onClick={() => gotoPage('/core/setting/company/' + category.value)}>
              <span>{category.label}</span>
            </Menu.Item>
          ))}
        </SubMenu>
        <SubMenu key="security" icon={<SecurityScanOutlined />} title="SECURITY CENTER">
          {(config?.security as any).map((category: any) => (
            <Menu.Item key={category.value} onClick={() => gotoPage('/core/setting/security/' + category.value)}>
              <span>{category.label}</span>
            </Menu.Item>
          ))}
        </SubMenu>
      </Menu>
    </Layout.Sider>
  );
};