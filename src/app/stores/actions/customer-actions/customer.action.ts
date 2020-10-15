import { CustomerCM, CustomerUM, CustomerVM } from '@view-models';
import { ActionCreatorsMapObject } from 'redux';
import { Customer } from '@stores/models';
import { CUSTOMER_TYPE } from '@stores/types';

export const useCustomerAction = (): ActionCreatorsMapObject<Customer> => {
  const reset = (): Customer => {
    return { type: CUSTOMER_TYPE.RESET.FETCH, payload: { data: CUSTOMER_TYPE.RESET.FETCH } };
  };
  const getAll = (onSuccess?: (data: any) => void, onError?: (err: any) => void): Customer => {
    return { type: CUSTOMER_TYPE.GETALL.FETCH, payload: { data: CUSTOMER_TYPE.GETALL.FETCH }, onSuccess, onError };
  };
  const getAllSuccess = (data: CustomerVM[], onSuccess?: (data: CustomerVM[]) => void): Customer => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: CUSTOMER_TYPE.GETALL.SUCCESS, payload: { data } };
  };
  const getAllError = (onError?: () => void): Customer => {
    if (onError) {
      onError();
    }
    return { type: CUSTOMER_TYPE.GETALL.ERROR, payload: { data: CUSTOMER_TYPE.GETALL.ERROR } };
  };
  const create = (data: CustomerCM, onSuccess?: (data: any) => void, onError?: (err: any) => void): Customer => {
    return { type: CUSTOMER_TYPE.CREATE.FETCH, payload: { data }, onSuccess, onError };
  };
  const createSuccess = (data: CustomerVM, onSuccess?: (data: CustomerVM) => void): Customer => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: CUSTOMER_TYPE.CREATE.SUCCESS, payload: { data } };
  };
  const createError = (onError?: () => void): Customer => {
    if (onError) {
      onError();
    }
    return { type: CUSTOMER_TYPE.CREATE.ERROR, payload: { data: CUSTOMER_TYPE.CREATE.ERROR } };
  };
  const update = (data: CustomerUM, onSuccess?: (data: any) => void, onError?: (err: any) => void): Customer => {
    return { type: CUSTOMER_TYPE.UPDATE.FETCH, payload: { data }, onSuccess, onError };
  };
  const updateSuccess = (data: CustomerVM, onSuccess?: (data: CustomerVM) => void): Customer => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: CUSTOMER_TYPE.UPDATE.SUCCESS, payload: { data } };
  };
  const updateError = (onError?: () => void): Customer => {
    if (onError) {
      onError();
    }
    return { type: CUSTOMER_TYPE.UPDATE.ERROR, payload: { data: CUSTOMER_TYPE.UPDATE.ERROR } };
  };
  const remove = (data: string, onSuccess?: (data: any) => void, onError?: (err: any) => void): Customer => {
    return { type: CUSTOMER_TYPE.REMOVE.FETCH, payload: { data }, onSuccess, onError };
  };
  const removeSuccess = (data: string, onSuccess?: (data: string) => void): Customer => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: CUSTOMER_TYPE.REMOVE.SUCCESS, payload: { data } };
  };
  const removeError = (onError?: () => void): Customer => {
    if (onError) {
      onError();
    }
    return { type: CUSTOMER_TYPE.REMOVE.ERROR, payload: { data: CUSTOMER_TYPE.REMOVE.ERROR } };
  };
  const active = (data: string[], onSuccess?: (data: any) => void, onError?: (err: any) => void): Customer => {
    return { type: CUSTOMER_TYPE.ACTIVE.FETCH, payload: { data }, onSuccess, onError };
  };
  const activeSuccess = (data: string[], onSuccess?: (data: string[]) => void): Customer => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: CUSTOMER_TYPE.ACTIVE.SUCCESS, payload: { data } };
  };
  const activeError = (onError?: () => void): Customer => {
    if (onError) {
      onError();
    }
    return { type: CUSTOMER_TYPE.ACTIVE.ERROR, payload: { data: CUSTOMER_TYPE.ACTIVE.ERROR } };
  };
  const deactive = (data: string[], onSuccess?: (data: any) => void, onError?: (err: any) => void): Customer => {
    return { type: CUSTOMER_TYPE.DEACTIVE.FETCH, payload: { data }, onSuccess, onError };
  };
  const deactiveSuccess = (data: string[], onSuccess?: (data: string[]) => void): Customer => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: CUSTOMER_TYPE.DEACTIVE.SUCCESS, payload: { data } };
  };
  const deactiveError = (onError?: () => void): Customer => {
    if (onError) {
      onError();
    }
    return { type: CUSTOMER_TYPE.DEACTIVE.ERROR, payload: { data: CUSTOMER_TYPE.DEACTIVE.ERROR } };
  };
  const actions: ActionCreatorsMapObject<Customer> = {
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