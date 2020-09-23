import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { RootState } from '@stores/states';
import { DiagramComponent as Diagram } from '@syncfusion/ej2-react-diagrams';
import { WorkFlowVM } from '@view-models';
import { Button, Card, Input } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import './detail.component.css';

export interface IDetailComponentProps extends IBaseProps {
  input?: {
    diagram?: Diagram,
    data?: WorkFlowVM,
  };
  output?: {};
}

export const DetailComponent = (props: IDetailComponentProps) => {
  console.log(props);
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const detail = environment.i18n[region].data['work-flow'].detail;
  return (
    <Card key="detail" title={(
      <span style={{ textAlign: 'center', display: 'block' }}>
        {detail?.title}
      </span>
    )} style={{ height: '100%', background: 'transparent', border: '1px solid rgb(217 217 217' }}>
      {props.input?.diagram && (
        <>
          <Input placeholder={detail.form.basic.code.placeholder} value={props.input?.data ? (props.input?.data as any).code : ''} onChange={(e) => {
            (props.input?.data as any).code = e.target.value;
          }} />
          <div style={{ margin: '16px 0' }} />
          <Input placeholder={detail.form.basic.name.placeholder} value={props.input?.data ? (props.input?.data as any).name : ''} onChange={(e) => {
            (props.input?.data as any).name = e.target.value;
          }} />
          <div style={{ margin: '16px 0' }} />
          <Input.TextArea rows={6} placeholder={detail.form.basic.description.placeholder} value={props.input?.data ? (props.input?.data as any).description : ''} onChange={(e) => {
            (props.input?.data as any).description = e.target.value;
          }} />
          <div style={{ margin: '16px 0', textAlign: 'center' }}>
            <Button type="primary" shape="round" style={{ marginRight: 10 }}>{detail.form.basic.button.save}</Button>
            {props.input.data?.isDraft && <Button type="primary" shape="round">{detail.form.basic.button.draft}</Button>}
          </div>

        </>
      )}
    </Card>
  );
};