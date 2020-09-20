import {
  BpmnDiagrams, ConnectorModel, DataBinding, DiagramComponent, DiagramContextMenu, Inject, NodeModel, SymbolPaletteComponent,
  UndoRedo,
} from '@syncfusion/ej2-react-diagrams';
import { Col, Row } from 'antd';
import React from 'react';
import './work-flow-main.component.scss';
export const WorkFlowMainComponent = (props: {}) => {
  const connectors: ConnectorModel[] = [
    {
      id: 'Sequen_Flow_Normal',
      type: 'Orthogonal',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 40, y: 40 },
      targetDecorator: { shape: 'Arrow' },
      style: { strokeWidth: 2 },
      shape: { bpmnFlow: 'Sequence', sequence: 'Normal' },
    },
    {
      id: 'Sequen_Flow_Conditional',
      type: 'Orthogonal',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 40, y: 40 },
      targetDecorator: { shape: 'Arrow' },
      sourceDecorator: { shape: 'Diamond' },
      style: { strokeWidth: 2 },
      shape: { bpmnFlow: 'Sequence', sequence: 'Conditional' },
    },
    {
      id: 'Association_BiDirectional',
      type: 'Orthogonal',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 40, y: 40 },
      targetDecorator: { shape: 'IndentedArrow' },
      sourceDecorator: { shape: 'OutdentedArrow' },
      style: { strokeWidth: 2 },
      shape: { bpmnFlow: 'Association', association: 'BiDirectional' },
    },
    {
      id: 'Association_Directional',
      type: 'Orthogonal',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 40, y: 40 },
      targetDecorator: { shape: 'IndentedArrow' },
      sourceDecorator: { shape: 'None' },
      style: { strokeWidth: 2 },
      shape: { bpmnFlow: 'Association', association: 'Directional' },
    },
    {
      id: 'Association_Default',
      type: 'Orthogonal',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 40, y: 40 },
      targetDecorator: { shape: 'None' },
      sourceDecorator: { shape: 'None' },
      style: { strokeWidth: 2 },
      shape: { bpmnFlow: 'Association', association: 'Default' },
    },
    {
      id: 'Message_Flow_Default',
      type: 'Orthogonal',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 40, y: 40 },
      targetDecorator: { shape: 'OpenArrow' },
      sourceDecorator: { shape: 'Circle' },
      style: { strokeWidth: 2 },
      shape: { bpmnFlow: 'Message', message: 'Default' },
    },
    {
      id: 'Message_Flow_InitiatingMessage',
      type: 'Orthogonal',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 40, y: 40 },
      targetDecorator: { shape: 'OpenArrow' },
      sourceDecorator: { shape: 'Circle' },
      style: { strokeWidth: 2 },
      shape: { bpmnFlow: 'Message', message: 'InitiatingMessage' },
    },
  ];
  const shapes: NodeModel[] = [
    { id: 'Event_Start', shape: { type: 'Bpmn', bpmnShape: 'Event', event: { event: 'Start' } } },
    { id: 'Event_Intermediate', shape: { type: 'Bpmn', bpmnShape: 'Event', event: { event: 'Intermediate' } } },
    { id: 'Event_NonInterruptingIntermediate', shape: { type: 'Bpmn', bpmnShape: 'Event', event: { event: 'NonInterruptingIntermediate' } } },
    { id: 'Event_NonInterruptingStart', shape: { type: 'Bpmn', bpmnShape: 'Event', event: { event: 'NonInterruptingStart' } } },
    { id: 'Event_End', shape: { type: 'Bpmn', bpmnShape: 'Event', event: { event: 'End' } } },
    { id: 'Event_ThrowingIntermediate', shape: { type: 'Bpmn', bpmnShape: 'Event', event: { event: 'ThrowingIntermediate' } } },
    { id: 'Gateway_Complex', shape: { type: 'Bpmn', bpmnShape: 'Gateway', gateway: { type: 'Complex' } } },
    { id: 'Gateway_EventBased', shape: { type: 'Bpmn', bpmnShape: 'Gateway', gateway: { type: 'EventBased' } } },
    { id: 'Gateway_Exclusive', shape: { type: 'Bpmn', bpmnShape: 'Gateway', gateway: { type: 'Exclusive' } } },
    { id: 'Gateway_ExclusiveEventBased', shape: { type: 'Bpmn', bpmnShape: 'Gateway', gateway: { type: 'ExclusiveEventBased' } } },
    { id: 'Gateway_Inclusive', shape: { type: 'Bpmn', bpmnShape: 'Gateway', gateway: { type: 'Inclusive' } } },
    { id: 'Gateway_None', shape: { type: 'Bpmn', bpmnShape: 'Gateway', gateway: { type: 'None' } } },
    { id: 'Gateway_Parallel', shape: { type: 'Bpmn', bpmnShape: 'Gateway', gateway: { type: 'Parallel' } } },
    { id: 'Gateway_ParallelEventBased', shape: { type: 'Bpmn', bpmnShape: 'Gateway', gateway: { type: 'ParallelEventBased' } } },
    { id: 'Message', shape: { type: 'Bpmn', bpmnShape: 'Message' } },
    { id: 'DataObject_Input', shape: { type: 'Bpmn', bpmnShape: 'DataObject', dataObject: { type: 'Input' } } },
    { id: 'DataObject_None', shape: { type: 'Bpmn', bpmnShape: 'DataObject', dataObject: { type: 'None' } } },
    { id: 'DataObject_Output', shape: { type: 'Bpmn', bpmnShape: 'DataObject', dataObject: { type: 'Output' } } },
    { id: 'DataSource', shape: { type: 'Bpmn', bpmnShape: 'DataSource' } },
    { id: 'Activity_Task', shape: { type: 'Bpmn', bpmnShape: 'Activity', activity: { activity: 'Task' } } },
    { id: 'Activity_None', shape: { type: 'Bpmn', bpmnShape: 'Activity', activity: { activity: 'None' } } },
    { id: 'Activity_SubProcess', shape: { type: 'Bpmn', bpmnShape: 'Activity', activity: { activity: 'SubProcess' } } },
    { id: 'Group', shape: { type: 'Bpmn', bpmnShape: 'Group' } },
    { id: 'TextAnnotation', shape: { type: 'Bpmn', bpmnShape: 'TextAnnotation' } },
  ];
  return (
    <Row gutter={16}>
      <Col className="gutter-row" span={6}>
        <SymbolPaletteComponent id="symbolpalette" expandMode="Multiple" palettes={[
          {
            id: 'Bpmn',
            expanded: true,
            symbols: shapes,
            title: 'Bpmn Shapes',
          },
          {
            id: 'connectors',
            expanded: true,
            symbols: connectors,
            title: 'Connectors',
          },
        ]}
          enableAnimation={true}
          width={'100%'}
          height={window.innerHeight - 160}
          symbolHeight={60}
          symbolWidth={60}
          symbolMargin={{ left: 15, right: 15, top: 15, bottom: 15 }}
          getSymbolInfo={() => {
            return { fit: true };
          }}><Inject services={[BpmnDiagrams, UndoRedo, DiagramContextMenu, DataBinding]} />
        </SymbolPaletteComponent>
      </Col>
      <Col className="gutter-row" span={18} style={{ padding: 0 }}>
        <DiagramComponent id="diagram" width={'100%'} height={window.innerHeight - 160}><Inject services={[BpmnDiagrams, UndoRedo, DiagramContextMenu, DataBinding]} />
        </DiagramComponent>
      </Col>
    </Row>
  );
};