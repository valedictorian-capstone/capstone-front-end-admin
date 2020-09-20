/* eslint-disable react-hooks/rules-of-hooks */
import { useLoadingAction, useCustomerExtraInformationAction } from '@stores/actions';
import { CustomerExtraInformation } from '@stores/models';
import { CUSTOMER_EXTRA_INFORMATION_TYPE } from '@stores/types';
import { call, put, takeLatest } from 'redux-saga/effects';
import { CustomerExtraInformationService } from '@services';
import { CustomerExtraInformationCM, CustomerExtraInformationUM } from '@view-models';

export const useCustomerExtraInformationSaga = () => {
  function* useInit() {
    yield takeLatest(CUSTOMER_EXTRA_INFORMATION_TYPE.GETALL.FETCH, useGetAll);
    yield takeLatest(CUSTOMER_EXTRA_INFORMATION_TYPE.CREATE.FETCH, useCreate);
    yield takeLatest(CUSTOMER_EXTRA_INFORMATION_TYPE.UPDATE.FETCH, useUpdate);
    yield takeLatest(CUSTOMER_EXTRA_INFORMATION_TYPE.REMOVE.FETCH, useRemove);
  }
  function* useGetAll() {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(CustomerExtraInformationService.findAll);
      yield put(useCustomerExtraInformationAction().getAllSuccess(data));
    } catch (error) {
      yield put(useCustomerExtraInformationAction().getAllError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useCreate(action: CustomerExtraInformation) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(CustomerExtraInformationService.insert, action.payload.data as CustomerExtraInformationCM);
      yield put(useCustomerExtraInformationAction().createSuccess(data));
    } catch (error) {
      yield put(useCustomerExtraInformationAction().createError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useUpdate(action: CustomerExtraInformation) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(CustomerExtraInformationService.update, action.payload.data as CustomerExtraInformationUM);
      yield put(useCustomerExtraInformationAction().updateSuccess(data));
    } catch (error) {
      yield put(useCustomerExtraInformationAction().updateError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useRemove(action: CustomerExtraInformation) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(CustomerExtraInformationService.remove, action.payload.data as string);
      yield put(useCustomerExtraInformationAction().removeSuccess(data));
    } catch (error) {
      yield put(useCustomerExtraInformationAction().removeError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }

  return { useInit };
};