import { IBaseProps } from '@extras/interfaces';
import { useLoadingAction } from '@stores/actions';
import { FormGroupCM, FormGroupUM } from '@view-models';
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch } from 'react-redux';
import { FormListComponent, FormViewComponent } from '../../components';
import './form-main.component.css';
export interface IFormMainComponentProps extends IBaseProps {
  input: {};
  output: {};
}

export const FormMainComponent = (props: IFormMainComponentProps) => {
  const [data, setData] = React.useState<FormGroupCM | FormGroupUM>();
  const [isNew, setIsNew] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  return (<DndProvider backend={HTML5Backend}>
    {!data ?
      <FormListComponent input={{}} output={{
        onSelectItem: (form) => {
          dispatch(useLoadingAction().showLoader());
          setTimeout(() => {
            setIsNew(false);
            setData(form);
            dispatch(useLoadingAction().hideLoader());
          }, 500);
        },
        onCreate: (form) => {
          dispatch(useLoadingAction().showLoader());
          setTimeout(() => {
            setIsNew(true);
            setData(form);
            dispatch(useLoadingAction().hideLoader());
          }, 500);
        },
      }} />
      : <FormViewComponent input={{ data, isNew }} output={{
        back: () => {
          dispatch(useLoadingAction().showLoader());
          setTimeout(() => {
            setData(undefined);
            dispatch(useLoadingAction().hideLoader());
          }, 500);
        },
      }} />}
  </DndProvider>);
};