/* eslint-disable react-hooks/rules-of-hooks */
import { useLoadingAction, useCustomerAction } from '@stores/actions';
import { Customer } from '@stores/models';
import { CUSTOMER_TYPE } from '@stores/types';
import { call, put, takeLatest } from 'redux-saga/effects';
import { CustomerService } from '@services';
import { CustomerCM, CustomerUM } from '@view-models';

export const useCustomerSaga = () => {
  function* useInit() {
    yield takeLatest(CUSTOMER_TYPE.GETALL.FETCH, useGetAll);
    yield takeLatest(CUSTOMER_TYPE.CREATE.FETCH, useCreate);
    yield takeLatest(CUSTOMER_TYPE.UPDATE.FETCH, useUpdate);
    yield takeLatest(CUSTOMER_TYPE.REMOVE.FETCH, useRemove);
  }
  function* useGetAll() {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(CustomerService.findAll);
      yield put(useCustomerAction().getAllSuccess(data));
    } catch (error) {
      yield put(useCustomerAction().getAllError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useCreate(action: Customer) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(CustomerService.insert, action.payload.data as CustomerCM);
      yield put(useCustomerAction().createSuccess(data));
    } catch (error) {
      yield put(useCustomerAction().createError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useUpdate(action: Customer) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(CustomerService.update, action.payload.data as CustomerUM);
      yield put(useCustomerAction().updateSuccess(data));
    } catch (error) {
      yield put(useCustomerAction().updateError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useRemove(action: Customer) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(CustomerService.remove, action.payload.data as string);
      yield put(useCustomerAction().removeSuccess(data));
    } catch (error) {
      yield put(useCustomerAction().removeError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }

  return { useInit };
};