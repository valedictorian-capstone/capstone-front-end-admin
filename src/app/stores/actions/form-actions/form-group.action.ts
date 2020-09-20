import { FormGroupCM, FormGroupUM, FormGroupVM } from '@view-models';
import { ActionCreatorsMapObject } from 'redux';
import { FormGroup } from '@stores/models';
import { FORM_GROUP_TYPE } from '@stores/types';

export const useFormGroupAction = (): ActionCreatorsMapObject<FormGroup> => {
  const reset = (): FormGroup => {
    return new FormGroup({ type: FORM_GROUP_TYPE.RESET.FETCH, payload: { data: FORM_GROUP_TYPE.RESET.FETCH } });
  };
  const getAll = (): FormGroup => {
    return new FormGroup({ type: FORM_GROUP_TYPE.GETALL.FETCH, payload: { data: FORM_GROUP_TYPE.GETALL.FETCH } });
  };
  const getAllSuccess = (data: FormGroupVM[]): FormGroup => {
    return new FormGroup({ type: FORM_GROUP_TYPE.GETALL.SUCCESS, payload: { data } });
  };
  const getAllError = (error: any): FormGroup => {
    console.log(error.response);
    return new FormGroup({ type: FORM_GROUP_TYPE.GETALL.ERROR, payload: { data: FORM_GROUP_TYPE.GETALL.ERROR } });
  };
  const create = (data: FormGroupCM): FormGroup => {
    return new FormGroup({ type: FORM_GROUP_TYPE.CREATE.FETCH, payload: { data } });
  };
  const createSuccess = (data: FormGroupVM): FormGroup => {
    return new FormGroup({ type: FORM_GROUP_TYPE.CREATE.SUCCESS, payload: { data } });
  };
  const createError = (error: any): FormGroup => {
    console.log(error);
    return new FormGroup({ type: FORM_GROUP_TYPE.CREATE.ERROR, payload: { data: FORM_GROUP_TYPE.CREATE.ERROR } });
  };
  const update = (data: FormGroupUM): FormGroup => {
    return new FormGroup({ type: FORM_GROUP_TYPE.UPDATE.FETCH, payload: { data } });
  };
  const updateSuccess = (data: FormGroupVM): FormGroup => {
    return new FormGroup({ type: FORM_GROUP_TYPE.UPDATE.SUCCESS, payload: { data } });
  };
  const updateError = (error: any): FormGroup => {
    return new FormGroup({ type: FORM_GROUP_TYPE.UPDATE.ERROR, payload: { data: FORM_GROUP_TYPE.UPDATE.ERROR} });
  };
  const remove = (data: string): FormGroup => {
    return new FormGroup({ type: FORM_GROUP_TYPE.REMOVE.FETCH, payload: { data } });
  };
  const removeSuccess = (data: string): FormGroup => {
    return new FormGroup({ type: FORM_GROUP_TYPE.REMOVE.SUCCESS, payload: { data } });
  };
  const removeError = (error: any): FormGroup => {
    return new FormGroup({ type: FORM_GROUP_TYPE.REMOVE.ERROR, payload: {data: FORM_GROUP_TYPE.REMOVE.ERROR} });
  };
  const actions: ActionCreatorsMapObject<FormGroup> = {
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