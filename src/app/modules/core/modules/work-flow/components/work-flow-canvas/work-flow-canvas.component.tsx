import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { RootState } from '@stores/states';
import { ConnectorModel, NodeModel } from '@syncfusion/ej2-react-diagrams';
import { Card } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import './work-flow-canvas.component.css';

export interface IWorkFlowCanvasComponentProps extends IBaseProps {
  input: {
    control: NodeModel | ConnectorModel,
  };
  output: {
    edit: (control: NodeModel | ConnectorModel) => void,
  };
}

export const WorkFlowCanvasComponent: React.FC<IWorkFlowCanvasComponentProps> = (props: IWorkFlowCanvasComponentProps) => {
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const config = environment.i18n.data.core.modules['work-flow'].components['work-flow-canvas'][region];
  const [control, setControl] = React.useState<NodeModel | ConnectorModel>(props.input.control);
  React.useEffect(() => {
    props.output.edit(control);
  }, [control]);
  return control ? (
    <Card key="canvas" title={(
      <span style={{ textAlign: 'center', display: 'block' }}>
        {config.title}
      </span>
    )} style={{ background: 'transparent', border: '1px solid gray', width: 500 }}>
      <>

      </>
    </Card>
  ) : <></>;
};