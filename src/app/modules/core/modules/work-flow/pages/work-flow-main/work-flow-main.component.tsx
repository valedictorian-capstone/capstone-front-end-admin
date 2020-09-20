import {
  BpmnDiagrams, ConnectorModel, DataBinding, DiagramComponent, DiagramContextMenu, Inject, NodeModel, PointPortModel, PortVisibility, SymbolPaletteComponent,
  UndoRedo,
} from '@syncfusion/ej2-react-diagrams';
import { Col, Row } from 'antd';
import React from 'react';
import './work-flow-main.component.scss';
export const WorkFlowMainComponent = (props: {}) => {
  let diagramInstance: DiagramComponent | any = new DiagramComponent({});
  const getPorts = (id: string): PointPortModel[] => {
    return [
      {
        id: id + 'port1',
        shape: 'Circle',
        offset: { x: 0, y: 0 },
        height: 8,
        width: 8,
        visibility: PortVisibility.Visible,
      },
      {
        id: id + 'port2',
        shape: 'Circle',
        offset: { x: 0, y: 0.25 },
        height: 8,
        width: 8,
        visibility: PortVisibility.Visible,
      },
      {
        id: id + 'port3',
        shape: 'Circle',
        offset: { x: 0, y: 0.5 },
        height: 8,
        width: 8,
        visibility: PortVisibility.Visible,
      },
      {
        id: id + 'port4',
        shape: 'Circle',
        offset: { x: 0, y: 0.75 },
        height: 8,
        width: 8,
        visibility: PortVisibility.Visible,
      },
      {
        id: id + 'port5',
        shape: 'Circle',
        offset: { x: 0, y: 1 },
        height: 8,
        width: 8,
        visibility: PortVisibility.Visible,
      },
      {
        id: id + 'port6',
        shape: 'Circle',
        offset: { x: 0.25, y: 0 },
        height: 8,
        width: 8,
        visibility: PortVisibility.Visible,
      },
      {
        id: id + 'port7',
        shape: 'Circle',
        offset: { x: 0.5, y: 0 },
        height: 8,
        width: 8,
        visibility: PortVisibility.Visible,
      },
      {
        id: id + 'port9',
        shape: 'Circle',
        offset: { x: 0.75, y: 0 },
        height: 8,
        width: 8,
        visibility: PortVisibility.Visible,
      },
      {
        id: id + 'port0',
        shape: 'Circle',
        offset: { x: 1, y: 0 },
        height: 8,
        width: 8,
        visibility: PortVisibility.Visible,
      },
      {
        id: id + 'port10',
        shape: 'Circle',
        offset: { x: 1, y: 0.25 },
        height: 8,
        width: 8,
        visibility: PortVisibility.Visible,
      },
      {
        id: id + 'port11',
        shape: 'Circle',
        offset: { x: 1, y: 0.5 },
        height: 8,
        width: 8,
        visibility: PortVisibility.Visible,
      },
      {
        id: id + 'port12',
        shape: 'Circle',
        offset: { x: 1, y: 0.75 },
        height: 8,
        width: 8,
        visibility: PortVisibility.Visible,
      },
      {
        id: id + 'port13',
        shape: 'Circle',
        offset: { x: 1, y: 1 },
        height: 8,
        width: 8,
        visibility: PortVisibility.Visible,
      },
      {
        id: id + 'port14',
        shape: 'Circle',
        offset: { x: 0.25, y: 1 },
        height: 8,
        width: 8,
        visibility: PortVisibility.Visible,
      },
      {
        id: id + 'port15',
        shape: 'Circle',
        offset: { x: 0.5, y: 1 },
        height: 8,
        width: 8,
        visibility: PortVisibility.Visible,
      },
      {
        id: id + 'port16',
        shape: 'Circle',
        offset: { x: 0.75, y: 1 },
        height: 8,
        width: 8,
        visibility: PortVisibility.Visible,
      },
    ];
  };
  const connectors: ConnectorModel[] = [
    {
      id: 'Sequen_Flow_Normal',
      type: 'Orthogonal',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 40, y: 40 },
      targetDecorator: { shape: 'Arrow' },
      style: { strokeWidth: 2, strokeDashArray: '5.5' },
      shape: { bpmnFlow: 'Sequence', sequence: 'Normal' },
    },
    {
      id: 'Sequen_Flow_Conditional',
      type: 'Orthogonal',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 40, y: 40 },
      targetDecorator: { shape: 'Arrow' },
      sourceDecorator: { shape: 'Diamond' },
      style: { strokeWidth: 2, strokeDashArray: '5.5' },
      shape: { bpmnFlow: 'Sequence', sequence: 'Conditional' },
    },
    {
      id: 'Association_BiDirectional',
      type: 'Orthogonal',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 40, y: 40 },
      targetDecorator: { shape: 'IndentedArrow' },
      sourceDecorator: { shape: 'OutdentedArrow' },
      style: { strokeWidth: 2, strokeDashArray: '5.5' },
      shape: { bpmnFlow: 'Association', association: 'BiDirectional' },
    },
    {
      id: 'Association_Directional',
      type: 'Orthogonal',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 40, y: 40 },
      targetDecorator: { shape: 'IndentedArrow' },
      sourceDecorator: { shape: 'None' },
      style: { strokeWidth: 2, strokeDashArray: '5.5' },
      shape: { bpmnFlow: 'Association', association: 'Directional' },
    },
    {
      id: 'Association_Default',
      type: 'Orthogonal',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 40, y: 40 },
      targetDecorator: { shape: 'None' },
      sourceDecorator: { shape: 'None' },
      style: { strokeWidth: 2, strokeDashArray: '5.5' },
      shape: { bpmnFlow: 'Association', association: 'Default' },
    },
    {
      id: 'Message_Flow_Default',
      type: 'Orthogonal',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 40, y: 40 },
      targetDecorator: { shape: 'OpenArrow' },
      sourceDecorator: { shape: 'Circle' },
      style: { strokeWidth: 2, strokeDashArray: '5.5' },
      shape: { bpmnFlow: 'Message', message: 'Default' },
    },
    {
      id: 'Message_Flow_InitiatingMessage',
      type: 'Orthogonal',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 40, y: 40 },
      targetDecorator: { shape: 'OpenArrow' },
      sourceDecorator: { shape: 'Circle' },
      style: { strokeWidth: 2, strokeDashArray: '5.5' },
      shape: { bpmnFlow: 'Message', message: 'InitiatingMessage' },
    },
  ];
  const events: NodeModel[] = [
    { id: 'Start', ports: getPorts('Start'), width: 100, height: 100, shape: { type: 'Bpmn', shape: 'Event', event: { event: 'Start' } }, annotations: [{ content: 'Start' }] },
    { id: 'Intermediate', ports: getPorts('Intermediate'), width: 100, height: 100, shape: { type: 'Bpmn', shape: 'Event', event: { event: 'Intermediate' } }, annotations: [{ content: 'Intermediate' }] },
    { id: 'NonInterruptingIntermediate', ports: getPorts('NonInterruptingIntermediate'), width: 100, height: 100, shape: { type: 'Bpmn', shape: 'Event', event: { event: 'NonInterruptingIntermediate' } }, annotations: [{ content: 'NonInterruptingIntermediate' }] },
    { id: 'NonInterruptingStart', ports: getPorts('NonInterruptingStart'), width: 100, height: 100, shape: { type: 'Bpmn', shape: 'Event', event: { event: 'NonInterruptingStart' } }, annotations: [{ content: 'NonInterruptingStart' }] },
    { id: 'End', ports: getPorts('End'), width: 100, height: 100, shape: { type: 'Bpmn', shape: 'Event', event: { event: 'End' } }, annotations: [{ content: 'End' }] },
    { id: 'ThrowingIntermediate', ports: getPorts('ThrowingIntermediate'), width: 100, height: 100, shape: { type: 'Bpmn', shape: 'Event', event: { event: 'ThrowingIntermediate' } }, annotations: [{ content: 'ThrowingIntermediate' }] },
  ];
  const gateways: NodeModel[] = [
    { id: 'Complex', ports: getPorts('Complex'), width: 100, height: 100, shape: { type: 'Bpmn', shape: 'Gateway', gateway: { type: 'Complex' } }, annotations: [{ content: 'Complex' }] },
    { id: 'EventBased', ports: getPorts('EventBased'), width: 100, height: 100, shape: { type: 'Bpmn', shape: 'Gateway', gateway: { type: 'EventBased' } }, annotations: [{ content: 'EventBased' }] },
    { id: 'Exclusive', ports: getPorts('Exclusive'), width: 100, height: 100, shape: { type: 'Bpmn', shape: 'Gateway', gateway: { type: 'Exclusive' } }, annotations: [{ content: 'Exclusive' }] },
    { id: 'ExclusiveEventBased', ports: getPorts('ExclusiveEventBased'), width: 100, height: 100, shape: { type: 'Bpmn', shape: 'Gateway', gateway: { type: 'ExclusiveEventBased' } }, annotations: [{ content: 'ExclusiveEventBased' }] },
    { id: 'Inclusive', ports: getPorts('Inclusive'), width: 100, height: 100, shape: { type: 'Bpmn', shape: 'Gateway', gateway: { type: 'Inclusive' } }, annotations: [{ content: 'Inclusive' }] },
    { id: 'None', ports: getPorts('None'), width: 100, height: 100, shape: { type: 'Bpmn', shape: 'Gateway', gateway: { type: 'None' } }, annotations: [{ content: 'None' }] },
    { id: 'Parallel', ports: getPorts('Parallel'), width: 100, height: 100, shape: { type: 'Bpmn', shape: 'Gateway', gateway: { type: 'Parallel' } }, annotations: [{ content: 'Parallel' }] },
    { id: 'ParallelEventBased', ports: getPorts('ParallelEventBased'), width: 100, height: 100, shape: { type: 'Bpmn', shape: 'Gateway', gateway: { type: 'ParallelEventBased' } }, annotations: [{ content: 'ParallelEventBased' }] },
  ];
  const activitys: NodeModel[] = [
    { id: 'Activity_Task', ports: getPorts('Activity_Task'), width: 100, height: 100, shape: { type: 'Bpmn', shape: 'Activity', activity: { activity: 'Task' } }, annotations: [{ content: 'Task Activity' }] },
  ];
  const messages: NodeModel[] = [
    { id: 'Message', ports: getPorts('Message'), width: 100, height: 100, shape: { type: 'Bpmn', shape: 'Message' }, annotations: [{ content: 'Message' }] },
  ];
  const dataobjects: NodeModel[] = [
    { id: 'DataObject_Input', ports: getPorts('DataObject_Input'), width: 100, height: 100, shape: { type: 'Bpmn', shape: 'DataObject', dataObject: { type: 'Input' } }, annotations: [{ content: 'Input DataObject' }] },
    { id: 'DataObject_None', ports: getPorts('DataObject_None'), width: 100, height: 100, shape: { type: 'Bpmn', shape: 'DataObject', dataObject: { type: 'None' } }, annotations: [{ content: 'None DataObject' }] },
    { id: 'DataObject_Output', ports: getPorts('DataObject_Output'), width: 100, height: 100, shape: { type: 'Bpmn', shape: 'DataObject', dataObject: { type: 'Output' } }, annotations: [{ content: 'Output DataObject' }] },
    { id: 'DataSource', ports: getPorts('DataSource'), width: 100, height: 100, shape: { type: 'Bpmn', shape: 'DataSource' }, annotations: [{ content: 'Event' }] },
  ];
  const datasources: NodeModel[] = [
    { id: 'DataSource', ports: getPorts('DataSource'), width: 100, height: 100, shape: { type: 'Bpmn', shape: 'DataSource' }, annotations: [{ content: 'Event' }] },
  ];
  const groups: NodeModel[] = [
    { id: 'Group', ports: getPorts('Group'), width: 100, height: 100, shape: { type: 'Bpmn', shape: 'Group' }, annotations: [{ content: 'Group' }] },
  ];
  const textannotations: NodeModel[] = [
    { id: 'TextAnnotation', ports: getPorts('TextAnnotation'), width: 100, height: 100, shape: { type: 'Bpmn', shape: 'TextAnnotation' }, annotations: [{ content: 'TextAnnotation' }] },
  ];
  return (
    <Row gutter={16}>
      <Col className="gutter-row" span={6}>
        <SymbolPaletteComponent id="symbolpalette" expandMode="Multiple" palettes={[
          {
            id: 'event',
            expanded: true,
            symbols: events,
            title: 'Event Shapes',
          },
          {
            id: 'gateway',
            expanded: true,
            symbols: gateways,
            title: 'Gateway Shapes',
          },
          {
            id: 'activity',
            expanded: true,
            symbols: activitys,
            title: 'Activity Shapes',
          },
          {
            id: 'message',
            expanded: true,
            symbols: messages,
            title: 'Message Shapes',
          },
          {
            id: 'data-object',
            expanded: true,
            symbols: dataobjects,
            title: 'DataObject Shapes',
          },
          {
            id: 'data-source',
            expanded: true,
            symbols: datasources,
            title: 'DataSource Shapes',
          },
          {
            id: 'group',
            expanded: true,
            symbols: groups,
            title: 'Group Shapes',
          },
          {
            id: 'text-annotaion',
            expanded: true,
            symbols: textannotations,
            title: 'Text Annotation Shapes',
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
          style={{ maxHeight: window.innerHeight - 160, overflow: 'auto' }}
          symbolHeight={80}
          symbolWidth={80}
          symbolMargin={{ left: 15, right: 15, top: 15, bottom: 15 }}
          getSymbolInfo={() => {
            return { fit: true };
          }}><Inject services={[BpmnDiagrams, UndoRedo, DiagramContextMenu, DataBinding]} />
        </SymbolPaletteComponent>
      </Col>
      <Col className="gutter-row" span={18} style={{ padding: 0 }}>
        <DiagramComponent ref={diagram => (diagramInstance = diagram)} click={() => {
          console.log('---------------------------------------------------------------------');
          console.log('nodes: ', JSON.parse(diagramInstance.saveDiagram()).nodes);
          console.log('connectors: ', JSON.parse(diagramInstance.saveDiagram()).connectors);
          console.log('diagram: ', JSON.parse(diagramInstance.saveDiagram()));
          console.log('---------------------------------------------------------------------');
          console.log('');
        }} id="diagram" width={'100%'} height={window.innerHeight - 160}><Inject services={[BpmnDiagrams, UndoRedo, DiagramContextMenu, DataBinding]} />
        </DiagramComponent>
      </Col>
    </Row>
  );
};