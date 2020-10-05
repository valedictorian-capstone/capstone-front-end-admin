import { IBaseProps } from '@extras/interfaces';
import { useLoadingAction } from '@stores/actions';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FormListComponent } from '../../components';
import './form-main.component.css';
export interface IFormMainComponentProps extends IBaseProps {
  input: {};
  output: {};
}

export const FormMainComponent: React.FC<IFormMainComponentProps> = (props: IFormMainComponentProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  return <FormListComponent fatherProps={props} input={{}} output={{
    onSelectItem: (form) => {
      dispatch(useLoadingAction().showLoader());
      setTimeout(() => {
        history.push(`form/${form.id}`);
        dispatch(useLoadingAction().hideLoader());
      }, 500);
    },
  }} />;
};