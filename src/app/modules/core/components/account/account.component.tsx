import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { RootState } from '@stores/states';
import { AccountVM } from '@view-models';
import { Dropdown, Menu } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';

export interface IAccountComponentProps extends IBaseProps {
  input?: {
    account: AccountVM,
  };
  output?: {};
}

export const AccountComponent: React.FC<IAccountComponentProps> = (props: IAccountComponentProps) => {
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const config = environment.i18n[region].data.header.account;
  const menu = <Menu>
    {config?.items.map((item) => (
      <Menu.Item key={item.value} icon={item.icon} style={{minWidth: '160px'}}>
        <span>{item.label}</span>
      </Menu.Item>
    ))}
  </Menu>;
  return (
    (<Dropdown overlay={menu} placement="bottomRight">
      <span className="action">
        {/* <Avatar size="small" className={styles.avatar} src={currentUser.avatar} /> */}
        <span>{props.input?.account}</span>
      </span>
    </Dropdown>
    )
  );
};