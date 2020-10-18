import { DepartmentCM, DepartmentUM, DepartmentVM } from '@view-models';
import { ActionCreatorsMapObject } from 'redux';
import { Department } from '@stores/models';
import { DEPARTMENT_TYPE } from '@stores/types';

export const useDepartmentAction = (): ActionCreatorsMapObject<Department> => {
  const reset = (): Department => {
    return { type: DEPARTMENT_TYPE.RESET.FETCH, payload: { data: DEPARTMENT_TYPE.RESET.FETCH } };
  };
  const getAll = (onSuccess?: (data: any) => void, onError?: (err: any) => void): Department => {
    return { type: DEPARTMENT_TYPE.GETALL.FETCH, payload: { data: DEPARTMENT_TYPE.GETALL.FETCH }, onSuccess, onError };
  };
  const getAllSuccess = (data: DepartmentVM[], onSuccess?: (data: DepartmentVM[]) => void): Department => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: DEPARTMENT_TYPE.GETALL.SUCCESS, payload: { data } };
  };
  const getAllError = (onError?: () => void): Department => {
    if (onError) {
      onError();
    }
    return { type: DEPARTMENT_TYPE.GETALL.ERROR, payload: { data: DEPARTMENT_TYPE.GETALL.ERROR } };
  };
  const create = (data: DepartmentCM, onSuccess?: (data: any) => void, onError?: (err: any) => void): Department => {
    return { type: DEPARTMENT_TYPE.CREATE.FETCH, payload: { data }, onSuccess, onError };
  };
  const createSuccess = (data: DepartmentVM, onSuccess?: (data: DepartmentVM) => void): Department => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: DEPARTMENT_TYPE.CREATE.SUCCESS, payload: { data } };
  };
  const createError = (onError?: () => void): Department => {
    if (onError) {
      onError();
    }
    return { type: DEPARTMENT_TYPE.CREATE.ERROR, payload: { data: DEPARTMENT_TYPE.CREATE.ERROR } };
  };
  const update = (data: DepartmentUM, onSuccess?: (data: any) => void, onError?: (err: any) => void): Department => {
    return { type: DEPARTMENT_TYPE.UPDATE.FETCH, payload: { data }, onSuccess, onError };
  };
  const updateSuccess = (data: DepartmentVM, onSuccess?: (data: DepartmentVM) => void): Department => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: DEPARTMENT_TYPE.UPDATE.SUCCESS, payload: { data } };
  };
  const updateError = (onError?: () => void): Department => {
    if (onError) {
      onError();
    }
    return { type: DEPARTMENT_TYPE.UPDATE.ERROR, payload: { data: DEPARTMENT_TYPE.UPDATE.ERROR } };
  };
  const remove = (data: string, onSuccess?: (data: any) => void, onError?: (err: any) => void): Department => {
    return { type: DEPARTMENT_TYPE.REMOVE.FETCH, payload: { data }, onSuccess, onError };
  };
  const removeSuccess = (data: string, onSuccess?: (data: string) => void): Department => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: DEPARTMENT_TYPE.REMOVE.SUCCESS, payload: { data } };
  };
  const removeError = (onError?: () => void): Department => {
    if (onError) {
      onError();
    }
    return { type: DEPARTMENT_TYPE.REMOVE.ERROR, payload: { data: DEPARTMENT_TYPE.REMOVE.ERROR } };
  };
  const active = (data: string[], onSuccess?: (data: any) => void, onError?: (err: any) => void): Department => {
    return { type: DEPARTMENT_TYPE.ACTIVE.FETCH, payload: { data }, onSuccess, onError };
  };
  const activeSuccess = (data: string[], onSuccess?: (data: string[]) => void): Department => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: DEPARTMENT_TYPE.ACTIVE.SUCCESS, payload: { data } };
  };
  const activeError = (onError?: () => void): Department => {
    if (onError) {
      onError();
    }
    return { type: DEPARTMENT_TYPE.ACTIVE.ERROR, payload: { data: DEPARTMENT_TYPE.ACTIVE.ERROR } };
  };
  const deactive = (data: string[], onSuccess?: (data: any) => void, onError?: (err: any) => void): Department => {
    return { type: DEPARTMENT_TYPE.DEACTIVE.FETCH, payload: { data }, onSuccess, onError };
  };
  const deactiveSuccess = (data: string[], onSuccess?: (data: string[]) => void): Department => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: DEPARTMENT_TYPE.DEACTIVE.SUCCESS, payload: { data } };
  };
  const deactiveError = (onError?: () => void): Department => {
    if (onError) {
      onError();
    }
    return { type: DEPARTMENT_TYPE.DEACTIVE.ERROR, payload: { data: DEPARTMENT_TYPE.DEACTIVE.ERROR } };
  };
  const actions: ActionCreatorsMapObject<Department> = {
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