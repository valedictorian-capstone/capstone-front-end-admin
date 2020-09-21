import { CustomerExtraDataCM, CustomerExtraDataUM, CustomerExtraDataVM } from '@view-models';
import { ActionCreatorsMapObject } from 'redux';
import { CustomerExtraData } from '@stores/models';
import { CUSTOMER_EXTRA_DATA_TYPE } from '@stores/types';

export const useCustomerExtraDataAction = (): ActionCreatorsMapObject<CustomerExtraData> => {
  const reset = (): CustomerExtraData => {
    return { type: CUSTOMER_EXTRA_DATA_TYPE.RESET.FETCH, payload: { data: CUSTOMER_EXTRA_DATA_TYPE.RESET.FETCH } };
  };
  const getAll = (): CustomerExtraData => {
    return { type: CUSTOMER_EXTRA_DATA_TYPE.GETALL.FETCH, payload: { data: CUSTOMER_EXTRA_DATA_TYPE.GETALL.FETCH } };
  };
  const getAllSuccess = (data: CustomerExtraDataVM[]): CustomerExtraData => {
    return { type: CUSTOMER_EXTRA_DATA_TYPE.GETALL.SUCCESS, payload: { data } };
  };
  const getAllError = (error: any): CustomerExtraData => {
    console.log(error.response);
    return { type: CUSTOMER_EXTRA_DATA_TYPE.GETALL.ERROR, payload: { data: CUSTOMER_EXTRA_DATA_TYPE.GETALL.ERROR } };
  };
  const create = (data: CustomerExtraDataCM): CustomerExtraData => {
    return { type: CUSTOMER_EXTRA_DATA_TYPE.CREATE.FETCH, payload: { data } };
  };
  const createSuccess = (data: CustomerExtraDataVM): CustomerExtraData => {
    return { type: CUSTOMER_EXTRA_DATA_TYPE.CREATE.SUCCESS, payload: { data } };
  };
  const createError = (error: any): CustomerExtraData => {
    console.log(error);
    return { type: CUSTOMER_EXTRA_DATA_TYPE.CREATE.ERROR, payload: { data: CUSTOMER_EXTRA_DATA_TYPE.CREATE.ERROR } };
  };
  const update = (data: CustomerExtraDataUM): CustomerExtraData => {
    return { type: CUSTOMER_EXTRA_DATA_TYPE.UPDATE.FETCH, payload: { data } };
  };
  const updateSuccess = (data: CustomerExtraDataVM): CustomerExtraData => {
    return { type: CUSTOMER_EXTRA_DATA_TYPE.UPDATE.SUCCESS, payload: { data } };
  };
  const updateError = (error: any): CustomerExtraData => {
    return { type: CUSTOMER_EXTRA_DATA_TYPE.UPDATE.ERROR, payload: { data: CUSTOMER_EXTRA_DATA_TYPE.UPDATE.ERROR} };
  };
  const remove = (data: string): CustomerExtraData => {
    return { type: CUSTOMER_EXTRA_DATA_TYPE.REMOVE.FETCH, payload: { data } };
  };
  const removeSuccess = (data: string): CustomerExtraData => {
    return { type: CUSTOMER_EXTRA_DATA_TYPE.REMOVE.SUCCESS, payload: { data } };
  };
  const removeError = (error: any): CustomerExtraData => {
    return { type: CUSTOMER_EXTRA_DATA_TYPE.REMOVE.ERROR, payload: {data: CUSTOMER_EXTRA_DATA_TYPE.REMOVE.ERROR} };
  };
  const actions: ActionCreatorsMapObject<CustomerExtraData> = {
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