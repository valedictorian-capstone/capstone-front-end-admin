import { IBaseProps } from '@extras/interfaces';
import { useLoadingAction } from '@stores/actions';
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AccountViewComponent } from '../../components';
import './account-editable.component.css';
export interface IAccountEditableComponentProps extends IBaseProps {
  input: {};
  output: {};
}

export const AccountEditableComponent: React.FC<IAccountEditableComponentProps> = (props: IAccountEditableComponentProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (<DndProvider backend={HTML5Backend}>
    <AccountViewComponent fatherProps={props} input={{}} output={{
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