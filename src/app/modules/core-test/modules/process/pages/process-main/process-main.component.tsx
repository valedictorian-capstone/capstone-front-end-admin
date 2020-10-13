import React from 'react';
import { IBaseProps } from '@extras/interfaces';
import './process-main.component.css';
import { Col, Row } from 'antd';
import { WorkFlowListComponent } from '@modules/core/modules/work-flow/components';
import { WorkFlowUM } from '@view-models';
import { ProcessListComponent } from '../../components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useLoadingAction } from '@stores/actions';

export interface IProcessMainComponentProps extends IBaseProps {
  input: {};
  output: {};
}

export const ProcessMainComponent: React.FC<IProcessMainComponentProps> = (props: IProcessMainComponentProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [workFlow, setWorkFlow] = React.useState<WorkFlowUM>();
  return (
    <Row>
      <Col span={8}>
        <WorkFlowListComponent input={{ inProcess: true }} output={{
          onSelectItem: setWorkFlow,
        }} />
      </Col>
      <Col span={16}>
        <ProcessListComponent input={{ workFlow }} output={{
          onSelectItem: (id) => {
            dispatch(useLoadingAction().showLoader());
            setTimeout(() => {
              history.push(`process/${id}`);
              dispatch(useLoadingAction().hideLoader());
            }, 500);
          },
        }} />
      </Col>
    </Row>
  );
};