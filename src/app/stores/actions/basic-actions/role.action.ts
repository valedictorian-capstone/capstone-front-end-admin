import { RoleCM, RoleUM, RoleVM } from '@view-models';
import { ActionCreatorsMapObject } from 'redux';
import { Role } from '@stores/models';
import { ROLE_TYPE } from '@stores/types';

export const useRoleAction = (): ActionCreatorsMapObject<Role> => {
  const reset = (): Role => {
    return { type: ROLE_TYPE.RESET.FETCH, payload: { data: ROLE_TYPE.RESET.FETCH } };
  };
  const getAll = (onSuccess?: (data: any) => void, onError?: (err: any) => void): Role => {
    return { type: ROLE_TYPE.GETALL.FETCH, payload: { data: ROLE_TYPE.GETALL.FETCH }, onSuccess, onError };
  };
  const getAllSuccess = (data: RoleVM[], onSuccess?: (data: RoleVM[]) => void): Role => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: ROLE_TYPE.GETALL.SUCCESS, payload: { data } };
  };
  const getAllError = (onError?: () => void): Role => {
    if (onError) {
      onError();
    }
    return { type: ROLE_TYPE.GETALL.ERROR, payload: { data: ROLE_TYPE.GETALL.ERROR } };
  };
  const create = (data: RoleCM, onSuccess?: (data: any) => void, onError?: (err: any) => void): Role => {
    return { type: ROLE_TYPE.CREATE.FETCH, payload: { data }, onSuccess, onError };
  };
  const createSuccess = (data: RoleVM, onSuccess?: (data: RoleVM) => void): Role => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: ROLE_TYPE.CREATE.SUCCESS, payload: { data } };
  };
  const createError = (onError?: () => void): Role => {
    if (onError) {
      onError();
    }
    return { type: ROLE_TYPE.CREATE.ERROR, payload: { data: ROLE_TYPE.CREATE.ERROR } };
  };
  const update = (data: RoleUM, onSuccess?: (data: any) => void, onError?: (err: any) => void): Role => {
    return { type: ROLE_TYPE.UPDATE.FETCH, payload: { data }, onSuccess, onError };
  };
  const updateSuccess = (data: RoleVM, onSuccess?: (data: RoleVM) => void): Role => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: ROLE_TYPE.UPDATE.SUCCESS, payload: { data } };
  };
  const updateError = (onError?: () => void): Role => {
    if (onError) {
      onError();
    }
    return { type: ROLE_TYPE.UPDATE.ERROR, payload: { data: ROLE_TYPE.UPDATE.ERROR } };
  };
  const remove = (data: string, onSuccess?: (data: any) => void, onError?: (err: any) => void): Role => {
    return { type: ROLE_TYPE.REMOVE.FETCH, payload: { data }, onSuccess, onError };
  };
  const removeSuccess = (data: string, onSuccess?: (data: string) => void): Role => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: ROLE_TYPE.REMOVE.SUCCESS, payload: { data } };
  };
  const removeError = (onError?: () => void): Role => {
    if (onError) {
      onError();
    }
    return { type: ROLE_TYPE.REMOVE.ERROR, payload: { data: ROLE_TYPE.REMOVE.ERROR } };
  };
  const active = (data: string[], onSuccess?: (data: any) => void, onError?: (err: any) => void): Role => {
    return { type: ROLE_TYPE.ACTIVE.FETCH, payload: { data }, onSuccess, onError };
  };
  const activeSuccess = (data: string[], onSuccess?: (data: string[]) => void): Role => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: ROLE_TYPE.ACTIVE.SUCCESS, payload: { data } };
  };
  const activeError = (onError?: () => void): Role => {
    if (onError) {
      onError();
    }
    return { type: ROLE_TYPE.ACTIVE.ERROR, payload: { data: ROLE_TYPE.ACTIVE.ERROR } };
  };
  const deactive = (data: string[], onSuccess?: (data: any) => void, onError?: (err: any) => void): Role => {
    return { type: ROLE_TYPE.DEACTIVE.FETCH, payload: { data }, onSuccess, onError };
  };
  const deactiveSuccess = (data: string[], onSuccess?: (data: string[]) => void): Role => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: ROLE_TYPE.DEACTIVE.SUCCESS, payload: { data } };
  };
  const deactiveError = (onError?: () => void): Role => {
    if (onError) {
      onError();
    }
    return { type: ROLE_TYPE.DEACTIVE.ERROR, payload: { data: ROLE_TYPE.DEACTIVE.ERROR } };
  };
  const actions: ActionCreatorsMapObject<Role> = {
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