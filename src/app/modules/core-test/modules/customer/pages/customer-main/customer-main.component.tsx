import { IBaseProps } from '@extras/interfaces';
import { useLoadingAction } from '@stores/actions';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CustomerListComponent } from '../../components';
import './customer-main.component.css';
export interface ICustomerMainComponentProps extends IBaseProps {
  input: {};
  output: {};
}

export const CustomerMainComponent: React.FC<ICustomerMainComponentProps> = (props: ICustomerMainComponentProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  return <CustomerListComponent fatherProps={props} input={{}} output={{
    onSetting: () => {
      dispatch(useLoadingAction().showLoader());
      setTimeout(() => {
        history.push(`customer/extra`);
        dispatch(useLoadingAction().hideLoader());
      }, 500);
    },
  }} />;
};