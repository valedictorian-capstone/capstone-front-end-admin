import { AccountExtraInformationDataCM, AccountExtraInformationDataUM, AccountExtraInformationDataVM } from '@view-models';
import { ActionCreatorsMapObject } from 'redux';
import { AccountExtraInformationData } from '@stores/models';
import { ACCOUNT_EXTRA_INFORMATION_DATA_TYPE } from '@stores/types';

export const useAccountExtraInformationDataAction = (): ActionCreatorsMapObject<AccountExtraInformationData> => {
  const reset = (): AccountExtraInformationData => {
    return new AccountExtraInformationData({ type: ACCOUNT_EXTRA_INFORMATION_DATA_TYPE.RESET.FETCH, payload: { data: ACCOUNT_EXTRA_INFORMATION_DATA_TYPE.RESET.FETCH } });
  };
  const getAll = (): AccountExtraInformationData => {
    return new AccountExtraInformationData({ type: ACCOUNT_EXTRA_INFORMATION_DATA_TYPE.GETALL.FETCH, payload: { data: ACCOUNT_EXTRA_INFORMATION_DATA_TYPE.GETALL.FETCH } });
  };
  const getAllSuccess = (data: AccountExtraInformationDataVM[]): AccountExtraInformationData => {
    return new AccountExtraInformationData({ type: ACCOUNT_EXTRA_INFORMATION_DATA_TYPE.GETALL.SUCCESS, payload: { data } });
  };
  const getAllError = (error: any): AccountExtraInformationData => {
    console.log(error.response);
    return new AccountExtraInformationData({ type: ACCOUNT_EXTRA_INFORMATION_DATA_TYPE.GETALL.ERROR, payload: { data: ACCOUNT_EXTRA_INFORMATION_DATA_TYPE.GETALL.ERROR } });
  };
  const create = (data: AccountExtraInformationDataCM): AccountExtraInformationData => {
    return new AccountExtraInformationData({ type: ACCOUNT_EXTRA_INFORMATION_DATA_TYPE.CREATE.FETCH, payload: { data } });
  };
  const createSuccess = (data: AccountExtraInformationDataVM): AccountExtraInformationData => {
    return new AccountExtraInformationData({ type: ACCOUNT_EXTRA_INFORMATION_DATA_TYPE.CREATE.SUCCESS, payload: { data } });
  };
  const createError = (error: any): AccountExtraInformationData => {
    console.log(error);
    return new AccountExtraInformationData({ type: ACCOUNT_EXTRA_INFORMATION_DATA_TYPE.CREATE.ERROR, payload: { data: ACCOUNT_EXTRA_INFORMATION_DATA_TYPE.CREATE.ERROR } });
  };
  const update = (data: AccountExtraInformationDataUM): AccountExtraInformationData => {
    return new AccountExtraInformationData({ type: ACCOUNT_EXTRA_INFORMATION_DATA_TYPE.UPDATE.FETCH, payload: { data } });
  };
  const updateSuccess = (data: AccountExtraInformationDataVM): AccountExtraInformationData => {
    return new AccountExtraInformationData({ type: ACCOUNT_EXTRA_INFORMATION_DATA_TYPE.UPDATE.SUCCESS, payload: { data } });
  };
  const updateError = (error: any): AccountExtraInformationData => {
    return new AccountExtraInformationData({ type: ACCOUNT_EXTRA_INFORMATION_DATA_TYPE.UPDATE.ERROR, payload: { data: ACCOUNT_EXTRA_INFORMATION_DATA_TYPE.UPDATE.ERROR} });
  };
  const remove = (data: string): AccountExtraInformationData => {
    return new AccountExtraInformationData({ type: ACCOUNT_EXTRA_INFORMATION_DATA_TYPE.REMOVE.FETCH, payload: { data } });
  };
  const removeSuccess = (data: string): AccountExtraInformationData => {
    return new AccountExtraInformationData({ type: ACCOUNT_EXTRA_INFORMATION_DATA_TYPE.REMOVE.SUCCESS, payload: { data } });
  };
  const removeError = (error: any): AccountExtraInformationData => {
    return new AccountExtraInformationData({ type: ACCOUNT_EXTRA_INFORMATION_DATA_TYPE.REMOVE.ERROR, payload: {data: ACCOUNT_EXTRA_INFORMATION_DATA_TYPE.REMOVE.ERROR} });
  };
  const actions: ActionCreatorsMapObject<AccountExtraInformationData> = {
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