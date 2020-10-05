import { IBaseProps } from '@extras/interfaces';
import { useLoadingAction } from '@stores/actions';
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CustomerViewComponent } from '../../components';
import './customer-editable.component.css';
export interface ICustomerEditableComponentProps extends IBaseProps {
  input: {};
  output: {};
}

export const CustomerEditableComponent: React.FC<ICustomerEditableComponentProps> = (props: ICustomerEditableComponentProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (<DndProvider backend={HTML5Backend}>
    <CustomerViewComponent fatherProps={props} input={{}} output={{
      back: () => {
        dispatch(useLoadingAction().showLoader());
        setTimeout(() => {
          history.goBack();
          dispatch(useLoadingAction().hideLoader());
        }, 500);
      },
    }} />
  </DndProvider>);
};