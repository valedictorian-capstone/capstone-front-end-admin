import { PlusCircleOutlined } from '@ant-design/icons';
import { IBaseProps } from '@extras/interfaces';
import { Button } from 'antd';
import React from 'react';
import './create.component.css';

export interface ICreateComponentProps extends IBaseProps {
  input?: {};
  output?: {
    onClick: () => void;
  };
}

export const CreateComponent = (props: ICreateComponentProps) => {
  return (
    <Button type="primary" onClick={props.output?.onClick} shape="round"><PlusCircleOutlined /></Button>
  );
};