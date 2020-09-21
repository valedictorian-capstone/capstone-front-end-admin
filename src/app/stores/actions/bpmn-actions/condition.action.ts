import { ConditionCM, ConditionUM, ConditionVM } from '@view-models';
import { ActionCreatorsMapObject } from 'redux';
import { Condition } from '@stores/models';
import { CONDITION_TYPE } from '@stores/types';

export const useConditionAction = (): ActionCreatorsMapObject<Condition> => {
  const reset = (): Condition => {
    return { type: CONDITION_TYPE.RESET.FETCH, payload: { data: CONDITION_TYPE.RESET.FETCH } };
  };
  const getAll = (): Condition => {
    return { type: CONDITION_TYPE.GETALL.FETCH, payload: { data: CONDITION_TYPE.GETALL.FETCH } };
  };
  const getAllSuccess = (data: ConditionVM[]): Condition => {
    return { type: CONDITION_TYPE.GETALL.SUCCESS, payload: { data } };
  };
  const getAllError = (error: any): Condition => {
    console.log(error.response);
    return { type: CONDITION_TYPE.GETALL.ERROR, payload: { data: CONDITION_TYPE.GETALL.ERROR } };
  };
  const create = (data: ConditionCM): Condition => {
    return { type: CONDITION_TYPE.CREATE.FETCH, payload: { data } };
  };
  const createSuccess = (data: ConditionVM): Condition => {
    return { type: CONDITION_TYPE.CREATE.SUCCESS, payload: { data } };
  };
  const createError = (error: any): Condition => {
    console.log(error);
    return { type: CONDITION_TYPE.CREATE.ERROR, payload: { data: CONDITION_TYPE.CREATE.ERROR } };
  };
  const update = (data: ConditionUM): Condition => {
    return { type: CONDITION_TYPE.UPDATE.FETCH, payload: { data } };
  };
  const updateSuccess = (data: ConditionVM): Condition => {
    return { type: CONDITION_TYPE.UPDATE.SUCCESS, payload: { data } };
  };
  const updateError = (error: any): Condition => {
    return { type: CONDITION_TYPE.UPDATE.ERROR, payload: { data: CONDITION_TYPE.UPDATE.ERROR} };
  };
  const remove = (data: string): Condition => {
    return { type: CONDITION_TYPE.REMOVE.FETCH, payload: { data } };
  };
  const removeSuccess = (data: string): Condition => {
    return { type: CONDITION_TYPE.REMOVE.SUCCESS, payload: { data } };
  };
  const removeError = (error: any): Condition => {
    return { type: CONDITION_TYPE.REMOVE.ERROR, payload: {data: CONDITION_TYPE.REMOVE.ERROR} };
  };
  const actions: ActionCreatorsMapObject<Condition> = {
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