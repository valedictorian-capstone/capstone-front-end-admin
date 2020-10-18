import { IBaseProps } from '@extras/interfaces';
import { MenuOutlined, SearchOutlined } from '@material-ui/icons';
import avatar from 'src/assets/avatars/avatar.jpg';
import { Layout } from 'antd';
import React from 'react';
import './header.component.css';
import { SmileOutlined, BellOutlined, SettingOutlined, LogoutOutlined, ProfileOutlined } from '@ant-design/icons';

export interface IHeaderComponentProps extends IBaseProps {
  input: {
    target: EventTarget | undefined,
  };
  output: {
    onToggle: () => void,
    onClickOutside: () => void,
  };
}

export const HeaderComponent: React.FC<IHeaderComponentProps> = (props: IHeaderComponentProps) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [focus, setFocus] = React.useState<boolean>(false);
  const [notification, setNotification] = React.useState<boolean>(false);
  const menuRef = React.useRef<any>();
  const profileRef = React.useRef<any>();
  const notificationRef = React.useRef<any>();
  const searchRef = React.useRef<any>();
  const headerRef = React.useRef<any>();
  React.useEffect(() => {
    if (menuRef.current.contains(props.input.target)) {
      props.output.onToggle();
    } else {
      if (props.input.target && headerRef.current.contains(props.input.target)) {
        props.output.onClickOutside();
      }
    }
    if (searchRef.current.contains(props.input.target)) {
      setFocus(true);
    } else {
      setFocus(false);
    }
    if (profileRef.current.contains(props.input.target)) {
      setOpen(!open);
    } else {
      setOpen(false);
      console.log(props.input.target);
      console.log(profileRef);
    }
    if (notificationRef.current.contains(props.input.target)) {
      setNotification(!open);
    } else {
      setNotification(false);
    }
  }, [props.input.target]);
  return (
    <div ref={headerRef} className="header">
      <div className="header-left" ref={menuRef}>
        <MenuOutlined fontSize="default" />
      </div>
      <div className={'header-search' + (focus ? ' focus' : '')} ref={searchRef}>
        <input placeholder="Fill anything to search..." />
        <SearchOutlined />
      </div>
      <div ref={profileRef} className="header-right">
        <div className="header-right-name"><SmileOutlined style={{ marginRight: 9 }} /> Elias</div>
        <div className="header-right-avatar"><img src={avatar} /></div>
        <div className={'header-right-menu' + (open ? ' open' : '')}>
          <div className="header-right-menu-item">
            <span className="header-right-menu-item-icon"><ProfileOutlined /> </span>
            <span className="header-right-menu-item-content">Profile</span>
          </div>
          <div className="header-right-menu-item">
            <span className="header-right-menu-item-icon"><SettingOutlined /> </span>
            <span className="header-right-menu-item-content">Setting</span>
          </div>
          <div className="header-right-menu-item">
            <span className="header-right-menu-item-icon"><LogoutOutlined /> </span>
            <span className="header-right-menu-item-content">Logout</span>
          </div>
        </div>
      </div>
      <div ref={notificationRef} className="header-bell">
        <BellOutlined />
        <div className="header-bell-badge">99+</div>
      </div>
    </div>
  );
};