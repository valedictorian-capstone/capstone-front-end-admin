import { IBaseProps } from '@extras/interfaces';
import { useLoadingAction, useFormGroupAction } from '@stores/actions';
import { RootState } from '@stores/states';
import { FormGroupVM } from '@view-models';
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { FormViewComponent } from '../../components';
import './form-editable.component.css';
export interface IFormEditableComponentProps extends IBaseProps {
  input: {};
  output: {};
}

export const FormEditableComponent: React.FC<IFormEditableComponentProps> = (props: IFormEditableComponentProps) => {
  const arr = useSelector<RootState, FormGroupVM[]>((state) => state.formGroup.arr);
  const { id } = useParams<{ id: string }>();
  const [form, setForm] = React.useState<FormGroupVM>(arr.find((e) => e.id === id) as FormGroupVM);
  const dispatch = useDispatch();
  const history = useHistory();
  React.useEffect(() => {
    if (arr.length === 0) {
      dispatch(useFormGroupAction().getAll());
    }
  }, []);
  React.useEffect(() => {
    const data = arr.find((e) => e.id === id) as FormGroupVM;
    setForm(data);
  }, [arr]);
  return (<DndProvider backend={HTML5Backend}>
    {form && <FormViewComponent fatherProps={props} input={{ data: form }} output={{
      back: () => {
        dispatch(useLoadingAction().showLoader());
        setTimeout(() => {
          history.goBack();
          dispatch(useLoadingAction().hideLoader());
        }, 500);
      },
    }} />}
  </DndProvider>);
};