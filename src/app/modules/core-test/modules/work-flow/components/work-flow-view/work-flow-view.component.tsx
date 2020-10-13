import { CheckCircleOutlined, EditOutlined, EyeOutlined, MinusCircleOutlined, RollbackOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { environment, getPorts } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { useWorkFlowAction } from '@stores/actions';
import { RootState } from '@stores/states';
import {
  BpmnDiagrams,
  BpmnShapeModel,
  ConnectorModel, DataBinding,
  DiagramComponent as Diagram,
  DiagramContextMenu,
  Inject,
  NodeModel,
  UndoRedo,
} from '@syncfusion/ej2-react-diagrams';
import { WorkFlowStepCM, WorkFlowStepUM, WorkFlowUM } from '@view-models';
import { Button, Col, Drawer, Input, Modal, Row, Tabs, Tooltip } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uuid } from 'uuidv4';
import { WorkFlowDetailComponent, WorkFlowPaletteComponent } from '..';
import './work-flow-view.component.css';
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
  const ref = React.useRef<Diagram>(null);
  const [form, setForm] = React.useState<WorkFlowUM>(props.input.data);
  const [removeObj, setRemoveObj] = React.useState<{ steps: string[], connections: string[] }>({ connections: [], steps: [] });
  const [data, setData] = React.useState<{ nodes: any[], connectors: any[] }>({
    nodes: props.input.data.wFSteps.map((e) => ({ id: e.id, isDelete: e.isDelete, departmentId: e.departmentId || undefined, formGroups: e.formGroups, name: e.name, description: e.description })),
    connectors: props.input.data.wfConnections.map((e) => ({ id: e.id, isDelete: e.isDelete })),
  });
  const [diagram, setDiagram] = React.useState<any>(null);
  const [selected, setSelected] = React.useState<{ id: string } | undefined>(undefined);
  const getValue = () => {
    return data.nodes.find((e) => e.id === selected?.id);
  };
  const serializationStepData = (node: NodeModel, workFlow: Diagram) => {
    const step = data.nodes.find((n) => n.id === node.id);
    node.annotations = node.annotations ? node.annotations.map((anno: any) => ({ content: anno.content })) : [{ content: '' }];
    if (!(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i).test(node.id as string)) {
      const newId = uuid();
      for (const connector of workFlow.connectors) {
        if (connector.sourceID === node.id) {
          connector.sourceID = newId;
        }
        if (connector.targetID === node.id) {
          connector.targetID = newId;
        }
      }
      node.id = newId;
    }
    return {
      ...step,
      id: node.id,
      shape: (node.shape as BpmnShapeModel).shape,
      type: (node.shape as BpmnShapeModel).shape === 'Event' ? (node.shape as BpmnShapeModel).event?.event : ((node.shape as BpmnShapeModel).shape === 'Activity' ? (node.shape as BpmnShapeModel).activity?.activity : (node.shape as BpmnShapeModel).gateway?.type),
      props: {
        shape: (node.shape as BpmnShapeModel),
        offsetX: node.offsetX,
        offsetY: node.offsetY,
        height: node.height,
        width: node.width,
        annotations: node.annotations,
      },
      wF: { id: form.id },
    };
  };
  const serializationConnectionData = (connector: ConnectorModel) => {
    connector.annotations = connector.annotations && connector.annotations.map((anno: any) => ({ content: anno.content }));
    return {
      id: (/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i).test(connector.id as string) ? connector.id : uuid(),
      fromWFStep: { id: connector.sourceID },
      toWFStep: { id: connector.targetID },
      props: {
        sourceID: connector.sourceID,
        targetID: connector.targetID,
        type: connector.type,
        targetDecorator: { shape: 'Arrow' },
        style: { strokeWidth: 2, strokeDashArray: '5.5' },
        shape: { bpmnFlow: 'Sequence', sequence: 'Normal' },
        annotations: connector.annotations,
      },
      wf: { id: props.input.data.id },
    };
  };
  React.useEffect(() => {
    if (props.input.data) {
      setDiagram(<Diagram
        id="diagram"
        ref={ref}
        pageSettings={{
          width: 3000,
          height: 3000,
          multiplePage: true,
          margin: { top: 1000 },
        }}
        width={'100%'}
        height={window.innerHeight - 190}
        {...props.input.data.props}
        connectors={props.input.data.wfConnections.map((e) => ({ id: e.id, ...e.props }))}
        nodes={props.input.data.wFSteps.map((e) => ({ id: e.id, ports: getPorts(e.id), ...e.props }))}
        collectionChange={(e) => {
          if (e?.state === 'Changed') {
            if (e?.type === 'Removal') {
              if (!(ref.current as any).canDelete) {
                ref.current?.add(e.element);
              } else {
                if ((/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i).test(e.element.id as string)) {
                  if ((e.element as any).propName === 'nodes') {
                    removeObj.steps.push(e.element.id as string);
                    data.nodes = data.nodes.map((node) => node.id === e.element.id ? { ...node, isDelete: true } : node);
                  } else {
                    removeObj.connections.push(e.element.id as string);
                    data.connectors = data.connectors.map((connector) => connector.id === e.element.id ? { ...connector, isDelete: true } : connector);
                  }
                }
              }
            } else {
              if ((e.element as any).propName === 'nodes') {
                removeObj.steps = removeObj.steps.filter((id) => e.element.id !== id);
                data.nodes = data.nodes.map((node) => node.id === e.element.id ? { ...node, isDelete: false } : node);
                if (data.nodes.findIndex((node) => node.id === e.element.id) === -1) {
                  data.nodes.push({ id: e.element.id as string, isDelete: false, formGroups: [], departmentId: undefined });
                }
              } else {
                removeObj.connections = removeObj.connections.filter((id) => e.element.id !== id);
                data.connectors = data.connectors.map((connector) => connector.id === e.element.id ? { ...connector, isDelete: false } : connector);
                if (data.connectors.findIndex((connector) => connector.id === e.element.id) === -1) {
                  data.connectors.push({ id: e.element.id as string, isDelete: false });
                }
              }
            }
            setRemoveObj({ ...removeObj });
            setData({ ...data });
          }
        }}
        selectionChange={(e) => {
          if (e && e.newValue.length === 1 && (e.newValue[0] as any).propName === 'nodes') {
            (document.getElementById('edit-diagram-element') as any).style.visibility = 'unset';
          } else {
            (document.getElementById('edit-diagram-element') as any).style.visibility = 'hidden';
          }
          if (e && e.newValue.length === 0) {
            (document.getElementById('remove-diagram-element') as any).style.visibility = 'hidden';
          } else {
            (document.getElementById('remove-diagram-element') as any).style.visibility = 'unset';
          }
        }}
      >
        <Inject services={[BpmnDiagrams, UndoRedo]} />
      </Diagram>);
    }
  }, [props.input.data]);
  return (
    <Row gutter={24} style={{ height: (window.innerHeight - 140) }}>
      {/* <Drawer
        width={'30%'}
        placement="right"
        closable={false}
        onClose={() => setSelected(undefined)}
        visible={selected !== undefined}
      >
        <Tabs centered={true}>
          <Tabs.TabPane tab={<span>Thông tin</span>} key="1"/>
          <Tabs.TabPane tab={<span>Biểu mẫu</span>} key="2">
            Content of Tab 2
          </Tabs.TabPane>
          <Tabs.TabPane tab={<span>Tác vụ</span>} key="3">
            Content of Tab 3
          </Tabs.TabPane>
        </Tabs>
      </Drawer> */}
      <Modal
        title={<span style={{ display: 'block', textAlign: 'center' }}>{config['step-detail'].label}</span>}
        visible={selected !== undefined}
        footer={null}
        width={800}
        onCancel={() => setSelected(undefined)}
        destroyOnClose={true}
        centered={true}
      >
        <Row style={{ width: '100%', marginBottom: 15 }}>
          <Col span={3}>
            <span>Nội dung: </span>
          </Col>
          <Col span={21}>
            <Input style={{ width: '100%' }} value={selected ? getValue().name : ''} onChange={(e) => {
              data.nodes.find((node) => node.id === selected?.id).name = e.target.value;
              setData({
                ...data,
              });
              const type = (ref.current?.nodes.find((node) => node.id === selected?.id as string)?.shape as BpmnShapeModel).shape;
              if (type === 'Activity') {
                (ref.current?.nodes.find((node) => node.id === selected?.id as string)?.annotations as any)[0].content = e.target.value;
              }
            }} />
          </Col>
        </Row>
        <Row style={{ width: '100%' }}>
          <Col span={3}>
            <span>Ghi chú: </span>
          </Col>
          <Col span={21}>
            <Input.TextArea style={{ width: '100%' }} rows={5} value={selected ? getValue().description : ''} onChange={(e) => {
              data.nodes.find((node) => node.id === selected?.id).description = e.target.value;
              setData({
                ...data,
              });
            }} />
          </Col>
        </Row>
      </Modal>
      <Col className="gutter-row" span={18} style={{ padding: 0, background: 'transparent' }}>
        <Row
          style={{ width: '100%', maxHeight: window.innerHeight - 140, height: window.innerHeight - 140, alignContent: 'baseline', overflow: 'hidden', border: '1px solid gray' }}>
          <Col span={1} style={{ height: 50, borderBottom: '1px solid gray', padding: 13, background: 'moccasin' }}>
            <Tooltip placement="top" title={config.buttons.back.tooltip}>
              <Button onClick={props.output.back} shape="circle" size="small" type="primary" className="setting"><RollbackOutlined /></Button>
            </Tooltip>
          </Col>
          <Col span={23} style={{ height: 50, borderBottom: '1px solid gray', textAlign: 'right', padding: 13, background: 'moccasin' }}>
            <Tooltip placement="top" title={config.buttons.edit.tooltip}>
              <Button id="edit-diagram-element" shape="circle" onClick={() => {
                const selectedItem = (ref.current?.selectedItems.nodes as any)[0];
                setSelected({ id: selectedItem.id });
              }} type="primary" size="small" style={{ marginRight: 10, visibility: 'hidden' }} className="setting"><EditOutlined /></Button>
            </Tooltip>
            <Tooltip placement="top" title={config.buttons.edit.tooltip}>
              <Button id="edit-diagram-element" shape="circle" onClick={() => {
                const selectedItem = (ref.current?.selectedItems.nodes as any)[0];
                setSelected({ id: selectedItem.id });
              }} type="primary" size="small" style={{ marginRight: 10, visibility: 'hidden' }} className="setting"><EditOutlined /></Button>
            </Tooltip>
            <Tooltip placement="top" title={config.buttons.remove.tooltip}>
              <Button danger={true} id="remove-diagram-element" onClick={() => {
                (ref.current as any).canDelete = true;
                const arr = [...(ref.current?.selectedItems.connectors as any), ...(ref.current?.selectedItems.nodes as any)];
                for (const item of arr) {
                  ref.current?.remove(item);
                }
                (ref.current as any).canDelete = false;
              }} shape="circle" size="small" style={{ marginRight: 10, visibility: 'hidden' }} className="setting"><CloseCircleOutlined /></Button>
            </Tooltip>
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
            {diagram}
          </Col>
        </Row>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={{ height: window.innerHeight - 140, border: '1px solid gray' }}>
          <WorkFlowDetailComponent input={{ form }} output={{
            onSave: (e) => {
              const workFlow = ref.current;
              if (workFlow !== null) {
                const workFlowSteps = workFlow.nodes.map((node) => serializationStepData(node, workFlow));
                const workFlowConnections = workFlow.connectors.map((connector) => serializationConnectionData(connector));
                dispatch(useWorkFlowAction().update({
                  ...form,
                  ...e,
                  workFlowSteps,
                  workFlowConnections,
                  workFlowConnectionIds: removeObj.connections,
                  workFlowStepIds: removeObj.steps,
                  props: {},
                }));
                setForm({
                  ...form,
                  ...e,
                });
              }
            },
          }} />
        </div>
      </Col>
    </Row >
  );
};