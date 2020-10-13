import React from 'react';
import { IBaseProps } from '@extras/interfaces';
import './side-bar-right.component.css';
import { HomeOutlined } from '@material-ui/icons';

export interface ISideBarRightComponentProps extends IBaseProps {
  input: {
    stick: string,
  };
  output: {};
}

export const SideBarRightComponent: React.FC<ISideBarRightComponentProps> = (props: ISideBarRightComponentProps) => {
  return (
    <div className={'main-right' + (props.input.stick === 'right' ? ' stick' : '')}>
      <span className="menu">
        <HomeOutlined fontSize="default" />
        <div className="box">
          <span className="box-text">
            Home
        </span>
        </div>
      </span>
      <span className="menu">
        <HomeOutlined fontSize="default" />
        <div className="box">
          <span className="box-text">
            Home
        </span>
        </div>
      </span>
      <span className="menu">
        <HomeOutlined fontSize="default" />
        <div className="box">
          <span className="box-text">
            Home
        </span>
        </div>
      </span>
      <span className="menu">
        <HomeOutlined fontSize="default" />
        <div className="box">
          <span className="box-text">
            Home
        </span>
        </div>
      </span>
      <span className="menu">
        <HomeOutlined fontSize="default" />
        <div className="box">
          <span className="box-text">
            Home
        </span>
        </div>
      </span>
      <div className="main-box" />
    </div>
  );
};