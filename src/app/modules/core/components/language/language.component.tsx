import React from 'react';
import { TranslateOutlined } from '@material-ui/icons';
import { Dropdown, Menu } from 'antd';
import { environment } from '@environments/environment';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@stores/states';
import { useLanguageAction } from '@stores/actions';
import './language.component.css';
import { IBaseProps } from '@extras/interfaces';

export interface ILanguageComponentProps extends IBaseProps {
  input: {};
  output: {};
}

export const LanguageComponent: React.FC<ILanguageComponentProps> = (props: ILanguageComponentProps) => {
  const dispatch = useDispatch();
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const menu = <Menu activeKey={region as any} onClick={(e) => {
    switch (e.key) {
      case 'vi': dispatch(useLanguageAction().toVietnamese());
        break;
      case 'en': dispatch(useLanguageAction().toEnglish());
        break;
      case 'jp': dispatch(useLanguageAction().toJapanese());
        break;
      default: dispatch(useLanguageAction().toEnglish());
        break;
    }
  }}>
    {environment.i18n.languages.map((lang) => (
      <Menu.Item key={lang.value} style={{minWidth: '160px'}} className={lang.value === region ? 'active' : ''}>
        {lang.label}
      </Menu.Item>
    ))}
  </Menu>;
  return (
    (<Dropdown overlay={menu} placement="bottomRight">
      <span className="action">
        <TranslateOutlined />
      </span>
    </Dropdown>
    )
  );
};