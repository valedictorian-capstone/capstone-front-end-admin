import { FormValueCM, FormValueUM, FormValueVM } from '@view-models';
import { ActionCreatorsMapObject } from 'redux';
import { FormValue } from '@stores/models';
import { FORM_VALUE_TYPE } from '@stores/types';

export const useFormValueAction = (): ActionCreatorsMapObject<FormValue> => {
  const reset = (): FormValue => {
    return new FormValue({ type: FORM_VALUE_TYPE.RESET.FETCH, payload: { data: FORM_VALUE_TYPE.RESET.FETCH } });
  };
  const getAll = (): FormValue => {
    return new FormValue({ type: FORM_VALUE_TYPE.GETALL.FETCH, payload: { data: FORM_VALUE_TYPE.GETALL.FETCH } });
  };
  const getAllSuccess = (data: FormValueVM[]): FormValue => {
    return new FormValue({ type: FORM_VALUE_TYPE.GETALL.SUCCESS, payload: { data } });
  };
  const getAllError = (error: any): FormValue => {
    console.log(error.response);
    return new FormValue({ type: FORM_VALUE_TYPE.GETALL.ERROR, payload: { data: FORM_VALUE_TYPE.GETALL.ERROR } });
  };
  const create = (data: FormValueCM): FormValue => {
    return new FormValue({ type: FORM_VALUE_TYPE.CREATE.FETCH, payload: { data } });
  };
  const createSuccess = (data: FormValueVM): FormValue => {
    return new FormValue({ type: FORM_VALUE_TYPE.CREATE.SUCCESS, payload: { data } });
  };
  const createError = (error: any): FormValue => {
    console.log(error);
    return new FormValue({ type: FORM_VALUE_TYPE.CREATE.ERROR, payload: { data: FORM_VALUE_TYPE.CREATE.ERROR } });
  };
  const update = (data: FormValueUM): FormValue => {
    return new FormValue({ type: FORM_VALUE_TYPE.UPDATE.FETCH, payload: { data } });
  };
  const updateSuccess = (data: FormValueVM): FormValue => {
    return new FormValue({ type: FORM_VALUE_TYPE.UPDATE.SUCCESS, payload: { data } });
  };
  const updateError = (error: any): FormValue => {
    return new FormValue({ type: FORM_VALUE_TYPE.UPDATE.ERROR, payload: { data: FORM_VALUE_TYPE.UPDATE.ERROR} });
  };
  const remove = (data: string): FormValue => {
    return new FormValue({ type: FORM_VALUE_TYPE.REMOVE.FETCH, payload: { data } });
  };
  const removeSuccess = (data: string): FormValue => {
    return new FormValue({ type: FORM_VALUE_TYPE.REMOVE.SUCCESS, payload: { data } });
  };
  const removeError = (error: any): FormValue => {
    return new FormValue({ type: FORM_VALUE_TYPE.REMOVE.ERROR, payload: {data: FORM_VALUE_TYPE.REMOVE.ERROR} });
  };
  const actions: ActionCreatorsMapObject<FormValue> = {
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