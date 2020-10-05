import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { RootState } from '@stores/states';
import { FormControlCM, FormControlUM } from '@view-models';
import { Tooltip } from 'antd';
import React, { useRef } from 'react';
import { DragSourceMonitor, DropTargetMonitor, useDrag, useDrop, XYCoord } from 'react-dnd';
import { useSelector } from 'react-redux';
import { controls } from 'src/assets/forms/controls';
import './form-item.component.css';
export interface IFormItemComponentProps extends IBaseProps {
  input: {
    item: FormControlUM | FormControlCM,
    index: number,
    disabled?: boolean,
    isNew?: boolean,
  };
  output: {
  };
}

export const FormItemComponent: React.FC<IFormItemComponentProps> = (props: IFormItemComponentProps) => {
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const config = environment.i18n.data.core.modules.form.components['form-item'][region];
  const ref = useRef<any>(null);
  const [{ isDragging }, drag] = useDrag({
    item: { type: props.input?.isNew ? 'new-control' : 'control', item: props.input?.item, index: props.input?.index },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  React.useEffect(() => {
  }, [isDragging]);
  drag(ref);
  return (
    <Tooltip placement="top" title={config.tooltip}>
      <div ref={ref} className="box-item">
        <img src={(controls as any)[props.input?.item.type + (props.input?.item.type === 'input' ? ('-' + props.input?.item.subType) : '')]} />
      </div>
    </Tooltip>
  );
};