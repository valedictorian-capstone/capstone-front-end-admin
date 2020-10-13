import React from 'react';
import { IBaseProps } from '@extras/interfaces';
import './side-bar-left.component.css';
import { HomeOutlined } from '@material-ui/icons';
import { environment } from '@environments/environment';
import { RootState } from '@stores/states';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useLoadingAction } from '@stores/actions';

export interface ISideBarLeftComponentProps extends IBaseProps {
  input: {
    stick: string,
  };
  output: {};
}

export const SideBarLeftComponent: React.FC<ISideBarLeftComponentProps> = (props: ISideBarLeftComponentProps) => {
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
  return (
    <div className={'main-left' + (props.input.stick === 'left' ? ' stick' : '')}>
      {config.categories.map((category, index) => (
        <span key={index} className="menu" onClick={() => gotoPage('/core/' + category.value)}>
          {category.icon}
          <div className="box">
            <span className="box-text">
              {category.label}
              </span>
          </div>
        </span>
      ))}
      <div className="main-box" />
    </div>
  );
};