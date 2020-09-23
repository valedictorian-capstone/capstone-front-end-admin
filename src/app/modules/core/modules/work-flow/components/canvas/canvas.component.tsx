import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { RootState } from '@stores/states';
import { ConnectorModel, NodeModel, SelectorModel } from '@syncfusion/ej2-react-diagrams';
import { Card, Input } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import './canvas.component.css';

export interface ICanvasComponentProps extends IBaseProps {
  input?: {
    control?: NodeModel | ConnectorModel | SelectorModel,
  };
  output?: {};
}

export const CanvasComponent = (props: ICanvasComponentProps) => {
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const canvas = environment.i18n[region].data['work-flow'].canvas;
  console.log(props);
  return props.input?.control ? (
    <Card key="canvas" title={(
      <span style={{ textAlign: 'center', display: 'block' }}>
        {canvas.title[(props.input?.control as any).propName as 'nodes' | 'connectors']}
      </span>
    )} style={{ height: '100%', background: 'transparent', border: '1px solid rgb(217 217 217' }}>
      <>
        {(props.input?.control as any).propName === 'nodes' && <Input placeholder={canvas.form.basic.content.placeholder} value={props.input?.control ? (props.input?.control as any).content : ''} onChange={(e) => {
          (props.input?.control as any).content = e.target.value;
        }} />}
        {(props.input?.control as any).propName === 'nodes' && <div style={{ margin: '24px 0' }} />}
        <Input.TextArea rows={6} placeholder={canvas.form.basic.description.placeholder} value={props.input?.control ? (props.input?.control as any).description : ''} onChange={(e) => {
          (props.input?.control as any).description = e.target.value;
        }} />
      </>
    </Card>
  ) : <></>;
};