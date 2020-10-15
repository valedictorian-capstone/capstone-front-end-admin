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
    yield takeLatest(CUSTOMER_EXTRA_INFORMATION_TYPE.ACTIVE.FETCH, useActive);
    yield takeLatest(CUSTOMER_EXTRA_INFORMATION_TYPE.DEACTIVE.FETCH, useDeactive);
  }
  function* useGetAll(action: CustomerExtraInformation) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(CustomerExtraInformationService.findAll);
      yield put(useCustomerExtraInformationAction().getAllSuccess(data, action.onSuccess));
    } catch (error) {
      yield put(useCustomerExtraInformationAction().getAllError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useCreate(action: CustomerExtraInformation) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(CustomerExtraInformationService.insert, action.payload.data as CustomerExtraInformationCM);
      yield put(useCustomerExtraInformationAction().createSuccess(data, action.onSuccess));
    } catch (error) {
      yield put(useCustomerExtraInformationAction().createError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useUpdate(action: CustomerExtraInformation) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(CustomerExtraInformationService.update, action.payload.data as CustomerExtraInformationUM[]);
      yield put(useCustomerExtraInformationAction().updateSuccess(data, action.onSuccess));
    } catch (error) {
      yield put(useCustomerExtraInformationAction().updateError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useRemove(action: CustomerExtraInformation) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(CustomerExtraInformationService.remove, action.payload.data as string);
      yield put(useCustomerExtraInformationAction().removeSuccess(action.payload.data as string, action.onSuccess));
    } catch (error) {
      yield put(useCustomerExtraInformationAction().removeError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useActive(action: CustomerExtraInformation) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(CustomerExtraInformationService.active, action.payload.data as string[]);
      yield put(useCustomerExtraInformationAction().activeSuccess(action.payload.data as string[], action.onSuccess));
    } catch (error) {
      yield put(useCustomerExtraInformationAction().activeError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useDeactive(action: CustomerExtraInformation) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(CustomerExtraInformationService.deactive, action.payload.data as string[]);
      yield put(useCustomerExtraInformationAction().deactiveSuccess(action.payload.data as string[], action.onSuccess));
    } catch (error) {
      yield put(useCustomerExtraInformationAction().deactiveError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }

  return { useInit };
};