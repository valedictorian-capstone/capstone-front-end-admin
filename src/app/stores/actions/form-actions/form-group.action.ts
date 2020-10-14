import { FormGroupCM, FormGroupUM, FormGroupVM } from '@view-models';
import { ActionCreatorsMapObject } from 'redux';
import { FormGroup } from '@stores/models';
import { FORM_GROUP_TYPE } from '@stores/types';
import { message } from 'antd';

export const useFormGroupAction = (): ActionCreatorsMapObject<FormGroup> => {
  const reset = (): FormGroup => {
    return { type: FORM_GROUP_TYPE.RESET.FETCH, payload: { data: FORM_GROUP_TYPE.RESET.FETCH } };
  };
  const getAll = (onSuccess?: (data: any) => void, onError?: (err: any) => void): FormGroup => {
    return { type: FORM_GROUP_TYPE.GETALL.FETCH, payload: { data: FORM_GROUP_TYPE.GETALL.FETCH }, onSuccess, onError };
  };
  const getAllSuccess = (data: FormGroupVM[], onSuccess?: (data: FormGroupVM[]) => void): FormGroup => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: FORM_GROUP_TYPE.GETALL.SUCCESS, payload: { data } };
  };
  const getAllError = (onError?: () => void): FormGroup => {
    if (onError) {
      onError();
    }
    return { type: FORM_GROUP_TYPE.GETALL.ERROR, payload: { data: FORM_GROUP_TYPE.GETALL.ERROR } };
  };
  const create = (data: FormGroupCM, onSuccess?: (data: any) => void, onError?: (err: any) => void): FormGroup => {
    return { type: FORM_GROUP_TYPE.CREATE.FETCH, payload: { data }, onSuccess, onError };
  };
  const createSuccess = (data: FormGroupVM, onSuccess?: (data: FormGroupVM) => void): FormGroup => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: FORM_GROUP_TYPE.CREATE.SUCCESS, payload: { data } };
  };
  const createError = (onError?: () => void): FormGroup => {
    if (onError) {
      onError();
    }
    return { type: FORM_GROUP_TYPE.CREATE.ERROR, payload: { data: FORM_GROUP_TYPE.CREATE.ERROR } };
  };
  const update = (data: FormGroupUM, onSuccess?: (data: any) => void, onError?: (err: any) => void): FormGroup => {
    return { type: FORM_GROUP_TYPE.UPDATE.FETCH, payload: { data }, onSuccess, onError };
  };
  const updateSuccess = (data: FormGroupVM, onSuccess?: (data: FormGroupVM) => void): FormGroup => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: FORM_GROUP_TYPE.UPDATE.SUCCESS, payload: { data } };
  };
  const updateError = (onError?: () => void): FormGroup => {
    if (onError) {
      onError();
    }
    return { type: FORM_GROUP_TYPE.UPDATE.ERROR, payload: { data: FORM_GROUP_TYPE.UPDATE.ERROR } };
  };
  const remove = (data: string, onSuccess?: (data: any) => void, onError?: (err: any) => void): FormGroup => {
    return { type: FORM_GROUP_TYPE.REMOVE.FETCH, payload: { data }, onSuccess, onError };
  };
  const removeSuccess = (data: string, onSuccess?: (data: string) => void): FormGroup => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: FORM_GROUP_TYPE.REMOVE.SUCCESS, payload: { data } };
  };
  const removeError = (onError?: () => void): FormGroup => {
    if (onError) {
      onError();
    }
    return { type: FORM_GROUP_TYPE.REMOVE.ERROR, payload: { data: FORM_GROUP_TYPE.REMOVE.ERROR } };
  };
  const active = (data: string[], onSuccess?: (data: any) => void, onError?: (err: any) => void): FormGroup => {
    return { type: FORM_GROUP_TYPE.ACTIVE.FETCH, payload: { data }, onSuccess, onError };
  };
  const activeSuccess = (data: string[], onSuccess?: (data: string[]) => void): FormGroup => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: FORM_GROUP_TYPE.ACTIVE.SUCCESS, payload: { data } };
  };
  const activeError = (onError?: () => void): FormGroup => {
    if (onError) {
      onError();
    }
    return { type: FORM_GROUP_TYPE.ACTIVE.ERROR, payload: { data: FORM_GROUP_TYPE.ACTIVE.ERROR } };
  };
  const deactive = (data: string[], onSuccess?: (data: any) => void, onError?: (err: any) => void): FormGroup => {
    return { type: FORM_GROUP_TYPE.DEACTIVE.FETCH, payload: { data }, onSuccess, onError };
  };
  const deactiveSuccess = (data: string[], onSuccess?: (data: string[]) => void): FormGroup => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: FORM_GROUP_TYPE.DEACTIVE.SUCCESS, payload: { data } };
  };
  const deactiveError = (onError?: () => void): FormGroup => {
    if (onError) {
      onError();
    }
    return { type: FORM_GROUP_TYPE.DEACTIVE.ERROR, payload: { data: FORM_GROUP_TYPE.DEACTIVE.ERROR } };
  };
  const actions: ActionCreatorsMapObject<FormGroup> = {
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