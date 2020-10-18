/* eslint-disable react-hooks/rules-of-hooks */
import { useLoadingAction, useAccountAction } from '@stores/actions';
import { Account } from '@stores/models';
import { ACCOUNT_TYPE } from '@stores/types';
import { call, put, takeLatest } from 'redux-saga/effects';
import { AccountService } from '@services';
import { AccountCM, AccountUM } from '@view-models';

export const useAccountSaga = () => {
  function* useInit() {
    yield takeLatest(ACCOUNT_TYPE.GETALL.FETCH, useGetAll);
    yield takeLatest(ACCOUNT_TYPE.CREATE.FETCH, useCreate);
    yield takeLatest(ACCOUNT_TYPE.UPDATE.FETCH, useUpdate);
    yield takeLatest(ACCOUNT_TYPE.REMOVE.FETCH, useRemove);
    yield takeLatest(ACCOUNT_TYPE.ACTIVE.FETCH, useActive);
    yield takeLatest(ACCOUNT_TYPE.DEACTIVE.FETCH, useDeactive);
  }
  function* useGetAll(action: Account) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(AccountService.findAll);
      yield put(useAccountAction().getAllSuccess(data, action.onSuccess));
    } catch (error) {
      yield put(useAccountAction().getAllError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useCreate(action: Account) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(AccountService.insert, action.payload.data as AccountCM);
      yield put(useAccountAction().createSuccess(data, action.onSuccess));
    } catch (error) {
      yield put(useAccountAction().createError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useUpdate(action: Account) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(AccountService.update, action.payload.data as AccountUM);
      yield put(useAccountAction().updateSuccess(data, action.onSuccess));
    } catch (error) {
      yield put(useAccountAction().updateError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useRemove(action: Account) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(AccountService.remove, action.payload.data as string);
      yield put(useAccountAction().removeSuccess(action.payload.data as string, action.onSuccess));
    } catch (error) {
      yield put(useAccountAction().removeError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useActive(action: Account) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(AccountService.active, action.payload.data as string[]);
      yield put(useAccountAction().activeSuccess(action.payload.data as string[], action.onSuccess));
    } catch (error) {
      yield put(useAccountAction().activeError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useDeactive(action: Account) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(AccountService.deactive, action.payload.data as string[]);
      yield put(useAccountAction().deactiveSuccess(action.payload.data as string[], action.onSuccess));
    } catch (error) {
      yield put(useAccountAction().deactiveError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  return { useInit };
};