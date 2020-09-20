/* eslint-disable react-hooks/rules-of-hooks */
import { useLoadingAction, useAccountExtraInformationAction } from '@stores/actions';
import { AccountExtraInformation } from '@stores/models';
import { ACCOUNT_EXTRA_INFORMATION_TYPE } from '@stores/types';
import { call, put, takeLatest } from 'redux-saga/effects';
import { AccountExtraInformationService } from '@services';
import { AccountExtraInformationCM, AccountExtraInformationUM } from '@view-models';

export const useAccountExtraInformationSaga = () => {
  function* useInit() {
    yield takeLatest(ACCOUNT_EXTRA_INFORMATION_TYPE.GETALL.FETCH, useGetAll);
    yield takeLatest(ACCOUNT_EXTRA_INFORMATION_TYPE.CREATE.FETCH, useCreate);
    yield takeLatest(ACCOUNT_EXTRA_INFORMATION_TYPE.UPDATE.FETCH, useUpdate);
    yield takeLatest(ACCOUNT_EXTRA_INFORMATION_TYPE.REMOVE.FETCH, useRemove);
  }
  function* useGetAll() {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(AccountExtraInformationService.findAll);
      yield put(useAccountExtraInformationAction().getAllSuccess(data));
    } catch (error) {
      yield put(useAccountExtraInformationAction().getAllError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useCreate(action: AccountExtraInformation) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(AccountExtraInformationService.insert, action.payload.data as AccountExtraInformationCM);
      yield put(useAccountExtraInformationAction().createSuccess(data));
    } catch (error) {
      yield put(useAccountExtraInformationAction().createError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useUpdate(action: AccountExtraInformation) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(AccountExtraInformationService.update, action.payload.data as AccountExtraInformationUM);
      yield put(useAccountExtraInformationAction().updateSuccess(data));
    } catch (error) {
      yield put(useAccountExtraInformationAction().updateError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useRemove(action: AccountExtraInformation) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(AccountExtraInformationService.remove, action.payload.data as string);
      yield put(useAccountExtraInformationAction().removeSuccess(data));
    } catch (error) {
      yield put(useAccountExtraInformationAction().removeError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }

  return { useInit };
};