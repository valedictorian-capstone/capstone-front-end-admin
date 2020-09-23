import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { RootState } from '@stores/states';
import { WorkFlowVM } from '@view-models';
import { List } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { uuid } from 'uuidv4';
import { CreateComponent, PaletteComponent, CloseComponent } from '..';
import './work-flow.component.css';

export interface IWorkFlowComponentProps extends IBaseProps {
  input?: {};
  output?: {
    onSelectItem: (data: WorkFlowVM) => void;
  };
}

export const WorkFlowComponent = (props: IWorkFlowComponentProps) => {
  const [edit, setEdit] = React.useState<boolean>(false);
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const arr = useSelector<RootState, WorkFlowVM[]>(state => state.workFlow.arr);
  const config = environment.i18n[region].data['work-flow'];
  return (
    <List
      size="large"
      header={<div style={{ height: '5%', textAlign: 'center' }}>{config?.label}</div>}
      style={{ height: '100%' }}
      footer={(
        <div style={{ textAlign: 'center', height: '10%' }}>
          {!edit && <CreateComponent output={{
            onClick: () => {
              setEdit(true);
              props.output?.onSelectItem({ id: uuid(), isDraft: true } as WorkFlowVM);
            },
          }} />}
          {edit && <PaletteComponent />}
          {edit && <CloseComponent output={{
            onClick: () => {
              setEdit(false);
              props.output?.onSelectItem(undefined as any);
            },
          }} />}
        </div>
      )}
      bordered={true}
      dataSource={arr}
      renderItem={(item: WorkFlowVM) => (
        <List.Item onClick={() => props.output?.onSelectItem(item)}>{item.name}</List.Item>
      )}
    />
  );
};