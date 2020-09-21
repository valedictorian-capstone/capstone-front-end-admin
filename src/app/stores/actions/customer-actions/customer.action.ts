import { CustomerCM, CustomerUM, CustomerVM } from '@view-models';
import { ActionCreatorsMapObject } from 'redux';
import { Customer } from '@stores/models';
import { CUSTOMER_TYPE } from '@stores/types';

export const useCustomerAction = (): ActionCreatorsMapObject<Customer> => {
  const reset = (): Customer => {
    return { type: CUSTOMER_TYPE.RESET.FETCH, payload: { data: CUSTOMER_TYPE.RESET.FETCH } };
  };
  const getAll = (): Customer => {
    return { type: CUSTOMER_TYPE.GETALL.FETCH, payload: { data: CUSTOMER_TYPE.GETALL.FETCH } };
  };
  const getAllSuccess = (data: CustomerVM[]): Customer => {
    return { type: CUSTOMER_TYPE.GETALL.SUCCESS, payload: { data } };
  };
  const getAllError = (error: any): Customer => {
    console.log(error.response);
    return { type: CUSTOMER_TYPE.GETALL.ERROR, payload: { data: CUSTOMER_TYPE.GETALL.ERROR } };
  };
  const create = (data: CustomerCM): Customer => {
    return { type: CUSTOMER_TYPE.CREATE.FETCH, payload: { data } };
  };
  const createSuccess = (data: CustomerVM): Customer => {
    return { type: CUSTOMER_TYPE.CREATE.SUCCESS, payload: { data } };
  };
  const createError = (error: any): Customer => {
    console.log(error);
    return { type: CUSTOMER_TYPE.CREATE.ERROR, payload: { data: CUSTOMER_TYPE.CREATE.ERROR } };
  };
  const update = (data: CustomerUM): Customer => {
    return { type: CUSTOMER_TYPE.UPDATE.FETCH, payload: { data } };
  };
  const updateSuccess = (data: CustomerVM): Customer => {
    return { type: CUSTOMER_TYPE.UPDATE.SUCCESS, payload: { data } };
  };
  const updateError = (error: any): Customer => {
    return { type: CUSTOMER_TYPE.UPDATE.ERROR, payload: { data: CUSTOMER_TYPE.UPDATE.ERROR} };
  };
  const remove = (data: string): Customer => {
    return { type: CUSTOMER_TYPE.REMOVE.FETCH, payload: { data } };
  };
  const removeSuccess = (data: string): Customer => {
    return { type: CUSTOMER_TYPE.REMOVE.SUCCESS, payload: { data } };
  };
  const removeError = (error: any): Customer => {
    return { type: CUSTOMER_TYPE.REMOVE.ERROR, payload: {data: CUSTOMER_TYPE.REMOVE.ERROR} };
  };
  const actions: ActionCreatorsMapObject<Customer> = {
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