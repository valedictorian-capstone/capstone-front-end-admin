import { AccountExtraDataCM, AccountExtraDataUM, AccountExtraDataVM } from '@view-models';
import { ActionCreatorsMapObject } from 'redux';
import { AccountExtraData } from '@stores/models';
import { ACCOUNT_EXTRA_DATA_TYPE } from '@stores/types';

export const useAccountExtraDataAction = (): ActionCreatorsMapObject<AccountExtraData> => {
  const reset = (): AccountExtraData => {
    return { type: ACCOUNT_EXTRA_DATA_TYPE.RESET.FETCH, payload: { data: ACCOUNT_EXTRA_DATA_TYPE.RESET.FETCH } };
  };
  const getAll = (): AccountExtraData => {
    return { type: ACCOUNT_EXTRA_DATA_TYPE.GETALL.FETCH, payload: { data: ACCOUNT_EXTRA_DATA_TYPE.GETALL.FETCH } };
  };
  const getAllSuccess = (data: AccountExtraDataVM[]): AccountExtraData => {
    return { type: ACCOUNT_EXTRA_DATA_TYPE.GETALL.SUCCESS, payload: { data } };
  };
  const getAllError = (error: any): AccountExtraData => {
    console.log(error.response);
    return { type: ACCOUNT_EXTRA_DATA_TYPE.GETALL.ERROR, payload: { data: ACCOUNT_EXTRA_DATA_TYPE.GETALL.ERROR } };
  };
  const create = (data: AccountExtraDataCM): AccountExtraData => {
    return { type: ACCOUNT_EXTRA_DATA_TYPE.CREATE.FETCH, payload: { data } };
  };
  const createSuccess = (data: AccountExtraDataVM): AccountExtraData => {
    return { type: ACCOUNT_EXTRA_DATA_TYPE.CREATE.SUCCESS, payload: { data } };
  };
  const createError = (error: any): AccountExtraData => {
    console.log(error);
    return { type: ACCOUNT_EXTRA_DATA_TYPE.CREATE.ERROR, payload: { data: ACCOUNT_EXTRA_DATA_TYPE.CREATE.ERROR } };
  };
  const update = (data: AccountExtraDataUM): AccountExtraData => {
    return { type: ACCOUNT_EXTRA_DATA_TYPE.UPDATE.FETCH, payload: { data } };
  };
  const updateSuccess = (data: AccountExtraDataVM): AccountExtraData => {
    return { type: ACCOUNT_EXTRA_DATA_TYPE.UPDATE.SUCCESS, payload: { data } };
  };
  const updateError = (error: any): AccountExtraData => {
    return { type: ACCOUNT_EXTRA_DATA_TYPE.UPDATE.ERROR, payload: { data: ACCOUNT_EXTRA_DATA_TYPE.UPDATE.ERROR} };
  };
  const remove = (data: string): AccountExtraData => {
    return { type: ACCOUNT_EXTRA_DATA_TYPE.REMOVE.FETCH, payload: { data } };
  };
  const removeSuccess = (data: string): AccountExtraData => {
    return { type: ACCOUNT_EXTRA_DATA_TYPE.REMOVE.SUCCESS, payload: { data } };
  };
  const removeError = (error: any): AccountExtraData => {
    return { type: ACCOUNT_EXTRA_DATA_TYPE.REMOVE.ERROR, payload: {data: ACCOUNT_EXTRA_DATA_TYPE.REMOVE.ERROR} };
  };
  const actions: ActionCreatorsMapObject<AccountExtraData> = {
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