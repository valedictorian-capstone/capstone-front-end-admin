import { AccountExtraInformationCM, AccountExtraInformationUM, AccountExtraInformationVM } from '@view-models';
import { ActionCreatorsMapObject } from 'redux';
import { AccountExtraInformation } from '@stores/models';
import { ACCOUNT_EXTRA_INFORMATION_TYPE } from '@stores/types';

export const useAccountExtraInformationAction = (): ActionCreatorsMapObject<AccountExtraInformation> => {
  const reset = (): AccountExtraInformation => {
    return new AccountExtraInformation({ type: ACCOUNT_EXTRA_INFORMATION_TYPE.RESET.FETCH, payload: { data: ACCOUNT_EXTRA_INFORMATION_TYPE.RESET.FETCH } });
  };
  const getAll = (): AccountExtraInformation => {
    return new AccountExtraInformation({ type: ACCOUNT_EXTRA_INFORMATION_TYPE.GETALL.FETCH, payload: { data: ACCOUNT_EXTRA_INFORMATION_TYPE.GETALL.FETCH } });
  };
  const getAllSuccess = (data: AccountExtraInformationVM[]): AccountExtraInformation => {
    return new AccountExtraInformation({ type: ACCOUNT_EXTRA_INFORMATION_TYPE.GETALL.SUCCESS, payload: { data } });
  };
  const getAllError = (error: any): AccountExtraInformation => {
    console.log(error.response);
    return new AccountExtraInformation({ type: ACCOUNT_EXTRA_INFORMATION_TYPE.GETALL.ERROR, payload: { data: ACCOUNT_EXTRA_INFORMATION_TYPE.GETALL.ERROR } });
  };
  const create = (data: AccountExtraInformationCM): AccountExtraInformation => {
    return new AccountExtraInformation({ type: ACCOUNT_EXTRA_INFORMATION_TYPE.CREATE.FETCH, payload: { data } });
  };
  const createSuccess = (data: AccountExtraInformationVM): AccountExtraInformation => {
    return new AccountExtraInformation({ type: ACCOUNT_EXTRA_INFORMATION_TYPE.CREATE.SUCCESS, payload: { data } });
  };
  const createError = (error: any): AccountExtraInformation => {
    console.log(error);
    return new AccountExtraInformation({ type: ACCOUNT_EXTRA_INFORMATION_TYPE.CREATE.ERROR, payload: { data: ACCOUNT_EXTRA_INFORMATION_TYPE.CREATE.ERROR } });
  };
  const update = (data: AccountExtraInformationUM): AccountExtraInformation => {
    return new AccountExtraInformation({ type: ACCOUNT_EXTRA_INFORMATION_TYPE.UPDATE.FETCH, payload: { data } });
  };
  const updateSuccess = (data: AccountExtraInformationVM): AccountExtraInformation => {
    return new AccountExtraInformation({ type: ACCOUNT_EXTRA_INFORMATION_TYPE.UPDATE.SUCCESS, payload: { data } });
  };
  const updateError = (error: any): AccountExtraInformation => {
    return new AccountExtraInformation({ type: ACCOUNT_EXTRA_INFORMATION_TYPE.UPDATE.ERROR, payload: { data: ACCOUNT_EXTRA_INFORMATION_TYPE.UPDATE.ERROR} });
  };
  const remove = (data: string): AccountExtraInformation => {
    return new AccountExtraInformation({ type: ACCOUNT_EXTRA_INFORMATION_TYPE.REMOVE.FETCH, payload: { data } });
  };
  const removeSuccess = (data: string): AccountExtraInformation => {
    return new AccountExtraInformation({ type: ACCOUNT_EXTRA_INFORMATION_TYPE.REMOVE.SUCCESS, payload: { data } });
  };
  const removeError = (error: any): AccountExtraInformation => {
    return new AccountExtraInformation({ type: ACCOUNT_EXTRA_INFORMATION_TYPE.REMOVE.ERROR, payload: {data: ACCOUNT_EXTRA_INFORMATION_TYPE.REMOVE.ERROR} });
  };
  const actions: ActionCreatorsMapObject<AccountExtraInformation> = {
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