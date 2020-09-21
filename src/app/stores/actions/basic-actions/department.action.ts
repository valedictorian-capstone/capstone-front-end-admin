import { DepartmentCM, DepartmentUM, DepartmentVM } from '@view-models';
import { ActionCreatorsMapObject } from 'redux';
import { Department } from '@stores/models';
import { DEPARTMENT_TYPE } from '@stores/types';

export const useDepartmentAction = (): ActionCreatorsMapObject<Department> => {
  const reset = (): Department => {
    return { type: DEPARTMENT_TYPE.RESET.FETCH, payload: { data: DEPARTMENT_TYPE.RESET.FETCH } };
  };
  const getAll = (): Department => {
    return { type: DEPARTMENT_TYPE.GETALL.FETCH, payload: { data: DEPARTMENT_TYPE.GETALL.FETCH } };
  };
  const getAllSuccess = (data: DepartmentVM[]): Department => {
    return { type: DEPARTMENT_TYPE.GETALL.SUCCESS, payload: { data } };
  };
  const getAllError = (error: any): Department => {
    console.log(error.response);
    return { type: DEPARTMENT_TYPE.GETALL.ERROR, payload: { data: DEPARTMENT_TYPE.GETALL.ERROR } };
  };
  const create = (data: DepartmentCM): Department => {
    return { type: DEPARTMENT_TYPE.CREATE.FETCH, payload: { data } };
  };
  const createSuccess = (data: DepartmentVM): Department => {
    return { type: DEPARTMENT_TYPE.CREATE.SUCCESS, payload: { data } };
  };
  const createError = (error: any): Department => {
    console.log(error);
    return { type: DEPARTMENT_TYPE.CREATE.ERROR, payload: { data: DEPARTMENT_TYPE.CREATE.ERROR } };
  };
  const update = (data: DepartmentUM): Department => {
    return { type: DEPARTMENT_TYPE.UPDATE.FETCH, payload: { data } };
  };
  const updateSuccess = (data: DepartmentVM): Department => {
    return { type: DEPARTMENT_TYPE.UPDATE.SUCCESS, payload: { data } };
  };
  const updateError = (error: any): Department => {
    return { type: DEPARTMENT_TYPE.UPDATE.ERROR, payload: { data: DEPARTMENT_TYPE.UPDATE.ERROR} };
  };
  const remove = (data: string): Department => {
    return { type: DEPARTMENT_TYPE.REMOVE.FETCH, payload: { data } };
  };
  const removeSuccess = (data: string): Department => {
    return { type: DEPARTMENT_TYPE.REMOVE.SUCCESS, payload: { data } };
  };
  const removeError = (error: any): Department => {
    return { type: DEPARTMENT_TYPE.REMOVE.ERROR, payload: {data: DEPARTMENT_TYPE.REMOVE.ERROR} };
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
  };
  return actions;
};