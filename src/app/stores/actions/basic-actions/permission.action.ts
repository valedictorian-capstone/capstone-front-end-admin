import { PermissionCM, PermissionUM, PermissionVM } from '@view-models';
import { ActionCreatorsMapObject } from 'redux';
import { Permission } from '@stores/models';
import { PERMISSION_TYPE } from '@stores/types';

export const usePermissionAction = (): ActionCreatorsMapObject<Permission> => {
  const reset = (): Permission => {
    return { type: PERMISSION_TYPE.RESET.FETCH, payload: { data: PERMISSION_TYPE.RESET.FETCH } };
  };
  const getAll = (): Permission => {
    return { type: PERMISSION_TYPE.GETALL.FETCH, payload: { data: PERMISSION_TYPE.GETALL.FETCH } };
  };
  const getAllSuccess = (data: PermissionVM[]): Permission => {
    return { type: PERMISSION_TYPE.GETALL.SUCCESS, payload: { data } };
  };
  const getAllError = (error: any): Permission => {
    console.log(error.response);
    return { type: PERMISSION_TYPE.GETALL.ERROR, payload: { data: PERMISSION_TYPE.GETALL.ERROR } };
  };
  const create = (data: PermissionCM): Permission => {
    return { type: PERMISSION_TYPE.CREATE.FETCH, payload: { data } };
  };
  const createSuccess = (data: PermissionVM): Permission => {
    return { type: PERMISSION_TYPE.CREATE.SUCCESS, payload: { data } };
  };
  const createError = (error: any): Permission => {
    console.log(error);
    return { type: PERMISSION_TYPE.CREATE.ERROR, payload: { data: PERMISSION_TYPE.CREATE.ERROR } };
  };
  const update = (data: PermissionUM): Permission => {
    return { type: PERMISSION_TYPE.UPDATE.FETCH, payload: { data } };
  };
  const updateSuccess = (data: PermissionVM): Permission => {
    return { type: PERMISSION_TYPE.UPDATE.SUCCESS, payload: { data } };
  };
  const updateError = (error: any): Permission => {
    return { type: PERMISSION_TYPE.UPDATE.ERROR, payload: { data: PERMISSION_TYPE.UPDATE.ERROR} };
  };
  const remove = (data: string): Permission => {
    return { type: PERMISSION_TYPE.REMOVE.FETCH, payload: { data } };
  };
  const removeSuccess = (data: string): Permission => {
    return { type: PERMISSION_TYPE.REMOVE.SUCCESS, payload: { data } };
  };
  const removeError = (error: any): Permission => {
    return { type: PERMISSION_TYPE.REMOVE.ERROR, payload: {data: PERMISSION_TYPE.REMOVE.ERROR} };
  };
  const actions: ActionCreatorsMapObject<Permission> = {
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