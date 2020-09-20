import { useLoadingAction, useAccountExtraInformationDataAction } from '@stores/actions';
import { AccountExtraInformationData } from '@stores/models';
import { ACCOUNT_EXTRA_INFORMATION_DATA_TYPE } from '@stores/types';
import { call, put, takeLatest } from 'redux-saga/effects';
import { AccountExtraInformationDataService } from '@services';
import { AccountExtraInformationDataCM, AccountExtraInformationDataUM } from '@view-models';

export const useAccountExtraInformationDataSaga = () => {
  function* useInit() {
    yield takeLatest(ACCOUNT_EXTRA_INFORMATION_DATA_TYPE.GETALL.FETCH, useGetAll);
    yield takeLatest(ACCOUNT_EXTRA_INFORMATION_DATA_TYPE.CREATE.FETCH, useCreate);
    yield takeLatest(ACCOUNT_EXTRA_INFORMATION_DATA_TYPE.UPDATE.FETCH, useUpdate);
    yield takeLatest(ACCOUNT_EXTRA_INFORMATION_DATA_TYPE.REMOVE.FETCH, useRemove);
  }
  function* useGetAll() {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(AccountExtraInformationDataService.findAll);
      yield put(useAccountExtraInformationDataAction().getAllSuccess(data));
    } catch (error) {
      yield put(useAccountExtraInformationDataAction().getAllError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useCreate(action: AccountExtraInformationData) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(AccountExtraInformationDataService.insert, action.payload.data as AccountExtraInformationDataCM);
      yield put(useAccountExtraInformationDataAction().createSuccess(data));
    } catch (error) {
      yield put(useAccountExtraInformationDataAction().createError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useUpdate(action: AccountExtraInformationData) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(AccountExtraInformationDataService.update, action.payload.data as AccountExtraInformationDataUM);
      yield put(useAccountExtraInformationDataAction().updateSuccess(data));
    } catch (error) {
      yield put(useAccountExtraInformationDataAction().updateError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useRemove(action: AccountExtraInformationData) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(AccountExtraInformationDataService.remove, action.payload.data as string);
      yield put(useAccountExtraInformationDataAction().removeSuccess(data));
    } catch (error) {
      yield put(useAccountExtraInformationDataAction().removeError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }

  return { useInit };
};