import { CustomerExtraInformationCM, CustomerExtraInformationUM, CustomerExtraInformationVM } from '@view-models';
import { ActionCreatorsMapObject } from 'redux';
import { CustomerExtraInformation } from '@stores/models';
import { CUSTOMER_EXTRA_INFORMATION_TYPE } from '@stores/types';

export const useCustomerExtraInformationAction = (): ActionCreatorsMapObject<CustomerExtraInformation> => {
  const reset = (): CustomerExtraInformation => {
    return new CustomerExtraInformation({ type: CUSTOMER_EXTRA_INFORMATION_TYPE.RESET.FETCH, payload: { data: CUSTOMER_EXTRA_INFORMATION_TYPE.RESET.FETCH } });
  };
  const getAll = (): CustomerExtraInformation => {
    return new CustomerExtraInformation({ type: CUSTOMER_EXTRA_INFORMATION_TYPE.GETALL.FETCH, payload: { data: CUSTOMER_EXTRA_INFORMATION_TYPE.GETALL.FETCH } });
  };
  const getAllSuccess = (data: CustomerExtraInformationVM[]): CustomerExtraInformation => {
    return new CustomerExtraInformation({ type: CUSTOMER_EXTRA_INFORMATION_TYPE.GETALL.SUCCESS, payload: { data } });
  };
  const getAllError = (error: any): CustomerExtraInformation => {
    console.log(error.response);
    return new CustomerExtraInformation({ type: CUSTOMER_EXTRA_INFORMATION_TYPE.GETALL.ERROR, payload: { data: CUSTOMER_EXTRA_INFORMATION_TYPE.GETALL.ERROR } });
  };
  const create = (data: CustomerExtraInformationCM): CustomerExtraInformation => {
    return new CustomerExtraInformation({ type: CUSTOMER_EXTRA_INFORMATION_TYPE.CREATE.FETCH, payload: { data } });
  };
  const createSuccess = (data: CustomerExtraInformationVM): CustomerExtraInformation => {
    return new CustomerExtraInformation({ type: CUSTOMER_EXTRA_INFORMATION_TYPE.CREATE.SUCCESS, payload: { data } });
  };
  const createError = (error: any): CustomerExtraInformation => {
    console.log(error);
    return new CustomerExtraInformation({ type: CUSTOMER_EXTRA_INFORMATION_TYPE.CREATE.ERROR, payload: { data: CUSTOMER_EXTRA_INFORMATION_TYPE.CREATE.ERROR } });
  };
  const update = (data: CustomerExtraInformationUM): CustomerExtraInformation => {
    return new CustomerExtraInformation({ type: CUSTOMER_EXTRA_INFORMATION_TYPE.UPDATE.FETCH, payload: { data } });
  };
  const updateSuccess = (data: CustomerExtraInformationVM): CustomerExtraInformation => {
    return new CustomerExtraInformation({ type: CUSTOMER_EXTRA_INFORMATION_TYPE.UPDATE.SUCCESS, payload: { data } });
  };
  const updateError = (error: any): CustomerExtraInformation => {
    return new CustomerExtraInformation({ type: CUSTOMER_EXTRA_INFORMATION_TYPE.UPDATE.ERROR, payload: { data: CUSTOMER_EXTRA_INFORMATION_TYPE.UPDATE.ERROR} });
  };
  const remove = (data: string): CustomerExtraInformation => {
    return new CustomerExtraInformation({ type: CUSTOMER_EXTRA_INFORMATION_TYPE.REMOVE.FETCH, payload: { data } });
  };
  const removeSuccess = (data: string): CustomerExtraInformation => {
    return new CustomerExtraInformation({ type: CUSTOMER_EXTRA_INFORMATION_TYPE.REMOVE.SUCCESS, payload: { data } });
  };
  const removeError = (error: any): CustomerExtraInformation => {
    return new CustomerExtraInformation({ type: CUSTOMER_EXTRA_INFORMATION_TYPE.REMOVE.ERROR, payload: {data: CUSTOMER_EXTRA_INFORMATION_TYPE.REMOVE.ERROR} });
  };
  const actions: ActionCreatorsMapObject<CustomerExtraInformation> = {
    reset,
    getAll,
    getAllSuccess,
    getAllError,
    create,
    createSuccess,
    createError,
    update,
    updateSuccess,
    updateError,
    remove,
    removeSuccess,
    removeError,
  };
  return actions;
};