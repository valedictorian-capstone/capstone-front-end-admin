import { IBaseProps } from '@extras/interfaces';
import { useLoadingAction } from '@stores/actions';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AccountListComponent } from '../../components';
import './account-main.component.css';
export interface IAccountMainComponentProps extends IBaseProps {
  input: {};
  output: {};
}

export const AccountMainComponent: React.FC<IAccountMainComponentProps> = (props: IAccountMainComponentProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  return <AccountListComponent fatherProps={props} input={{}} output={{
    onSetting: () => {
      dispatch(useLoadingAction().showLoader());
      setTimeout(() => {
        history.push(`account/extra`);
        dispatch(useLoadingAction().hideLoader());
      }, 500);
    },
  }} />;
};