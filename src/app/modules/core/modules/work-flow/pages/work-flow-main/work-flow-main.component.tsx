import { IBaseProps } from '@extras/interfaces';
import { WorkFlowVM } from '@view-models';
import { Col, Row } from 'antd';
import React from 'react';
import { WorkFlowDiagramComponent, WorkFlowListComponent } from '../../components';
import './work-flow-main.component.css';

export interface IWorkFlowMainComponentProps extends IBaseProps {
  input?: {};
  output?: {};
}

export const WorkFlowMainComponent = (props: IWorkFlowMainComponentProps) => {
  const [data, setData] = React.useState<WorkFlowVM>();
  return (
    <Row gutter={16}>
      <Col className="gutter-row" span={4}>
        <WorkFlowListComponent output={{ onSelectItem: (e) => setData(e) }} />
      </Col>
      <WorkFlowDiagramComponent input={{ data }} />
    </Row>
  );
};