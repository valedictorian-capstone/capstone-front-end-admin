import { useLoadingAction, useAccountExtraDataAction } from '@stores/actions';
import { AccountExtraData } from '@stores/models';
import { ACCOUNT_EXTRA_DATA_TYPE } from '@stores/types';
import { call, put, takeLatest } from 'redux-saga/effects';
import { AccountExtraDataService } from '@services';
import { AccountExtraDataCM, AccountExtraDataUM } from '@view-models';

export const useAccountExtraDataSaga = () => {
  function* useInit() {
    yield takeLatest(ACCOUNT_EXTRA_DATA_TYPE.GETALL.FETCH, useGetAll);
    yield takeLatest(ACCOUNT_EXTRA_DATA_TYPE.CREATE.FETCH, useCreate);
    yield takeLatest(ACCOUNT_EXTRA_DATA_TYPE.UPDATE.FETCH, useUpdate);
    yield takeLatest(ACCOUNT_EXTRA_DATA_TYPE.REMOVE.FETCH, useRemove);
  }
  function* useGetAll() {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(AccountExtraDataService.findAll);
      yield put(useAccountExtraDataAction().getAllSuccess(data));
    } catch (error) {
      yield put(useAccountExtraDataAction().getAllError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useCreate(action: AccountExtraData) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(AccountExtraDataService.insert, action.payload.data as AccountExtraDataCM);
      yield put(useAccountExtraDataAction().createSuccess(data));
    } catch (error) {
      yield put(useAccountExtraDataAction().createError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useUpdate(action: AccountExtraData) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(AccountExtraDataService.update, action.payload.data as AccountExtraDataUM);
      yield put(useAccountExtraDataAction().updateSuccess(data));
    } catch (error) {
      yield put(useAccountExtraDataAction().updateError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useRemove(action: AccountExtraData) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(AccountExtraDataService.remove, action.payload.data as string);
      yield put(useAccountExtraDataAction().removeSuccess(data));
    } catch (error) {
      yield put(useAccountExtraDataAction().removeError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }

  return { useInit };
};