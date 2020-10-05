import { ToolOutlined } from '@ant-design/icons';
import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { RootState } from '@stores/states';
import { BpmnDiagrams, DataBinding, DiagramContextMenu, Inject, SymbolPaletteComponent, UndoRedo } from '@syncfusion/ej2-react-diagrams';
import { Button, Popover, Tabs } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import './work-flow-palette.component.css';

export interface IWorkFlowPaletteComponentProps extends IBaseProps {
  input: {};
  output: {};
}

export const WorkFlowPaletteComponent: React.FC<IWorkFlowPaletteComponentProps> = (props: IWorkFlowPaletteComponentProps) => {
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const config = environment.i18n.data.core.modules['work-flow'].components['work-flow-palette'][region];
  return (
    <Popover
      content={<Tabs defaultActiveKey="1" tabPosition={'left'} style={{ width: '100%' }}>
        {(config.items as any).map((node: any) => (
          <Tabs.TabPane tab={node.label} key={node.key}>
            <SymbolPaletteComponent id={node.key + '-palette'} expandMode="Single" palettes={[
              {
                id: node.key + '-node-palette',
                expanded: true,
                symbols: node.data as any,
              },
            ]}
              enableAnimation={true}
              width={'200px'}
              height={'100%'}
              symbolHeight={80}
              symbolWidth={80}
              symbolMargin={{ left: 15, right: 15, top: 15, bottom: 15 }}
              getSymbolInfo={() => {
                return { fit: true };
              }}><Inject services={[BpmnDiagrams, UndoRedo, DiagramContextMenu, DataBinding]} />
            </SymbolPaletteComponent>
          </Tabs.TabPane>
        ))}
      </Tabs>}
      title={(
        <span style={{ textAlign: 'center', display: 'block' }}>
          <ToolOutlined />
        </span>
      )}
      style={{ width: '100%' }}
      trigger={['click']}
      placement="bottomLeft"
    >
      <Button style={{ float: 'right' }} shape="circle" size="small" className="setting" type="primary" icon={<ToolOutlined />} />
    </Popover>

  );
};