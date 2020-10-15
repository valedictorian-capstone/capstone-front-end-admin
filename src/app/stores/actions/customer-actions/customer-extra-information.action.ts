import { CustomerExtraInformationCM, CustomerExtraInformationUM, CustomerExtraInformationVM } from '@view-models';
import { ActionCreatorsMapObject } from 'redux';
import { CustomerExtraInformation } from '@stores/models';
import { CUSTOMER_EXTRA_INFORMATION_TYPE } from '@stores/types';

export const useCustomerExtraInformationAction = (): ActionCreatorsMapObject<CustomerExtraInformation> => {
  const reset = (): CustomerExtraInformation => {
    return { type: CUSTOMER_EXTRA_INFORMATION_TYPE.RESET.FETCH, payload: { data: CUSTOMER_EXTRA_INFORMATION_TYPE.RESET.FETCH } };
  };
  const getAll = (onSuccess?: (data: any) => void, onError?: (err: any) => void): CustomerExtraInformation => {
    return { type: CUSTOMER_EXTRA_INFORMATION_TYPE.GETALL.FETCH, payload: { data: CUSTOMER_EXTRA_INFORMATION_TYPE.GETALL.FETCH }, onSuccess, onError };
  };
  const getAllSuccess = (data: CustomerExtraInformationVM[], onSuccess?: (data: CustomerExtraInformationVM[]) => void): CustomerExtraInformation => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: CUSTOMER_EXTRA_INFORMATION_TYPE.GETALL.SUCCESS, payload: { data } };
  };
  const getAllError = (onError?: () => void): CustomerExtraInformation => {
    if (onError) {
      onError();
    }
    return { type: CUSTOMER_EXTRA_INFORMATION_TYPE.GETALL.ERROR, payload: { data: CUSTOMER_EXTRA_INFORMATION_TYPE.GETALL.ERROR } };
  };
  const create = (data: CustomerExtraInformationCM, onSuccess?: (data: any) => void, onError?: (err: any) => void): CustomerExtraInformation => {
    return { type: CUSTOMER_EXTRA_INFORMATION_TYPE.CREATE.FETCH, payload: { data }, onSuccess, onError };
  };
  const createSuccess = (data: CustomerExtraInformationVM, onSuccess?: (data: CustomerExtraInformationVM) => void): CustomerExtraInformation => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: CUSTOMER_EXTRA_INFORMATION_TYPE.CREATE.SUCCESS, payload: { data } };
  };
  const createError = (onError?: () => void): CustomerExtraInformation => {
    if (onError) {
      onError();
    }
    return { type: CUSTOMER_EXTRA_INFORMATION_TYPE.CREATE.ERROR, payload: { data: CUSTOMER_EXTRA_INFORMATION_TYPE.CREATE.ERROR } };
  };
  const update = (data: CustomerExtraInformationUM[], onSuccess?: (data: any) => void, onError?: (err: any) => void): CustomerExtraInformation => {
    return { type: CUSTOMER_EXTRA_INFORMATION_TYPE.UPDATE.FETCH, payload: { data }, onSuccess, onError };
  };
  const updateSuccess = (data: CustomerExtraInformationVM, onSuccess?: (data: CustomerExtraInformationVM) => void): CustomerExtraInformation => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: CUSTOMER_EXTRA_INFORMATION_TYPE.UPDATE.SUCCESS, payload: { data } };
  };
  const updateError = (onError?: () => void): CustomerExtraInformation => {
    if (onError) {
      onError();
    }
    return { type: CUSTOMER_EXTRA_INFORMATION_TYPE.UPDATE.ERROR, payload: { data: CUSTOMER_EXTRA_INFORMATION_TYPE.UPDATE.ERROR } };
  };
  const remove = (data: string, onSuccess?: (data: any) => void, onError?: (err: any) => void): CustomerExtraInformation => {
    return { type: CUSTOMER_EXTRA_INFORMATION_TYPE.REMOVE.FETCH, payload: { data }, onSuccess, onError };
  };
  const removeSuccess = (data: string, onSuccess?: (data: string) => void): CustomerExtraInformation => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: CUSTOMER_EXTRA_INFORMATION_TYPE.REMOVE.SUCCESS, payload: { data } };
  };
  const removeError = (onError?: () => void): CustomerExtraInformation => {
    if (onError) {
      onError();
    }
    return { type: CUSTOMER_EXTRA_INFORMATION_TYPE.REMOVE.ERROR, payload: { data: CUSTOMER_EXTRA_INFORMATION_TYPE.REMOVE.ERROR } };
  };
  const active = (data: string[], onSuccess?: (data: any) => void, onError?: (err: any) => void): CustomerExtraInformation => {
    return { type: CUSTOMER_EXTRA_INFORMATION_TYPE.ACTIVE.FETCH, payload: { data }, onSuccess, onError };
  };
  const activeSuccess = (data: string[], onSuccess?: (data: string[]) => void): CustomerExtraInformation => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: CUSTOMER_EXTRA_INFORMATION_TYPE.ACTIVE.SUCCESS, payload: { data } };
  };
  const activeError = (onError?: () => void): CustomerExtraInformation => {
    if (onError) {
      onError();
    }
    return { type: CUSTOMER_EXTRA_INFORMATION_TYPE.ACTIVE.ERROR, payload: { data: CUSTOMER_EXTRA_INFORMATION_TYPE.ACTIVE.ERROR } };
  };
  const deactive = (data: string[], onSuccess?: (data: any) => void, onError?: (err: any) => void): CustomerExtraInformation => {
    return { type: CUSTOMER_EXTRA_INFORMATION_TYPE.DEACTIVE.FETCH, payload: { data }, onSuccess, onError };
  };
  const deactiveSuccess = (data: string[], onSuccess?: (data: string[]) => void): CustomerExtraInformation => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: CUSTOMER_EXTRA_INFORMATION_TYPE.DEACTIVE.SUCCESS, payload: { data } };
  };
  const deactiveError = (onError?: () => void): CustomerExtraInformation => {
    if (onError) {
      onError();
    }
    return { type: CUSTOMER_EXTRA_INFORMATION_TYPE.DEACTIVE.ERROR, payload: { data: CUSTOMER_EXTRA_INFORMATION_TYPE.DEACTIVE.ERROR } };
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
    active,
    activeSuccess,
    activeError,
    deactive,
    deactiveSuccess,
    deactiveError,
  };
  return actions;
};