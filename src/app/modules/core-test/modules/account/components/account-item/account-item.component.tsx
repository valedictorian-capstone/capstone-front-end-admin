import { environment } from '@environments/environment';
import { IBaseProps } from '@extras/interfaces';
import { RootState } from '@stores/states';
import { ExtraInformationCM, ExtraInformationUM } from '@view-models';
import { Tooltip } from 'antd';
import React, { useRef } from 'react';
import { DragSourceMonitor, useDrag } from 'react-dnd';
import { useSelector } from 'react-redux';
import { controls } from 'src/assets/forms/controls';
import './account-item.component.css';
export interface IAccountItemComponentProps extends IBaseProps {
  input: {
    item: ExtraInformationUM | ExtraInformationCM,
    index: number,
    disabled?: boolean,
  };
  output: {
  };
}

export const AccountItemComponent: React.FC<IAccountItemComponentProps> = (props: IAccountItemComponentProps) => {
  const region = useSelector<RootState, 'vi' | 'en' | 'jp'>((state) => state.language.language.region);
  const config = environment.i18n.data.core.modules.account.components['account-item'][region];
  const ref = useRef<any>(null);
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'new-control', item: props.input?.item, index: props.input?.index },
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