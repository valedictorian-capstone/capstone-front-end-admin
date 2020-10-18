import { GroupCM, GroupUM, GroupVM } from '@view-models';
import { ActionCreatorsMapObject } from 'redux';
import { Group } from '@stores/models';
import { GROUP_TYPE } from '@stores/types';

export const useGroupAction = (): ActionCreatorsMapObject<Group> => {
  const reset = (): Group => {
    return { type: GROUP_TYPE.RESET.FETCH, payload: { data: GROUP_TYPE.RESET.FETCH } };
  };
  const getAll = (onSuccess?: (data: any) => void, onError?: (err: any) => void): Group => {
    return { type: GROUP_TYPE.GETALL.FETCH, payload: { data: GROUP_TYPE.GETALL.FETCH }, onSuccess, onError };
  };
  const getAllSuccess = (data: GroupVM[], onSuccess?: (data: GroupVM[]) => void): Group => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: GROUP_TYPE.GETALL.SUCCESS, payload: { data } };
  };
  const getAllError = (onError?: () => void): Group => {
    if (onError) {
      onError();
    }
    return { type: GROUP_TYPE.GETALL.ERROR, payload: { data: GROUP_TYPE.GETALL.ERROR } };
  };
  const create = (data: GroupCM, onSuccess?: (data: any) => void, onError?: (err: any) => void): Group => {
    return { type: GROUP_TYPE.CREATE.FETCH, payload: { data }, onSuccess, onError };
  };
  const createSuccess = (data: GroupVM, onSuccess?: (data: GroupVM) => void): Group => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: GROUP_TYPE.CREATE.SUCCESS, payload: { data } };
  };
  const createError = (onError?: () => void): Group => {
    if (onError) {
      onError();
    }
    return { type: GROUP_TYPE.CREATE.ERROR, payload: { data: GROUP_TYPE.CREATE.ERROR } };
  };
  const update = (data: GroupUM, onSuccess?: (data: any) => void, onError?: (err: any) => void): Group => {
    return { type: GROUP_TYPE.UPDATE.FETCH, payload: { data }, onSuccess, onError };
  };
  const updateSuccess = (data: GroupVM, onSuccess?: (data: GroupVM) => void): Group => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: GROUP_TYPE.UPDATE.SUCCESS, payload: { data } };
  };
  const updateError = (onError?: () => void): Group => {
    if (onError) {
      onError();
    }
    return { type: GROUP_TYPE.UPDATE.ERROR, payload: { data: GROUP_TYPE.UPDATE.ERROR } };
  };
  const remove = (data: string, onSuccess?: (data: any) => void, onError?: (err: any) => void): Group => {
    return { type: GROUP_TYPE.REMOVE.FETCH, payload: { data }, onSuccess, onError };
  };
  const removeSuccess = (data: string, onSuccess?: (data: string) => void): Group => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: GROUP_TYPE.REMOVE.SUCCESS, payload: { data } };
  };
  const removeError = (onError?: () => void): Group => {
    if (onError) {
      onError();
    }
    return { type: GROUP_TYPE.REMOVE.ERROR, payload: { data: GROUP_TYPE.REMOVE.ERROR } };
  };
  const active = (data: string[], onSuccess?: (data: any) => void, onError?: (err: any) => void): Group => {
    return { type: GROUP_TYPE.ACTIVE.FETCH, payload: { data }, onSuccess, onError };
  };
  const activeSuccess = (data: string[], onSuccess?: (data: string[]) => void): Group => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: GROUP_TYPE.ACTIVE.SUCCESS, payload: { data } };
  };
  const activeError = (onError?: () => void): Group => {
    if (onError) {
      onError();
    }
    return { type: GROUP_TYPE.ACTIVE.ERROR, payload: { data: GROUP_TYPE.ACTIVE.ERROR } };
  };
  const deactive = (data: string[], onSuccess?: (data: any) => void, onError?: (err: any) => void): Group => {
    return { type: GROUP_TYPE.DEACTIVE.FETCH, payload: { data }, onSuccess, onError };
  };
  const deactiveSuccess = (data: string[], onSuccess?: (data: string[]) => void): Group => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: GROUP_TYPE.DEACTIVE.SUCCESS, payload: { data } };
  };
  const deactiveError = (onError?: () => void): Group => {
    if (onError) {
      onError();
    }
    return { type: GROUP_TYPE.DEACTIVE.ERROR, payload: { data: GROUP_TYPE.DEACTIVE.ERROR } };
  };
  const actions: ActionCreatorsMapObject<Group> = {
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