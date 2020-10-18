/* eslint-disable react-hooks/rules-of-hooks */
import { useLoadingAction, useProductAction } from '@stores/actions';
import { Product } from '@stores/models';
import { PRODUCT_TYPE } from '@stores/types';
import { call, put, takeLatest } from 'redux-saga/effects';
import { ProductService } from '@services';
import { ProductCM, ProductUM } from '@view-models';

export const useProductSaga = () => {
  function* useInit() {
    yield takeLatest(PRODUCT_TYPE.GETALL.FETCH, useGetAll);
    yield takeLatest(PRODUCT_TYPE.CREATE.FETCH, useCreate);
    yield takeLatest(PRODUCT_TYPE.UPDATE.FETCH, useUpdate);
    yield takeLatest(PRODUCT_TYPE.REMOVE.FETCH, useRemove);
    yield takeLatest(PRODUCT_TYPE.ACTIVE.FETCH, useActive);
    yield takeLatest(PRODUCT_TYPE.DEACTIVE.FETCH, useDeactive);
  }
  function* useGetAll(action: Product) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(ProductService.findAll);
      yield put(useProductAction().getAllSuccess(data, action.onSuccess));
    } catch (error) {
      yield put(useProductAction().getAllError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useCreate(action: Product) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(ProductService.insert, action.payload.data as ProductCM);
      yield put(useProductAction().createSuccess(data, action.onSuccess));
    } catch (error) {
      yield put(useProductAction().createError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useUpdate(action: Product) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(ProductService.update, action.payload.data as ProductUM);
      yield put(useProductAction().updateSuccess(data, action.onSuccess));
    } catch (error) {
      yield put(useProductAction().updateError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useRemove(action: Product) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(ProductService.remove, action.payload.data as string);
      yield put(useProductAction().removeSuccess(action.payload.data as string, action.onSuccess));
    } catch (error) {
      yield put(useProductAction().removeError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useActive(action: Product) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(ProductService.active, action.payload.data as string[]);
      yield put(useProductAction().activeSuccess(action.payload.data as string[], action.onSuccess));
    } catch (error) {
      yield put(useProductAction().activeError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useDeactive(action: Product) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(ProductService.deactive, action.payload.data as string[]);
      yield put(useProductAction().deactiveSuccess(action.payload.data as string[], action.onSuccess));
    } catch (error) {
      yield put(useProductAction().deactiveError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  return { useInit };
};