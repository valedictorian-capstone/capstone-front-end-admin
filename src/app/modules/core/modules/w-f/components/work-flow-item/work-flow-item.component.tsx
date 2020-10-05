import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { RootState } from '@stores/states';
import { Tooltip } from 'antd';
import React from 'react';
import { DragSourceMonitor, useDrag } from 'react-dnd';
import { useSelector } from 'react-redux';
import './work-flow-item.component.css';
import { NodeModel, ConnectorModel, SymbolPaletteComponent, BpmnDiagrams, DataBinding, DiagramContextMenu, Inject, UndoRedo } from '@syncfusion/ej2-react-diagrams';
export interface IWorkFlowItemComponentProps extends IBaseProps {
  input: {
    item: NodeModel | ConnectorModel,
    index: number,
    disabled?: boolean,
  };
  output: {
  };
}

export const WorkFlowItemComponent: React.FC<IWorkFlowItemComponentProps> = (props: IWorkFlowItemComponentProps) => {
  console.log(props);
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const config = environment.i18n.data.core.modules['work-flow'].components['work-flow-item'][region];
  return <Tooltip placement="top" title={config.tooltip}>
    <div className="box-item">
      <SymbolPaletteComponent expandMode="Single" palettes={[
        {
          id: props.input.index + '',
          expanded: true,
          symbols: [props.input.item],
        },
      ]}
        enableAnimation={true}
        width={'100%'}
        height={'100%'}
        symbolHeight={10}
        symbolWidth={10}
        symbolMargin={{ left: 0, right: 0, top: 0, bottom: 0 }}
        getSymbolInfo={() => {
          return { fit: true };
        }}><Inject services={[BpmnDiagrams, UndoRedo, DiagramContextMenu, DataBinding]} />
      </SymbolPaletteComponent>
      Node
    </div>
  </Tooltip>;
};