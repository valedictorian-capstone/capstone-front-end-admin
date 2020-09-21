import { PatternCM, PatternUM, PatternVM } from '@view-models';
import { ActionCreatorsMapObject } from 'redux';
import { Pattern } from '@stores/models';
import { PATTERN_TYPE } from '@stores/types';

export const usePatternAction = (): ActionCreatorsMapObject<Pattern> => {
  const reset = (): Pattern => {
    return { type: PATTERN_TYPE.RESET.FETCH, payload: { data: PATTERN_TYPE.RESET.FETCH } };
  };
  const getAll = (): Pattern => {
    return { type: PATTERN_TYPE.GETALL.FETCH, payload: { data: PATTERN_TYPE.GETALL.FETCH } };
  };
  const getAllSuccess = (data: PatternVM[]): Pattern => {
    return { type: PATTERN_TYPE.GETALL.SUCCESS, payload: { data } };
  };
  const getAllError = (error: any): Pattern => {
    console.log(error.response);
    return { type: PATTERN_TYPE.GETALL.ERROR, payload: { data: PATTERN_TYPE.GETALL.ERROR } };
  };
  const create = (data: PatternCM): Pattern => {
    return { type: PATTERN_TYPE.CREATE.FETCH, payload: { data } };
  };
  const createSuccess = (data: PatternVM): Pattern => {
    return { type: PATTERN_TYPE.CREATE.SUCCESS, payload: { data } };
  };
  const createError = (error: any): Pattern => {
    console.log(error);
    return { type: PATTERN_TYPE.CREATE.ERROR, payload: { data: PATTERN_TYPE.CREATE.ERROR } };
  };
  const update = (data: PatternUM): Pattern => {
    return { type: PATTERN_TYPE.UPDATE.FETCH, payload: { data } };
  };
  const updateSuccess = (data: PatternVM): Pattern => {
    return { type: PATTERN_TYPE.UPDATE.SUCCESS, payload: { data } };
  };
  const updateError = (error: any): Pattern => {
    return { type: PATTERN_TYPE.UPDATE.ERROR, payload: { data: PATTERN_TYPE.UPDATE.ERROR} };
  };
  const remove = (data: string): Pattern => {
    return { type: PATTERN_TYPE.REMOVE.FETCH, payload: { data } };
  };
  const removeSuccess = (data: string): Pattern => {
    return { type: PATTERN_TYPE.REMOVE.SUCCESS, payload: { data } };
  };
  const removeError = (error: any): Pattern => {
    return { type: PATTERN_TYPE.REMOVE.ERROR, payload: {data: PATTERN_TYPE.REMOVE.ERROR} };
  };
  const actions: ActionCreatorsMapObject<Pattern> = {
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