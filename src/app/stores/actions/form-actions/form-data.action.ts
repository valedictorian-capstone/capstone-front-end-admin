import { FormDataCM, FormDataUM, FormDataVM } from '@view-models';
import { ActionCreatorsMapObject } from 'redux';
import { FormData } from '@stores/models';
import { FORM_DATA_TYPE } from '@stores/types';

export const useFormDataAction = (): ActionCreatorsMapObject<FormData> => {
  const reset = (): FormData => {
    return new FormData({ type: FORM_DATA_TYPE.RESET.FETCH, payload: { data: FORM_DATA_TYPE.RESET.FETCH } });
  };
  const getAll = (): FormData => {
    return new FormData({ type: FORM_DATA_TYPE.GETALL.FETCH, payload: { data: FORM_DATA_TYPE.GETALL.FETCH } });
  };
  const getAllSuccess = (data: FormDataVM[]): FormData => {
    return new FormData({ type: FORM_DATA_TYPE.GETALL.SUCCESS, payload: { data } });
  };
  const getAllError = (error: any): FormData => {
    console.log(error.response);
    return new FormData({ type: FORM_DATA_TYPE.GETALL.ERROR, payload: { data: FORM_DATA_TYPE.GETALL.ERROR } });
  };
  const create = (data: FormDataCM): FormData => {
    return new FormData({ type: FORM_DATA_TYPE.CREATE.FETCH, payload: { data } });
  };
  const createSuccess = (data: FormDataVM): FormData => {
    return new FormData({ type: FORM_DATA_TYPE.CREATE.SUCCESS, payload: { data } });
  };
  const createError = (error: any): FormData => {
    console.log(error);
    return new FormData({ type: FORM_DATA_TYPE.CREATE.ERROR, payload: { data: FORM_DATA_TYPE.CREATE.ERROR } });
  };
  const update = (data: FormDataUM): FormData => {
    return new FormData({ type: FORM_DATA_TYPE.UPDATE.FETCH, payload: { data } });
  };
  const updateSuccess = (data: FormDataVM): FormData => {
    return new FormData({ type: FORM_DATA_TYPE.UPDATE.SUCCESS, payload: { data } });
  };
  const updateError = (error: any): FormData => {
    return new FormData({ type: FORM_DATA_TYPE.UPDATE.ERROR, payload: { data: FORM_DATA_TYPE.UPDATE.ERROR} });
  };
  const remove = (data: string): FormData => {
    return new FormData({ type: FORM_DATA_TYPE.REMOVE.FETCH, payload: { data } });
  };
  const removeSuccess = (data: string): FormData => {
    return new FormData({ type: FORM_DATA_TYPE.REMOVE.SUCCESS, payload: { data } });
  };
  const removeError = (error: any): FormData => {
    return new FormData({ type: FORM_DATA_TYPE.REMOVE.ERROR, payload: {data: FORM_DATA_TYPE.REMOVE.ERROR} });
  };
  const actions: ActionCreatorsMapObject<FormData> = {
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