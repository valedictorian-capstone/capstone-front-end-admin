import React from 'react';
import { IBaseProps } from '@extras/interfaces';
import './process-editable.component.css';
import { Col, Row } from 'antd';
import { ProcessViewComponent, ProcessStepComponent } from '../../components';

export interface IProcessEditableComponentProps extends IBaseProps {
  input: {};
  output: {};
}

export const ProcessEditableComponent: React.FC<IProcessEditableComponentProps> = (props: IProcessEditableComponentProps) => {
  return (
    <Row gutter={24}>
      <Col span={6} style={{ paddingLeft: 5, paddingRight: 5 }}>
        <ProcessStepComponent input={{}} output={{}} />
      </Col>
      <Col span={18} style={{ paddingLeft: 5, paddingRight: 5 }}>
        <ProcessViewComponent input={{}} output={{}} />
      </Col>
    </Row>
  );
};