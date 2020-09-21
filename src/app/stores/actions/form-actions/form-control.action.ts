import { FormControlCM, FormControlUM, FormControlVM } from '@view-models';
import { ActionCreatorsMapObject } from 'redux';
import { FormControl } from '@stores/models';
import { FORM_CONTROL_TYPE } from '@stores/types';

export const useFormControlAction = (): ActionCreatorsMapObject<FormControl> => {
  const reset = (): FormControl => {
    return { type: FORM_CONTROL_TYPE.RESET.FETCH, payload: { data: FORM_CONTROL_TYPE.RESET.FETCH } };
  };
  const getAll = (): FormControl => {
    return { type: FORM_CONTROL_TYPE.GETALL.FETCH, payload: { data: FORM_CONTROL_TYPE.GETALL.FETCH } };
  };
  const getAllSuccess = (data: FormControlVM[]): FormControl => {
    return { type: FORM_CONTROL_TYPE.GETALL.SUCCESS, payload: { data } };
  };
  const getAllError = (error: any): FormControl => {
    console.log(error.response);
    return { type: FORM_CONTROL_TYPE.GETALL.ERROR, payload: { data: FORM_CONTROL_TYPE.GETALL.ERROR } };
  };
  const create = (data: FormControlCM): FormControl => {
    return { type: FORM_CONTROL_TYPE.CREATE.FETCH, payload: { data } };
  };
  const createSuccess = (data: FormControlVM): FormControl => {
    return { type: FORM_CONTROL_TYPE.CREATE.SUCCESS, payload: { data } };
  };
  const createError = (error: any): FormControl => {
    console.log(error);
    return { type: FORM_CONTROL_TYPE.CREATE.ERROR, payload: { data: FORM_CONTROL_TYPE.CREATE.ERROR } };
  };
  const update = (data: FormControlUM): FormControl => {
    return { type: FORM_CONTROL_TYPE.UPDATE.FETCH, payload: { data } };
  };
  const updateSuccess = (data: FormControlVM): FormControl => {
    return { type: FORM_CONTROL_TYPE.UPDATE.SUCCESS, payload: { data } };
  };
  const updateError = (error: any): FormControl => {
    return { type: FORM_CONTROL_TYPE.UPDATE.ERROR, payload: { data: FORM_CONTROL_TYPE.UPDATE.ERROR} };
  };
  const remove = (data: string): FormControl => {
    return { type: FORM_CONTROL_TYPE.REMOVE.FETCH, payload: { data } };
  };
  const removeSuccess = (data: string): FormControl => {
    return { type: FORM_CONTROL_TYPE.REMOVE.SUCCESS, payload: { data } };
  };
  const removeError = (error: any): FormControl => {
    return { type: FORM_CONTROL_TYPE.REMOVE.ERROR, payload: {data: FORM_CONTROL_TYPE.REMOVE.ERROR} };
  };
  const actions: ActionCreatorsMapObject<FormControl> = {
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