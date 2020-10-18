/* eslint-disable react-hooks/rules-of-hooks */
import { useLoadingAction, useExtraInformationAction } from '@stores/actions';
import { ExtraInformation } from '@stores/models';
import { EXTRA_INFORMATION_TYPE } from '@stores/types';
import { call, put, takeLatest } from 'redux-saga/effects';
import { ExtraInformationService } from '@services';
import { ExtraInformationCM, ExtraInformationUM } from '@view-models';

export const useExtraInformationSaga = () => {
  function* useInit() {
    yield takeLatest(EXTRA_INFORMATION_TYPE.GETALL.FETCH, useGetAll);
    yield takeLatest(EXTRA_INFORMATION_TYPE.CREATE.FETCH, useCreate);
    yield takeLatest(EXTRA_INFORMATION_TYPE.UPDATE.FETCH, useUpdate);
    yield takeLatest(EXTRA_INFORMATION_TYPE.REMOVE.FETCH, useRemove);
    yield takeLatest(EXTRA_INFORMATION_TYPE.ACTIVE.FETCH, useActive);
    yield takeLatest(EXTRA_INFORMATION_TYPE.DEACTIVE.FETCH, useDeactive);
  }
  function* useGetAll(action: ExtraInformation) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(ExtraInformationService.findAll, action.payload.data as 'customer' | 'account' | 'product');
      yield put(useExtraInformationAction().getAllSuccess(data, action.onSuccess));
    } catch (error) {
      yield put(useExtraInformationAction().getAllError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useCreate(action: ExtraInformation) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(ExtraInformationService.insert, action.payload.data as ExtraInformationCM);
      yield put(useExtraInformationAction().createSuccess(data, action.onSuccess));
    } catch (error) {
      yield put(useExtraInformationAction().createError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useUpdate(action: ExtraInformation) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(ExtraInformationService.update, action.payload.data as ExtraInformationUM[]);
      yield put(useExtraInformationAction().updateSuccess(data, action.onSuccess));
    } catch (error) {
      yield put(useExtraInformationAction().updateError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useRemove(action: ExtraInformation) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(ExtraInformationService.remove, action.payload.data as string);
      yield put(useExtraInformationAction().removeSuccess(action.payload.data as string, action.onSuccess));
    } catch (error) {
      yield put(useExtraInformationAction().removeError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useActive(action: ExtraInformation) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(ExtraInformationService.active, action.payload.data as string[]);
      yield put(useExtraInformationAction().activeSuccess(action.payload.data as string[], action.onSuccess));
    } catch (error) {
      yield put(useExtraInformationAction().activeError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useDeactive(action: ExtraInformation) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(ExtraInformationService.deactive, action.payload.data as string[]);
      yield put(useExtraInformationAction().deactiveSuccess(action.payload.data as string[], action.onSuccess));
    } catch (error) {
      yield put(useExtraInformationAction().deactiveError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }

  return { useInit };
};