import { ProductCM, ProductUM, ProductVM } from '@view-models';
import { ActionCreatorsMapObject } from 'redux';
import { Product } from '@stores/models';
import { PRODUCT_TYPE } from '@stores/types';

export const useProductAction = (): ActionCreatorsMapObject<Product> => {
  const reset = (): Product => {
    return { type: PRODUCT_TYPE.RESET.FETCH, payload: { data: PRODUCT_TYPE.RESET.FETCH } };
  };
  const getAll = (onSuccess?: (data: any) => void, onError?: (err: any) => void): Product => {
    return { type: PRODUCT_TYPE.GETALL.FETCH, payload: { data: PRODUCT_TYPE.GETALL.FETCH }, onSuccess, onError };
  };
  const getAllSuccess = (data: ProductVM[], onSuccess?: (data: ProductVM[]) => void): Product => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: PRODUCT_TYPE.GETALL.SUCCESS, payload: { data } };
  };
  const getAllError = (onError?: () => void): Product => {
    if (onError) {
      onError();
    }
    return { type: PRODUCT_TYPE.GETALL.ERROR, payload: { data: PRODUCT_TYPE.GETALL.ERROR } };
  };
  const create = (data: ProductCM, onSuccess?: (data: any) => void, onError?: (err: any) => void): Product => {
    return { type: PRODUCT_TYPE.CREATE.FETCH, payload: { data }, onSuccess, onError };
  };
  const createSuccess = (data: ProductVM, onSuccess?: (data: ProductVM) => void): Product => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: PRODUCT_TYPE.CREATE.SUCCESS, payload: { data } };
  };
  const createError = (onError?: () => void): Product => {
    if (onError) {
      onError();
    }
    return { type: PRODUCT_TYPE.CREATE.ERROR, payload: { data: PRODUCT_TYPE.CREATE.ERROR } };
  };
  const update = (data: ProductUM, onSuccess?: (data: any) => void, onError?: (err: any) => void): Product => {
    return { type: PRODUCT_TYPE.UPDATE.FETCH, payload: { data }, onSuccess, onError };
  };
  const updateSuccess = (data: ProductVM, onSuccess?: (data: ProductVM) => void): Product => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: PRODUCT_TYPE.UPDATE.SUCCESS, payload: { data } };
  };
  const updateError = (onError?: () => void): Product => {
    if (onError) {
      onError();
    }
    return { type: PRODUCT_TYPE.UPDATE.ERROR, payload: { data: PRODUCT_TYPE.UPDATE.ERROR } };
  };
  const remove = (data: string, onSuccess?: (data: any) => void, onError?: (err: any) => void): Product => {
    return { type: PRODUCT_TYPE.REMOVE.FETCH, payload: { data }, onSuccess, onError };
  };
  const removeSuccess = (data: string, onSuccess?: (data: string) => void): Product => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: PRODUCT_TYPE.REMOVE.SUCCESS, payload: { data } };
  };
  const removeError = (onError?: () => void): Product => {
    if (onError) {
      onError();
    }
    return { type: PRODUCT_TYPE.REMOVE.ERROR, payload: { data: PRODUCT_TYPE.REMOVE.ERROR } };
  };
  const active = (data: string[], onSuccess?: (data: any) => void, onError?: (err: any) => void): Product => {
    return { type: PRODUCT_TYPE.ACTIVE.FETCH, payload: { data }, onSuccess, onError };
  };
  const activeSuccess = (data: string[], onSuccess?: (data: string[]) => void): Product => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: PRODUCT_TYPE.ACTIVE.SUCCESS, payload: { data } };
  };
  const activeError = (onError?: () => void): Product => {
    if (onError) {
      onError();
    }
    return { type: PRODUCT_TYPE.ACTIVE.ERROR, payload: { data: PRODUCT_TYPE.ACTIVE.ERROR } };
  };
  const deactive = (data: string[], onSuccess?: (data: any) => void, onError?: (err: any) => void): Product => {
    return { type: PRODUCT_TYPE.DEACTIVE.FETCH, payload: { data }, onSuccess, onError };
  };
  const deactiveSuccess = (data: string[], onSuccess?: (data: string[]) => void): Product => {
    if (onSuccess) {
      onSuccess(data);
    }
    return { type: PRODUCT_TYPE.DEACTIVE.SUCCESS, payload: { data } };
  };
  const deactiveError = (onError?: () => void): Product => {
    if (onError) {
      onError();
    }
    return { type: PRODUCT_TYPE.DEACTIVE.ERROR, payload: { data: PRODUCT_TYPE.DEACTIVE.ERROR } };
  };
  const actions: ActionCreatorsMapObject<Product> = {
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
    active,
    activeSuccess,
    activeError,
    deactive,
    deactiveSuccess,
    deactiveError,
  };
  return actions;
};