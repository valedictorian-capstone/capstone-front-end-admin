import { CheckCircleOutlined, EyeOutlined, MinusCircleOutlined, RollbackOutlined } from '@ant-design/icons';
import { environment, getPorts } from '@environments/environment';
import { useWorkFlowAction } from '@stores/actions';
import { RootState } from '@stores/states';
import { IBaseProps } from '@extras/interfaces';
import {
  BpmnDiagrams,
  DataBinding,
  DiagramComponent as Diagram,
  DiagramContextMenu,
  Inject,
  NodeModel,
  SelectorModel,
  ConnectorModel,
  UndoRedo,
} from '@syncfusion/ej2-react-diagrams';
import { WorkFlowUM } from '@view-models';
import { Button, Col, Row, Tooltip } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { WorkFlowDetailComponent, WorkFlowPaletteComponent } from '..';
import './work-flow-view.component.css';
import { uuid } from 'uuidv4';
import { couldStartTrivia } from 'typescript';
export interface IWorkFlowViewComponentProps extends IBaseProps {
  input: {
    data: WorkFlowUM;
  };
  output: {
    back: () => void,
  };
}
export const WorkFlowViewComponent: React.FC<IWorkFlowViewComponentProps> = (props: IWorkFlowViewComponentProps) => {
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const config = environment.i18n.data.core.modules['work-flow'].components['work-flow-view'][region];
  const dispatch = useDispatch();
  const [form, setForm] = React.useState<WorkFlowUM>(props.input.data);
  const ref = React.useRef<Diagram>(null);
  return (
    <Row gutter={24} style={{ height: (window.innerHeight - 140) }}>
      <Col className="gutter-row" span={18} style={{ padding: 0, background: 'transparent' }}>
        <Row
          style={{ width: '100%', maxHeight: window.innerHeight - 140, height: window.innerHeight - 140, alignContent: 'baseline', overflow: 'hidden', border: '1px solid gray' }}>
          <Col span={1} style={{ height: 50, borderBottom: '1px solid gray', padding: 13, background: 'moccasin' }}>
            <Tooltip placement="top" title={config.buttons.back.tooltip}>
              <Button onClick={props.output.back} shape="circle" size="small" type="primary" className="setting"><RollbackOutlined /></Button>
            </Tooltip>
          </Col>
          <Col span={23} style={{ height: 50, borderBottom: '1px solid gray', textAlign: 'right', padding: 13, background: 'moccasin' }}>
            <Tooltip placement="top" title={config.buttons.preview.tooltip}>
              <Button shape="circle" size="small" style={{ marginRight: 10 }} className="setting"><EyeOutlined /></Button>
            </Tooltip>
            <Tooltip placement="top" title={config.buttons.active.tooltip}>
              <Button shape="circle" size="small" style={{ marginRight: 10 }} className="setting"><CheckCircleOutlined /></Button>
            </Tooltip>
            <Tooltip placement="top" title={config.buttons.deactive.tooltip}>
              <Button shape="circle" size="small" style={{ marginRight: 10 }} danger={true} className="setting"><MinusCircleOutlined /></Button>
            </Tooltip>
            <WorkFlowPaletteComponent input={{}} output={{}} />
          </Col>
          <Col span={24}>
            <Diagram
              id="diagram"
              ref={ref}
              width={'100%'}
              height={window.innerHeight - 190}
              drop={console.log}
              {...props.input.data.props}
              connectors={props.input.data.wfConnections.map((e) => ({ id: e.id, ...e.props, realId: e.id }))}
              nodes={props.input.data.wFSteps.map((e) => ({ id: e.id, ports: getPorts(e.id), ...e.props, realId: e.id }))}
              click={(e) => {
                // const data = JSON.parse(ref.current?.saveDiagram() as string);
                // const workFlowSteps = {
                //   create: data.nodes.filter((node: any) => !(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(node.realId as string))).map((detail: any) => {
                //     return {
                //       id: detail.id,
                //       name: detail.annotations[0].content,
                //       description: detail.description,
                //       shape: detail.shape.shape,
                //       type: detail.shape.shape === 'Event' ? detail.shape.event.event : (detail.shape.shape === 'Activity' ? detail.shape.activity.activity : detail.shape.gateway.type),
                //       props: { ...detail, description: undefined, id: undefined },
                //       wF: props.input.data,
                //     };
                //   }),
                //   update: data.nodes.filter((node: any) => (/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(node.realId as string))).map((detail: any) => {
                //     return {
                //       id: detail.id,
                //       name: detail.annotations[0].content,
                //       description: detail.description,
                //       shape: detail.shape.shape,
                //       type: detail.shape.shape === 'Event' ? detail.shape.event.event : (detail.shape.shape === 'Activity' ? detail.shape.activity.activity : detail.shape.gateway.type),
                //       props: { ...detail, description: undefined, id: undefined },
                //       wF: props.input.data,
                //     };
                //   }),
                // };
                // const workFlowConnections = {
                //   create: data.connectors.filter((connector: any) => !(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(connector.realId as string))).map((detail: any) => {
                //     return {
                //       id: detail.id,
                //       description: detail.description,
                //       fromWFStep: { id: detail.sourceID },
                //       toWFStep: { id: detail.targetID },
                //       props: { ...detail, description: undefined, id: undefined },
                //       wf: props.input.data,
                //     };
                //   }),
                //   update: data.connectors.filter((connector: any) => (/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(connector.realId as string))).map((detail: any) => {
                //     return {
                //       id: detail.id,
                //       description: detail.description,
                //       fromWFStep: { id: detail.sourceID },
                //       toWFStep: { id: detail.targetID },
                //       props: { ...detail, description: undefined, id: undefined },
                //       wf: props.input.data,
                //     };
                //   }),
                // };
                // delete data.nodes;
                // delete data.connectors;
                // console.log({
                //   ...props.input.data,
                //   workFlowSteps,
                //   workFlowConnections,
                //   props: { ...data },
                // });
                console.log(props.input.data);
                console.log(JSON.parse(ref.current?.saveDiagram() as string));
              }}
              dragEnter={(e) => {
                console.log(e);
              }}
              propertyChange={console.log}
              historyChange={console.log}
              collectionChange={(e) => {
                if (e?.state === 'Changing') {
                  if (e.type === 'Addition') {
                    (e.element as any).realId = e.element.id;
                    (e.element as any).id = uuid();
                  }
                }
              }}
            >
              <Inject services={[BpmnDiagrams, UndoRedo, DiagramContextMenu, DataBinding]} />
            </Diagram>
          </Col>
        </Row>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={{ height: window.innerHeight - 140, border: '1px solid gray' }}>
          <WorkFlowDetailComponent input={{ form }} output={{
            onSave: (e) => {
              const data = JSON.parse(ref.current?.saveDiagram() as string);
              console.log(data);
              const workFlowSteps = {
                create: data.nodes.filter((node: any) => node.realId).map((detail: any) => {
                  return {
                    id: detail.id,
                    name: detail.annotations[0].content,
                    description: detail.description,
                    shape: detail.shape.shape,
                    type: detail.shape.shape === 'Event' ? detail.shape.event.event : (detail.shape.shape === 'Activity' ? detail.shape.activity.activity : detail.shape.gateway.type),
                    props: { ...detail, description: undefined, id: undefined, ports: undefined },
                    wF: { id: props.input.data.id },
                  };
                }),
                update: data.nodes.filter((node: any) => !node.realId).map((detail: any) => {
                  return {
                    id: detail.id,
                    name: detail.annotations[0].content,
                    description: detail.description,
                    shape: detail.shape.shape,
                    type: detail.shape.shape === 'Event' ? detail.shape.event.event : (detail.shape.shape === 'Activity' ? detail.shape.activity.activity : detail.shape.gateway.type),
                    props: { ...detail, description: undefined, id: undefined, ports: undefined },
                    wF: { id: props.input.data.id },
                  };
                }),
              };
              const workFlowConnections = {
                create: data.connectors.filter((connector: any) => connector.realId).map((detail: any) => {
                  return {
                    id: detail.id,
                    description: detail.description,
                    fromWFStep: { id: detail.sourceID },
                    toWFStep: { id: detail.targetID },
                    props: { ...detail, description: undefined, id: undefined },
                    wf: { id: props.input.data.id },
                  };
                }),
                update: data.connectors.filter((connector: any) => !connector.realId).map((detail: any) => {
                  return {
                    id: detail.id,
                    description: detail.description,
                    fromWFStep: { id: detail.sourceID },
                    toWFStep: { id: detail.targetID },
                    props: { ...detail, description: undefined, id: undefined },
                    wf: { id: props.input.data.id },
                  };
                }),
              };
              delete data.nodes;
              delete data.connectors;
              console.log({
                id: props.input.data.id,
                name: props.input.data.name,
                code: props.input.data.code,
                description: props.input.data.description,
                workFlowSteps,
                workFlowConnections,
                props: {},
              });
              dispatch(useWorkFlowAction().update({
                id: props.input.data.id,
                name: props.input.data.name,
                code: props.input.data.code,
                description: props.input.data.description,
                workFlowSteps,
                workFlowConnections,
                props: {},
              }));
              dispatch(useWorkFlowAction().getAll());
            },
          }} />
        </div>
      </Col>
    </Row>
  );
};