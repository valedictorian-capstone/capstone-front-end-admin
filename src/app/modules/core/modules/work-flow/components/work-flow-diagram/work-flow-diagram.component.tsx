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
import { WorkFlowCanvasComponent } from '../work-flow-canvas/work-flow-canvas.component';
import { WorkFlowDetailComponent } from '../work-flow-detail/work-flow-detail.component';
import './work-flow-diagram.component.css';

export interface IWorkFlowDiagramComponentProps extends IBaseProps {
  input?: {
    data?: WorkFlowVM,
  };
  output?: {};
}

export const WorkFlowDiagramComponent = (props: IWorkFlowDiagramComponentProps) => {
  const [diagram, setDiagram] = React.useState<Diagram>();
  const [control, setControl] = React.useState<NodeModel | ConnectorModel | SelectorModel>();
  React.useEffect(() => {
    diagram?.clear();
  }, [props.input?.data]);
  return (
    <>
      <Col className="gutter-row" span={14} style={{ padding: 0 }}>
        <Diagram
          id="diagram"
          ref={(ref: Diagram) => setDiagram(ref)}
          width={'100%'}
          height={window.innerHeight - 160}
          drop={console.log}
          click={(e) => {
            if ((e?.element as any).propName) {
              setControl(e?.element as SelectorModel);
            } else {
              setControl(undefined);
            }
          }}
          dragEnter={(e) => {
            console.log(e);
            if ((e?.element as any).propName === 'connectors') {
              (e?.element as any).realType = (e?.element as any).id.split('_')[0];
            }
            (e?.element as any).id = uuid();
            (e?.element as any).workFlowId = props.input?.data?.id;
            setControl(e?.element);
          }}
        >
          <Inject services={[BpmnDiagrams, UndoRedo, DiagramContextMenu, DataBinding]} />
        </Diagram>
      </Col>
      <Col className="gutter-row" span={6}>
        {props.input?.data &&
          <>
            <div style={{ height: '50%' }}>
              <WorkFlowCanvasComponent input={{ control }} />
            </div>
            <div style={{ height: '50%' }}>
              <WorkFlowDetailComponent input={{ diagram, data: props.input.data }} output={{
                onSave: () => {
                  const arr = JSON.parse(localStorage.getItem('work-flow') as string);
                  arr.push({
                    ...JSON.parse(diagram?.saveDiagram() as string),
                    ...props.input?.data,
                    isDraft: true,
                  });
                  localStorage.setItem('work-flow', JSON.stringify(arr));
                },
                onDraft: () => {
                  const arr = JSON.parse(localStorage.getItem('work-flow') as string);
                  arr.push({
                    ...JSON.parse(diagram?.saveDiagram() as string),
                    ...props.input?.data,
                    isDraft: true,
                  });
                  localStorage.setItem('work-flow', JSON.stringify(arr));
                },
              }} />
            </div>
          </>
        }
      </Col>
    </>
  );
};