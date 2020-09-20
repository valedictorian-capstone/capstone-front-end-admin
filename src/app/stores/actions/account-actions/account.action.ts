import { AccountCM, AccountUM, AccountVM } from '@view-models';
import { ActionCreatorsMapObject } from 'redux';
import { Account } from '@stores/models';
import { ACCOUNT_TYPE } from '@stores/types';

export const useAccountAction = (): ActionCreatorsMapObject<Account> => {
  const reset = (): Account => {
    return new Account({ type: ACCOUNT_TYPE.RESET.FETCH, payload: { data: ACCOUNT_TYPE.RESET.FETCH } });
  };
  const getAll = (): Account => {
    return new Account({ type: ACCOUNT_TYPE.GETALL.FETCH, payload: { data: ACCOUNT_TYPE.GETALL.FETCH } });
  };
  const getAllSuccess = (data: AccountVM[]): Account => {
    return new Account({ type: ACCOUNT_TYPE.GETALL.SUCCESS, payload: { data } });
  };
  const getAllError = (error: any): Account => {
    console.log(error.response);
    return new Account({ type: ACCOUNT_TYPE.GETALL.ERROR, payload: { data: ACCOUNT_TYPE.GETALL.ERROR } });
  };
  const create = (data: AccountCM): Account => {
    return new Account({ type: ACCOUNT_TYPE.CREATE.FETCH, payload: { data } });
  };
  const createSuccess = (data: AccountVM): Account => {
    return new Account({ type: ACCOUNT_TYPE.CREATE.SUCCESS, payload: { data } });
  };
  const createError = (error: any): Account => {
    console.log(error);
    return new Account({ type: ACCOUNT_TYPE.CREATE.ERROR, payload: { data: ACCOUNT_TYPE.CREATE.ERROR } });
  };
  const update = (data: AccountUM): Account => {
    return new Account({ type: ACCOUNT_TYPE.UPDATE.FETCH, payload: { data } });
  };
  const updateSuccess = (data: AccountVM): Account => {
    return new Account({ type: ACCOUNT_TYPE.UPDATE.SUCCESS, payload: { data } });
  };
  const updateError = (error: any): Account => {
    return new Account({ type: ACCOUNT_TYPE.UPDATE.ERROR, payload: { data: ACCOUNT_TYPE.UPDATE.ERROR} });
  };
  const remove = (data: string): Account => {
    return new Account({ type: ACCOUNT_TYPE.REMOVE.FETCH, payload: { data } });
  };
  const removeSuccess = (data: string): Account => {
    return new Account({ type: ACCOUNT_TYPE.REMOVE.SUCCESS, payload: { data } });
  };
  const removeError = (error: any): Account => {
    return new Account({ type: ACCOUNT_TYPE.REMOVE.ERROR, payload: {data: ACCOUNT_TYPE.REMOVE.ERROR} });
  };
  const actions: ActionCreatorsMapObject<Account> = {
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