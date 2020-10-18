import { AccountCM, AccountUM, AccountVM } from '@view-models';
import { ActionCreatorsMapObject } from 'redux';
import { Account } from '@stores/models';
import { ACCOUNT_TYPE } from '@stores/types';

export const useAccountAction = (): ActionCreatorsMapObject<Account> => {
  const reset = (): Account => {
    return { type: ACCOUNT_TYPE.RESET.FETCH, payload: { data: ACCOUNT_TYPE.RESET.FETCH } };
  };
  const getAll = (onSuccess?: (data: any) => void, onError?: (err: any) => void): Account => {
    return { type: ACCOUNT_TYPE.GETALL.FETCH, payload: { data: ACCOUNT_TYPE.GETALL.FETCH }, onSuccess, onError };
  };
  const getAllSuccess = (data: AccountVM[], onSuccess?: (data: AccountVM[]) => void): Account => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: ACCOUNT_TYPE.GETALL.SUCCESS, payload: { data } };
  };
  const getAllError = (onError?: () => void): Account => {
    if (onError) {
      onError();
    }
    return { type: ACCOUNT_TYPE.GETALL.ERROR, payload: { data: ACCOUNT_TYPE.GETALL.ERROR } };
  };
  const create = (data: AccountCM, onSuccess?: (data: any) => void, onError?: (err: any) => void): Account => {
    return { type: ACCOUNT_TYPE.CREATE.FETCH, payload: { data }, onSuccess, onError };
  };
  const createSuccess = (data: AccountVM, onSuccess?: (data: AccountVM) => void): Account => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: ACCOUNT_TYPE.CREATE.SUCCESS, payload: { data } };
  };
  const createError = (onError?: () => void): Account => {
    if (onError) {
      onError();
    }
    return { type: ACCOUNT_TYPE.CREATE.ERROR, payload: { data: ACCOUNT_TYPE.CREATE.ERROR } };
  };
  const update = (data: AccountUM, onSuccess?: (data: any) => void, onError?: (err: any) => void): Account => {
    return { type: ACCOUNT_TYPE.UPDATE.FETCH, payload: { data }, onSuccess, onError };
  };
  const updateSuccess = (data: AccountVM, onSuccess?: (data: AccountVM) => void): Account => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: ACCOUNT_TYPE.UPDATE.SUCCESS, payload: { data } };
  };
  const updateError = (onError?: () => void): Account => {
    if (onError) {
      onError();
    }
    return { type: ACCOUNT_TYPE.UPDATE.ERROR, payload: { data: ACCOUNT_TYPE.UPDATE.ERROR } };
  };
  const remove = (data: string, onSuccess?: (data: any) => void, onError?: (err: any) => void): Account => {
    return { type: ACCOUNT_TYPE.REMOVE.FETCH, payload: { data }, onSuccess, onError };
  };
  const removeSuccess = (data: string, onSuccess?: (data: string) => void): Account => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: ACCOUNT_TYPE.REMOVE.SUCCESS, payload: { data } };
  };
  const removeError = (onError?: () => void): Account => {
    if (onError) {
      onError();
    }
    return { type: ACCOUNT_TYPE.REMOVE.ERROR, payload: { data: ACCOUNT_TYPE.REMOVE.ERROR } };
  };
  const active = (data: string[], onSuccess?: (data: any) => void, onError?: (err: any) => void): Account => {
    return { type: ACCOUNT_TYPE.ACTIVE.FETCH, payload: { data }, onSuccess, onError };
  };
  const activeSuccess = (data: string[], onSuccess?: (data: string[]) => void): Account => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: ACCOUNT_TYPE.ACTIVE.SUCCESS, payload: { data } };
  };
  const activeError = (onError?: () => void): Account => {
    if (onError) {
      onError();
    }
    return { type: ACCOUNT_TYPE.ACTIVE.ERROR, payload: { data: ACCOUNT_TYPE.ACTIVE.ERROR } };
  };
  const deactive = (data: string[], onSuccess?: (data: any) => void, onError?: (err: any) => void): Account => {
    return { type: ACCOUNT_TYPE.DEACTIVE.FETCH, payload: { data }, onSuccess, onError };
  };
  const deactiveSuccess = (data: string[], onSuccess?: (data: string[]) => void): Account => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: ACCOUNT_TYPE.DEACTIVE.SUCCESS, payload: { data } };
  };
  const deactiveError = (onError?: () => void): Account => {
    if (onError) {
      onError();
    }
    return { type: ACCOUNT_TYPE.DEACTIVE.ERROR, payload: { data: ACCOUNT_TYPE.DEACTIVE.ERROR } };
  };
  const actions: ActionCreatorsMapObject<Account> = {
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