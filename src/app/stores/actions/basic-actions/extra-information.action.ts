import { ExtraInformationCM, ExtraInformationUM, ExtraInformationVM } from '@view-models';
import { ActionCreatorsMapObject } from 'redux';
import { ExtraInformation } from '@stores/models';
import { EXTRA_INFORMATION_TYPE } from '@stores/types';

export const useExtraInformationAction = (): ActionCreatorsMapObject<ExtraInformation> => {
  const reset = (): ExtraInformation => {
    return { type: EXTRA_INFORMATION_TYPE.RESET.FETCH, payload: { data: EXTRA_INFORMATION_TYPE.RESET.FETCH } };
  };
  const getAll = (state: 'customer' | 'account' | 'product', onSuccess?: (data: any) => void, onError?: (err: any) => void): ExtraInformation => {
    return { type: EXTRA_INFORMATION_TYPE.GETALL.FETCH, payload: { data: state }, onSuccess, onError };
  };
  const getAllSuccess = (data: ExtraInformationVM[], onSuccess?: (data: ExtraInformationVM[]) => void): ExtraInformation => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: EXTRA_INFORMATION_TYPE.GETALL.SUCCESS, payload: { data } };
  };
  const getAllError = (onError?: () => void): ExtraInformation => {
    if (onError) {
      onError();
    }
    return { type: EXTRA_INFORMATION_TYPE.GETALL.ERROR, payload: { data: EXTRA_INFORMATION_TYPE.GETALL.ERROR } };
  };
  const create = (data: ExtraInformationCM, onSuccess?: (data: any) => void, onError?: (err: any) => void): ExtraInformation => {
    return { type: EXTRA_INFORMATION_TYPE.CREATE.FETCH, payload: { data }, onSuccess, onError };
  };
  const createSuccess = (data: ExtraInformationVM, onSuccess?: (data: ExtraInformationVM) => void): ExtraInformation => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: EXTRA_INFORMATION_TYPE.CREATE.SUCCESS, payload: { data } };
  };
  const createError = (onError?: () => void): ExtraInformation => {
    if (onError) {
      onError();
    }
    return { type: EXTRA_INFORMATION_TYPE.CREATE.ERROR, payload: { data: EXTRA_INFORMATION_TYPE.CREATE.ERROR } };
  };
  const update = (data: ExtraInformationUM[], onSuccess?: (data: any) => void, onError?: (err: any) => void): ExtraInformation => {
    return { type: EXTRA_INFORMATION_TYPE.UPDATE.FETCH, payload: { data }, onSuccess, onError };
  };
  const updateSuccess = (data: ExtraInformationVM, onSuccess?: (data: ExtraInformationVM) => void): ExtraInformation => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: EXTRA_INFORMATION_TYPE.UPDATE.SUCCESS, payload: { data } };
  };
  const updateError = (onError?: () => void): ExtraInformation => {
    if (onError) {
      onError();
    }
    return { type: EXTRA_INFORMATION_TYPE.UPDATE.ERROR, payload: { data: EXTRA_INFORMATION_TYPE.UPDATE.ERROR } };
  };
  const remove = (data: string, onSuccess?: (data: any) => void, onError?: (err: any) => void): ExtraInformation => {
    return { type: EXTRA_INFORMATION_TYPE.REMOVE.FETCH, payload: { data }, onSuccess, onError };
  };
  const removeSuccess = (data: string, onSuccess?: (data: string) => void): ExtraInformation => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: EXTRA_INFORMATION_TYPE.REMOVE.SUCCESS, payload: { data } };
  };
  const removeError = (onError?: () => void): ExtraInformation => {
    if (onError) {
      onError();
    }
    return { type: EXTRA_INFORMATION_TYPE.REMOVE.ERROR, payload: { data: EXTRA_INFORMATION_TYPE.REMOVE.ERROR } };
  };
  const active = (data: string[], onSuccess?: (data: any) => void, onError?: (err: any) => void): ExtraInformation => {
    return { type: EXTRA_INFORMATION_TYPE.ACTIVE.FETCH, payload: { data }, onSuccess, onError };
  };
  const activeSuccess = (data: string[], onSuccess?: (data: string[]) => void): ExtraInformation => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: EXTRA_INFORMATION_TYPE.ACTIVE.SUCCESS, payload: { data } };
  };
  const activeError = (onError?: () => void): ExtraInformation => {
    if (onError) {
      onError();
    }
    return { type: EXTRA_INFORMATION_TYPE.ACTIVE.ERROR, payload: { data: EXTRA_INFORMATION_TYPE.ACTIVE.ERROR } };
  };
  const deactive = (data: string[], onSuccess?: (data: any) => void, onError?: (err: any) => void): ExtraInformation => {
    return { type: EXTRA_INFORMATION_TYPE.DEACTIVE.FETCH, payload: { data }, onSuccess, onError };
  };
  const deactiveSuccess = (data: string[], onSuccess?: (data: string[]) => void): ExtraInformation => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: EXTRA_INFORMATION_TYPE.DEACTIVE.SUCCESS, payload: { data } };
  };
  const deactiveError = (onError?: () => void): ExtraInformation => {
    if (onError) {
      onError();
    }
    return { type: EXTRA_INFORMATION_TYPE.DEACTIVE.ERROR, payload: { data: EXTRA_INFORMATION_TYPE.DEACTIVE.ERROR } };
  };
  const actions: ActionCreatorsMapObject<ExtraInformation> = {
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