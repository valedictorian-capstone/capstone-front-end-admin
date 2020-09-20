/* eslint-disable react-hooks/rules-of-hooks */
import { useLoadingAction, useCustomerExtraInformationDataAction } from '@stores/actions';
import { CustomerExtraInformationData } from '@stores/models';
import { CUSTOMER_EXTRA_INFORMATION_DATA_TYPE } from '@stores/types';
import { call, put, takeLatest } from 'redux-saga/effects';
import { CustomerExtraInformationDataService } from '@services';
import { CustomerExtraInformationDataCM, CustomerExtraInformationDataUM } from '@view-models';

export const useCustomerExtraInformationDataSaga = () => {
  function* useInit() {
    yield takeLatest(CUSTOMER_EXTRA_INFORMATION_DATA_TYPE.GETALL.FETCH, useGetAll);
    yield takeLatest(CUSTOMER_EXTRA_INFORMATION_DATA_TYPE.CREATE.FETCH, useCreate);
    yield takeLatest(CUSTOMER_EXTRA_INFORMATION_DATA_TYPE.UPDATE.FETCH, useUpdate);
    yield takeLatest(CUSTOMER_EXTRA_INFORMATION_DATA_TYPE.REMOVE.FETCH, useRemove);
  }
  function* useGetAll() {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(CustomerExtraInformationDataService.findAll);
      yield put(useCustomerExtraInformationDataAction().getAllSuccess(data));
    } catch (error) {
      yield put(useCustomerExtraInformationDataAction().getAllError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useCreate(action: CustomerExtraInformationData) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(CustomerExtraInformationDataService.insert, action.payload.data as CustomerExtraInformationDataCM);
      yield put(useCustomerExtraInformationDataAction().createSuccess(data));
    } catch (error) {
      yield put(useCustomerExtraInformationDataAction().createError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useUpdate(action: CustomerExtraInformationData) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(CustomerExtraInformationDataService.update, action.payload.data as CustomerExtraInformationDataUM);
      yield put(useCustomerExtraInformationDataAction().updateSuccess(data));
    } catch (error) {
      yield put(useCustomerExtraInformationDataAction().updateError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useRemove(action: CustomerExtraInformationData) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(CustomerExtraInformationDataService.remove, action.payload.data as string);
      yield put(useCustomerExtraInformationDataAction().removeSuccess(data));
    } catch (error) {
      yield put(useCustomerExtraInformationDataAction().removeError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }

  return { useInit };
};