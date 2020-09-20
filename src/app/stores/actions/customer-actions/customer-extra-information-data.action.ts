import { CustomerExtraInformationDataCM, CustomerExtraInformationDataUM, CustomerExtraInformationDataVM } from '@view-models';
import { ActionCreatorsMapObject } from 'redux';
import { CustomerExtraInformationData } from '@stores/models';
import { CUSTOMER_EXTRA_INFORMATION_DATA_TYPE } from '@stores/types';

export const useCustomerExtraInformationDataAction = (): ActionCreatorsMapObject<CustomerExtraInformationData> => {
  const reset = (): CustomerExtraInformationData => {
    return new CustomerExtraInformationData({ type: CUSTOMER_EXTRA_INFORMATION_DATA_TYPE.RESET.FETCH, payload: { data: CUSTOMER_EXTRA_INFORMATION_DATA_TYPE.RESET.FETCH } });
  };
  const getAll = (): CustomerExtraInformationData => {
    return new CustomerExtraInformationData({ type: CUSTOMER_EXTRA_INFORMATION_DATA_TYPE.GETALL.FETCH, payload: { data: CUSTOMER_EXTRA_INFORMATION_DATA_TYPE.GETALL.FETCH } });
  };
  const getAllSuccess = (data: CustomerExtraInformationDataVM[]): CustomerExtraInformationData => {
    return new CustomerExtraInformationData({ type: CUSTOMER_EXTRA_INFORMATION_DATA_TYPE.GETALL.SUCCESS, payload: { data } });
  };
  const getAllError = (error: any): CustomerExtraInformationData => {
    console.log(error.response);
    return new CustomerExtraInformationData({ type: CUSTOMER_EXTRA_INFORMATION_DATA_TYPE.GETALL.ERROR, payload: { data: CUSTOMER_EXTRA_INFORMATION_DATA_TYPE.GETALL.ERROR } });
  };
  const create = (data: CustomerExtraInformationDataCM): CustomerExtraInformationData => {
    return new CustomerExtraInformationData({ type: CUSTOMER_EXTRA_INFORMATION_DATA_TYPE.CREATE.FETCH, payload: { data } });
  };
  const createSuccess = (data: CustomerExtraInformationDataVM): CustomerExtraInformationData => {
    return new CustomerExtraInformationData({ type: CUSTOMER_EXTRA_INFORMATION_DATA_TYPE.CREATE.SUCCESS, payload: { data } });
  };
  const createError = (error: any): CustomerExtraInformationData => {
    console.log(error);
    return new CustomerExtraInformationData({ type: CUSTOMER_EXTRA_INFORMATION_DATA_TYPE.CREATE.ERROR, payload: { data: CUSTOMER_EXTRA_INFORMATION_DATA_TYPE.CREATE.ERROR } });
  };
  const update = (data: CustomerExtraInformationDataUM): CustomerExtraInformationData => {
    return new CustomerExtraInformationData({ type: CUSTOMER_EXTRA_INFORMATION_DATA_TYPE.UPDATE.FETCH, payload: { data } });
  };
  const updateSuccess = (data: CustomerExtraInformationDataVM): CustomerExtraInformationData => {
    return new CustomerExtraInformationData({ type: CUSTOMER_EXTRA_INFORMATION_DATA_TYPE.UPDATE.SUCCESS, payload: { data } });
  };
  const updateError = (error: any): CustomerExtraInformationData => {
    return new CustomerExtraInformationData({ type: CUSTOMER_EXTRA_INFORMATION_DATA_TYPE.UPDATE.ERROR, payload: { data: CUSTOMER_EXTRA_INFORMATION_DATA_TYPE.UPDATE.ERROR} });
  };
  const remove = (data: string): CustomerExtraInformationData => {
    return new CustomerExtraInformationData({ type: CUSTOMER_EXTRA_INFORMATION_DATA_TYPE.REMOVE.FETCH, payload: { data } });
  };
  const removeSuccess = (data: string): CustomerExtraInformationData => {
    return new CustomerExtraInformationData({ type: CUSTOMER_EXTRA_INFORMATION_DATA_TYPE.REMOVE.SUCCESS, payload: { data } });
  };
  const removeError = (error: any): CustomerExtraInformationData => {
    return new CustomerExtraInformationData({ type: CUSTOMER_EXTRA_INFORMATION_DATA_TYPE.REMOVE.ERROR, payload: {data: CUSTOMER_EXTRA_INFORMATION_DATA_TYPE.REMOVE.ERROR} });
  };
  const actions: ActionCreatorsMapObject<CustomerExtraInformationData> = {
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