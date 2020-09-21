import { SettingOutlined } from '@ant-design/icons';
import { environment } from '@environments/environment';
import { RootState } from '@stores/states';
import { AccountVM } from '@view-models';
import { Avatar, Dropdown, Menu } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';

export const AccountComponent = (props: {account: AccountVM}) => {
  const region = useSelector<RootState>((state) => state.language.language.region);
  const menu = <Menu>
    {environment.languages.find((lang) => lang.value === region)?.data.header.account.items.map((item) => (
      <Menu.Item key={item.value} icon={item.icon}>
        <span>{item.label}</span>
      </Menu.Item>
    ))}
  </Menu>;
  return (
    (<Dropdown overlay={menu} placement="bottomRight">
      <span className="action">
        {/* <Avatar size="small" className={styles.avatar} src={currentUser.avatar} /> */}
        <span>{props.account}</span>
      </span>
    </Dropdown>
    )
  );
};