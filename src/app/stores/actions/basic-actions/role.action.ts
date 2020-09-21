import { RoleCM, RoleUM, RoleVM } from '@view-models';
import { ActionCreatorsMapObject } from 'redux';
import { Role } from '@stores/models';
import { ROLE_TYPE } from '@stores/types';

export const useRoleAction = (): ActionCreatorsMapObject<Role> => {
  const reset = (): Role => {
    return { type: ROLE_TYPE.RESET.FETCH, payload: { data: ROLE_TYPE.RESET.FETCH } };
  };
  const getAll = (): Role => {
    return { type: ROLE_TYPE.GETALL.FETCH, payload: { data: ROLE_TYPE.GETALL.FETCH } };
  };
  const getAllSuccess = (data: RoleVM[]): Role => {
    return { type: ROLE_TYPE.GETALL.SUCCESS, payload: { data } };
  };
  const getAllError = (error: any): Role => {
    console.log(error.response);
    return { type: ROLE_TYPE.GETALL.ERROR, payload: { data: ROLE_TYPE.GETALL.ERROR } };
  };
  const create = (data: RoleCM): Role => {
    return { type: ROLE_TYPE.CREATE.FETCH, payload: { data } };
  };
  const createSuccess = (data: RoleVM): Role => {
    return { type: ROLE_TYPE.CREATE.SUCCESS, payload: { data } };
  };
  const createError = (error: any): Role => {
    console.log(error);
    return { type: ROLE_TYPE.CREATE.ERROR, payload: { data: ROLE_TYPE.CREATE.ERROR } };
  };
  const update = (data: RoleUM): Role => {
    return { type: ROLE_TYPE.UPDATE.FETCH, payload: { data } };
  };
  const updateSuccess = (data: RoleVM): Role => {
    return { type: ROLE_TYPE.UPDATE.SUCCESS, payload: { data } };
  };
  const updateError = (error: any): Role => {
    return { type: ROLE_TYPE.UPDATE.ERROR, payload: { data: ROLE_TYPE.UPDATE.ERROR} };
  };
  const remove = (data: string): Role => {
    return { type: ROLE_TYPE.REMOVE.FETCH, payload: { data } };
  };
  const removeSuccess = (data: string): Role => {
    return { type: ROLE_TYPE.REMOVE.SUCCESS, payload: { data } };
  };
  const removeError = (error: any): Role => {
    return { type: ROLE_TYPE.REMOVE.ERROR, payload: {data: ROLE_TYPE.REMOVE.ERROR} };
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
  };
  return actions;
};