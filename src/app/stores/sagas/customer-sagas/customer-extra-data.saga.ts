/* eslint-disable react-hooks/rules-of-hooks */
import { useLoadingAction, useCustomerExtraDataAction } from '@stores/actions';
import { CustomerExtraData } from '@stores/models';
import { CUSTOMER_EXTRA_DATA_TYPE } from '@stores/types';
import { call, put, takeLatest } from 'redux-saga/effects';
import { CustomerExtraDataService } from '@services';
import { CustomerExtraDataCM, CustomerExtraDataUM } from '@view-models';

export const useCustomerExtraDataSaga = () => {
  function* useInit() {
    yield takeLatest(CUSTOMER_EXTRA_DATA_TYPE.GETALL.FETCH, useGetAll);
    yield takeLatest(CUSTOMER_EXTRA_DATA_TYPE.CREATE.FETCH, useCreate);
    yield takeLatest(CUSTOMER_EXTRA_DATA_TYPE.UPDATE.FETCH, useUpdate);
    yield takeLatest(CUSTOMER_EXTRA_DATA_TYPE.REMOVE.FETCH, useRemove);
  }
  function* useGetAll() {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(CustomerExtraDataService.findAll);
      yield put(useCustomerExtraDataAction().getAllSuccess(data));
    } catch (error) {
      yield put(useCustomerExtraDataAction().getAllError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useCreate(action: CustomerExtraData) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(CustomerExtraDataService.insert, action.payload.data as CustomerExtraDataCM);
      yield put(useCustomerExtraDataAction().createSuccess(data));
    } catch (error) {
      yield put(useCustomerExtraDataAction().createError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useUpdate(action: CustomerExtraData) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(CustomerExtraDataService.update, action.payload.data as CustomerExtraDataUM);
      yield put(useCustomerExtraDataAction().updateSuccess(data));
    } catch (error) {
      yield put(useCustomerExtraDataAction().updateError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useRemove(action: CustomerExtraData) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(CustomerExtraDataService.remove, action.payload.data as string);
      yield put(useCustomerExtraDataAction().removeSuccess(data));
    } catch (error) {
      yield put(useCustomerExtraDataAction().removeError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }

  return { useInit };
};