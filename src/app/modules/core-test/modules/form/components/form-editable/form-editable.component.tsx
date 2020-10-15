import React from 'react';
import { IBaseProps } from '@extras/interfaces';
import './form-editable.component.css';
import { FormControlVM, FormGroupVM } from '@view-models';
import { Col, Form, Row } from 'antd';
import { useDrop } from 'react-dnd';
import { uuid } from 'uuidv4';
import update from 'immutability-helper';
import { FormControlSettingComponent } from '@extras/components';

export interface IFormEditableComponentProps extends IBaseProps {
  input: {
    controls: FormControlVM[],
  };
  output: {
    onEdit: (data: boolean) => void,
    onDone: (formControls: FormControlVM[], formControlRemove: string[]) => void,
  };
}

interface DragItem {
  index: number;
  id: string;
  type: string;
  item: FormControlVM;
}

export const FormEditableComponent: React.FC<IFormEditableComponentProps> = (props: IFormEditableComponentProps) => {
  const [formControls, setFormControls] = React.useState<FormControlVM[]>(props.input.controls.sort((a, b) => a.position - b.position));
  const [formControlRemove, setFormControlRemove] = React.useState<string[]>([]);
  const [active, setActive] = React.useState<number>(-1);
  const [, drop] = useDrop({
    accept: ['control', 'new-control'],
    drop(data: DragItem) {
      console.log(data);
      if (formControls.findIndex((e) => e.id === data.item.id) === -1) {
        setFormControls([
          ...formControls,
          {
            ...data.item,
            id: uuid(),
            position: formControls.length + 1,
          },
        ]);
      }
      return undefined;
    },
  });
  const moveControl = React.useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragCard = formControls[dragIndex];
      setFormControls(
        update(formControls, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        }).map((e, i) => ({ ...e, position: i + 1 })).sort((a, b) => a.position - b.position),
      );
    },
    [formControls],
  );
  React.useEffect(() => {
    props.output.onEdit(active !== -1);
  }, [active]);
  React.useEffect(() => {
    props.output.onDone(formControls, formControlRemove);
  }, [formControls, formControlRemove]);

  return (
    <div className="ant-form ant-form-horizontal form-editable" style={{ width: '100%', height: '100%' }}>
      <Row ref={drop} style={{ width: '100%', height: formControls.length > 3 ? ((formControls.length * 30) + 100 + '%') : '100%', alignContent: 'baseline' }}>
        {formControls.map((item, index) => (
          <FormControlSettingComponent key={item.id + '-editable'} input={{ index, item, canEdit: active === index, active }} output={{
            moveControl,
            onCancel: () => setActive(-1),
            onEdit: () => setActive(index),
            onRemove: () => {
              setFormControls(formControls.filter((formControl) => formControl.id !== item.id));
              if (props.input.controls.find((formControl) => formControl.id === item.id)) {
                setFormControlRemove([...formControlRemove, item.id]);
              }
            },
            onDone: (data) => {
              console.log(data);
              formControls[index] = data as FormControlVM;
              setFormControls([...formControls]);
              setActive(-1);
            },
          }} />
        ))}
      </Row>
    </div>
  );
};