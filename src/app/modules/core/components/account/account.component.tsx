import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { useLoadingAction } from '@stores/actions';
import { RootState } from '@stores/states';
import { AccountVM } from '@view-models';
import { Dropdown, Menu } from 'antd';
// import { link } from 'fs';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { dispatch } from 'rxjs/internal/observable/pairs';

export interface IAccountComponentProps extends IBaseProps {
  input: {
    account: AccountVM,
  };
  output: {};
}

export const AccountComponent: React.FC<IAccountComponentProps> = (props: IAccountComponentProps) => {
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const config = environment.i18n.data.core.components.account[region];
  const menu = <Menu>
    {config.items.map((item) => (
      <Menu.Item key={item.value} icon={item.icon} style={{ minWidth: '160px' }}>
        <span onClick={() => gotoPage('/core/' + item.value)}>{item.label}</span>
      </Menu.Item>
    ))}
  </Menu>;
  const history = useHistory();
  const dispatch = useDispatch();
  const gotoPage = (link: string) => {
    dispatch(useLoadingAction().showLoader());
    setTimeout(() => {
      history.push(link);
      dispatch(useLoadingAction().hideLoader());
    }, 500);
  };
  return (
    (<Dropdown overlay={menu} placement="bottomRight">
      <span className="action">
        {/* <Avatar size="small" className={styles.avatar} src={currentUser.avatar} /> */}
        <span>
          {props.input?.account}
        </span>
      </span>
    </Dropdown>
    )
  );
};