import { IBaseProps } from '@extras/interfaces';
import {
  BpmnDiagrams,
  ConnectorModel, DataBinding,
  DiagramComponent as Diagram,
  DiagramContextMenu,
  Inject,
  NodeModel,
  SelectorModel,
  UndoRedo,
} from '@syncfusion/ej2-react-diagrams';
import { WorkFlowVM } from '@view-models';
import { Col } from 'antd';
import React from 'react';
import { uuid } from 'uuidv4';
import { CanvasComponent } from '../canvas/canvas.component';
import { DetailComponent } from '../detail/detail.component';
import './diagram.component.css';

export interface IDiagramComponentProps extends IBaseProps {
  input?: {
    data?: WorkFlowVM,
  };
  output?: {};
}

export const DiagramComponent = (props: IDiagramComponentProps) => {
  const [diagram, setDiagram] = React.useState<Diagram>();
  const [control, setControl] = React.useState<NodeModel | ConnectorModel | SelectorModel>();
  return (
    <>
      <Col className="gutter-row" span={14} style={{ padding: 0 }}>
        <Diagram
          id="diagram"
          ref={(ref: Diagram) => setDiagram(ref)}
          width={'100%'}
          height={window.innerHeight - 160}
          click={(e) => {
            console.log(e);
            if ((e?.element as any).propName) {
              setControl(e?.element as SelectorModel);
            } else {
              setControl(undefined);
            }
          }}
          dragEnter={(e) => {
            console.log(e);
            (e?.element as any).id = uuid();
            (e?.element as any).workFlowId = props.input?.data?.id;
            setControl(e?.element);
          }}
        >
          <Inject services={[BpmnDiagrams, UndoRedo, DiagramContextMenu, DataBinding]} />
        </Diagram>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={{ height: '50%' }}>
          <CanvasComponent input={{ control }} />
        </div>
        {props.input?.data && <div style={{ height: '50%' }}>
          <DetailComponent input={{ diagram, data: props.input.data }} />
        </div>}
      </Col>
    </>
  );
};