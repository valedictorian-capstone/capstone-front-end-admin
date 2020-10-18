import { ProductExtraInformationDataCM, ProductExtraInformationDataUM, ProductExtraInformationDataVM } from '@view-models';
import { ActionCreatorsMapObject } from 'redux';
import { ProductExtraInformationData } from '@stores/models';
import { PRODUCT_EXTRA_INFORMATION_DATA_TYPE } from '@stores/types';

export const useProductExtraInformationDataAction = (): ActionCreatorsMapObject<ProductExtraInformationData> => {
  const reset = (): ProductExtraInformationData => {
    return { type: PRODUCT_EXTRA_INFORMATION_DATA_TYPE.RESET.FETCH, payload: { data: PRODUCT_EXTRA_INFORMATION_DATA_TYPE.RESET.FETCH } };
  };
  const getAll = (): ProductExtraInformationData => {
    return { type: PRODUCT_EXTRA_INFORMATION_DATA_TYPE.GETALL.FETCH, payload: { data: PRODUCT_EXTRA_INFORMATION_DATA_TYPE.GETALL.FETCH } };
  };
  const getAllSuccess = (data: ProductExtraInformationDataVM[]): ProductExtraInformationData => {
    return { type: PRODUCT_EXTRA_INFORMATION_DATA_TYPE.GETALL.SUCCESS, payload: { data } };
  };
  const getAllError = (error: any): ProductExtraInformationData => {
    console.log(error.response);
    return { type: PRODUCT_EXTRA_INFORMATION_DATA_TYPE.GETALL.ERROR, payload: { data: PRODUCT_EXTRA_INFORMATION_DATA_TYPE.GETALL.ERROR } };
  };
  const create = (data: ProductExtraInformationDataCM): ProductExtraInformationData => {
    return { type: PRODUCT_EXTRA_INFORMATION_DATA_TYPE.CREATE.FETCH, payload: { data } };
  };
  const createSuccess = (data: ProductExtraInformationDataVM): ProductExtraInformationData => {
    return { type: PRODUCT_EXTRA_INFORMATION_DATA_TYPE.CREATE.SUCCESS, payload: { data } };
  };
  const createError = (error: any): ProductExtraInformationData => {
    console.log(error);
    return { type: PRODUCT_EXTRA_INFORMATION_DATA_TYPE.CREATE.ERROR, payload: { data: PRODUCT_EXTRA_INFORMATION_DATA_TYPE.CREATE.ERROR } };
  };
  const update = (data: ProductExtraInformationDataUM): ProductExtraInformationData => {
    return { type: PRODUCT_EXTRA_INFORMATION_DATA_TYPE.UPDATE.FETCH, payload: { data } };
  };
  const updateSuccess = (data: ProductExtraInformationDataVM): ProductExtraInformationData => {
    return { type: PRODUCT_EXTRA_INFORMATION_DATA_TYPE.UPDATE.SUCCESS, payload: { data } };
  };
  const updateError = (error: any): ProductExtraInformationData => {
    return { type: PRODUCT_EXTRA_INFORMATION_DATA_TYPE.UPDATE.ERROR, payload: { data: PRODUCT_EXTRA_INFORMATION_DATA_TYPE.UPDATE.ERROR} };
  };
  const remove = (data: string): ProductExtraInformationData => {
    return { type: PRODUCT_EXTRA_INFORMATION_DATA_TYPE.REMOVE.FETCH, payload: { data } };
  };
  const removeSuccess = (data: string): ProductExtraInformationData => {
    return { type: PRODUCT_EXTRA_INFORMATION_DATA_TYPE.REMOVE.SUCCESS, payload: { data } };
  };
  const removeError = (error: any): ProductExtraInformationData => {
    return { type: PRODUCT_EXTRA_INFORMATION_DATA_TYPE.REMOVE.ERROR, payload: {data: PRODUCT_EXTRA_INFORMATION_DATA_TYPE.REMOVE.ERROR} };
  };
  const actions: ActionCreatorsMapObject<ProductExtraInformationData> = {
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