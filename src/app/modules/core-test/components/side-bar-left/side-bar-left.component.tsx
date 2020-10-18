import React from 'react';
import { IBaseProps } from '@extras/interfaces';
import './side-bar-left.component.css';
import { HomeOutlined } from '@material-ui/icons';
import { environment } from '@environments/environment';
import { RootState } from '@stores/states';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useLoadingAction } from '@stores/actions';
import { Col, Row } from 'antd';

export interface ISideBarLeftComponentProps extends IBaseProps {
  input: {
    target: EventTarget | undefined,
    stick: string,
  };
  output: {
  };
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
    <div className={'side-bar-menu' + ' ' + props.input.stick}>
      {config.categories.map((category, index) => (
        <Row className={'side-bar-menu-item' + (history.location.pathname.split('/')[2] === category.value ? ' stick' : '')} key={index} onClick={() => gotoPage('/core/' + category.value)}>
          <Col span={16} className="side-bar-menu-item-data">
            {category.label}
          </Col>
          <Col span={8} className="side-bar-menu-item-icon">
            {category.icon}
          </Col>
        </Row>
      ))}
    </div>
  );
};