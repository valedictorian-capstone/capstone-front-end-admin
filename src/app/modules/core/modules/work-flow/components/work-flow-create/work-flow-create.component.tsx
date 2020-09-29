import { PlusCircleOutlined } from '@ant-design/icons';
import { IBaseProps } from '@extras/interfaces';
import { Button } from 'antd';
import React from 'react';
import './work-flow-create.component.css';

export interface IWorkFlowCreateComponentProps extends IBaseProps {
  input?: {};
  output?: {
    onClick: () => void;
  };
}

export const WorkFlowCreateComponent = (props: IWorkFlowCreateComponentProps) => {
  return (
    <Button type="primary" onClick={props.output?.onClick} shape="round"><PlusCircleOutlined /></Button>
  );
};