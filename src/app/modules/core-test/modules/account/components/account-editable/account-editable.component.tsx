import { FormControlSettingComponent } from '@extras/components';
import { IBaseProps } from '@extras/interfaces';
import { ExtraInformationVM } from '@view-models';
import { Row } from 'antd';
import update from 'immutability-helper';
import React from 'react';
import { useDrop } from 'react-dnd';
import { uuid } from 'uuidv4';
import './account-editable.component.css';

export interface IAccountEditableComponentProps extends IBaseProps {
  input: {
    extraInformations: ExtraInformationVM[],
  };
  output: {
    onEdit: (data: boolean) => void,
    onDone: (extraInformations: ExtraInformationVM[]) => void,
  };
}

interface DragItem {
  index: number;
  id: string;
  type: string;
  item: ExtraInformationVM;
}

export const AccountEditableComponent: React.FC<IAccountEditableComponentProps> = (props: IAccountEditableComponentProps) => {
  const [extraInformations, setAccountExtraInformations] = React.useState<ExtraInformationVM[]>(props.input.extraInformations.sort((a, b) => a.position - b.position));
  const [active, setActive] = React.useState<number>(-1);
  const [, drop] = useDrop({
    accept: ['control', 'new-control'],
    drop(data: DragItem) {
      console.log(data);
      if (extraInformations.findIndex((e) => e.id === data.item.id) === -1) {
        setAccountExtraInformations([
          ...extraInformations,
          {
            ...data.item,
            id: uuid(),
            position: extraInformations.length + 1,
            state: 'account',
          },
        ]);
      }
      return undefined;
    },
  });
  const moveControl = React.useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragCard = extraInformations[dragIndex];
      setAccountExtraInformations(
        update(extraInformations, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        }).map((e, i) => ({ ...e, position: i + 1 })).sort((a, b) => a.position - b.position),
      );
    },
    [extraInformations],
  );
  React.useEffect(() => {
    props.output.onEdit(active !== -1);
  }, [active]);
  React.useEffect(() => {
    props.output.onDone(extraInformations);
  }, [extraInformations]);

  return (
    <div className="ant-form ant-form-horizontal account-editable" style={{ width: '100%', height: '100%' }}>
      <Row ref={drop} style={{ width: '100%', height: extraInformations.length > 3 ? ((extraInformations.length * 30) + 100 + '%') : '100%', alignContent: 'baseline' }}>
        {extraInformations.map((item, index) => (
          <FormControlSettingComponent key={item.id + '-editable'} input={{ index, item, canEdit: active === index, active, isUseDeactive: true }} output={{
            moveControl,
            onCancel: () => setActive(-1),
            onEdit: () => setActive(index),
            onRemove: () => {
              if (item.isDelete) {
                setAccountExtraInformations(extraInformations.map((formControl) => formControl.id !== item.id ? formControl : { ...formControl, isDelete: !formControl.isDelete }));
              } else {
                setAccountExtraInformations(extraInformations.filter((formControl) => formControl.id !== item.id));
              }            },
            onDone: (data) => {
              console.log(data);
              extraInformations[index] = data as ExtraInformationVM;
              setAccountExtraInformations([...extraInformations]);
              setActive(-1);
            },
          }} />
        ))}
      </Row>
    </div>
  );
};