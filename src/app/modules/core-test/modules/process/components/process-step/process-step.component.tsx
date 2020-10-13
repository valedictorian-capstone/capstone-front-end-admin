import React from 'react';
import { IBaseProps } from '@extras/interfaces';
import './process-step.component.css';
import { Row } from 'antd';

export interface IProcessStepComponentProps extends IBaseProps {
  input: {};
  output: {};
}

export const ProcessStepComponent: React.FC<IProcessStepComponentProps> = (props: IProcessStepComponentProps) => {
  return (
    <div style={{ height: (window.innerHeight - 140), width: '98%', margin: 'auto', border: '1px solid gray' }}>
      <Row gutter={24} style={{ height: '5%', background: 'moccasin', width: '100%', margin: 'auto', borderBottom: '1px solid gray' }}>
        abc
        </Row>
      <Row gutter={24} style={{ height: '95%', maxHeight: '90%', overflow: 'auto', background: 'transparent', width: '100%', margin: 'auto' }}>
        abc
        </Row>
    </div>
  );
};