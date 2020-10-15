import { FormControlSettingComponent } from '@extras/components';
import { IBaseProps } from '@extras/interfaces';
import { CustomerExtraInformationVM } from '@view-models';
import { Row } from 'antd';
import update from 'immutability-helper';
import React from 'react';
import { useDrop } from 'react-dnd';
import { uuid } from 'uuidv4';
import './customer-editable.component.css';

export interface ICustomerEditableComponentProps extends IBaseProps {
  input: {
    customerExtraInformations: CustomerExtraInformationVM[],
  };
  output: {
    onEdit: (data: boolean) => void,
    onDone: (customerExtraInformations: CustomerExtraInformationVM[]) => void,
  };
}

interface DragItem {
  index: number;
  id: string;
  type: string;
  item: CustomerExtraInformationVM;
}

export const CustomerEditableComponent: React.FC<ICustomerEditableComponentProps> = (props: ICustomerEditableComponentProps) => {
  const [customerExtraInformations, setCustomerExtraInformations] = React.useState<CustomerExtraInformationVM[]>(props.input.customerExtraInformations.sort((a, b) => a.position - b.position));
  const [active, setActive] = React.useState<number>(-1);
  const [, drop] = useDrop({
    accept: ['control', 'new-control'],
    drop(data: DragItem) {
      console.log(data);
      if (customerExtraInformations.findIndex((e) => e.id === data.item.id) === -1) {
        setCustomerExtraInformations([
          ...customerExtraInformations,
          {
            ...data.item,
            id: uuid(),
            position: customerExtraInformations.length + 1,
          },
        ]);
      }
      return undefined;
    },
  });
  const moveControl = React.useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragCard = customerExtraInformations[dragIndex];
      setCustomerExtraInformations(
        update(customerExtraInformations, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        }).map((e, i) => ({ ...e, position: i + 1 })).sort((a, b) => a.position - b.position),
      );
    },
    [customerExtraInformations],
  );
  React.useEffect(() => {
    props.output.onEdit(active !== -1);
  }, [active]);
  React.useEffect(() => {
    props.output.onDone(customerExtraInformations);
  }, [customerExtraInformations]);

  return (
    <div className="ant-form ant-form-horizontal customer-editable" style={{ width: '100%', height: '100%' }}>
      <Row ref={drop} style={{ width: '100%', height: customerExtraInformations.length > 3 ? ((customerExtraInformations.length * 30) + 100 + '%') : '100%', alignContent: 'baseline' }}>
        {customerExtraInformations.map((item, index) => (
          <FormControlSettingComponent key={item.id + '-editable'} input={{ index, item, canEdit: active === index, active, isUseDeactive: true }} output={{
            moveControl,
            onCancel: () => setActive(-1),
            onEdit: () => setActive(index),
            onRemove: () => {
              setCustomerExtraInformations(customerExtraInformations.map((formControl) => formControl.id !== item.id ? formControl : {...formControl, isDelete: !formControl.isDelete}));
            },
            onDone: (data) => {
              console.log(data);
              customerExtraInformations[index] = data as CustomerExtraInformationVM;
              setCustomerExtraInformations([...customerExtraInformations]);
              setActive(-1);
            },
          }} />
        ))}
      </Row>
    </div>
  );
};