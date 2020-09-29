import { CloseCircleOutlined } from '@ant-design/icons';
import { IBaseProps } from '@extras/interfaces';
import { Button } from 'antd';
import React from 'react';
import './work-flow-close.component.css';

export interface IWorkFlowCloseComponentProps extends IBaseProps {
  input?: {};
  output?: {
    onClick: () => void;
  };
}

export const WorkFlowCloseComponent = (props: IWorkFlowCloseComponentProps) => {
  return (
    <Button type="default" danger={true} onClick={props.output?.onClick} shape="round"><CloseCircleOutlined /></Button>
  );
};