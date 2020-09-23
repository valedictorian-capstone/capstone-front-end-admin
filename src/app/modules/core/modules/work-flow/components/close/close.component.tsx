import { CloseCircleOutlined } from '@ant-design/icons';
import { IBaseProps } from '@extras/interfaces';
import { Button } from 'antd';
import React from 'react';
import './close.component.css';

export interface ICloseComponentProps extends IBaseProps {
  input?: {};
  output?: {
    onClick: () => void;
  };
}

export const CloseComponent = (props: ICloseComponentProps) => {
  return (
    <Button type="default" danger={true} onClick={props.output?.onClick} shape="round"><CloseCircleOutlined /></Button>
  );
};