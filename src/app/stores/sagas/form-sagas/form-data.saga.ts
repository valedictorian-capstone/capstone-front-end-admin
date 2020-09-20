
/* eslint-disable react-hooks/rules-of-hooks */
import { useLoadingAction, useFormDataAction } from '@stores/actions';
import { FormData } from '@stores/models';
import { FORM_DATA_TYPE } from '@stores/types';
import { call, put, takeLatest } from 'redux-saga/effects';
import { FormDataService } from '@services';
import { FormDataCM, FormDataUM } from '@view-models';

export const useFormDataSaga = () => {
  function* useInit() {
    yield takeLatest(FORM_DATA_TYPE.GETALL.FETCH, useGetAll);
    yield takeLatest(FORM_DATA_TYPE.CREATE.FETCH, useCreate);
    yield takeLatest(FORM_DATA_TYPE.UPDATE.FETCH, useUpdate);
    yield takeLatest(FORM_DATA_TYPE.REMOVE.FETCH, useRemove);
  }
  function* useGetAll() {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(FormDataService.findAll);
      yield put(useFormDataAction().getAllSuccess(data));
    } catch (error) {
      yield put(useFormDataAction().getAllError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useCreate(action: FormData) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(FormDataService.insert, action.payload.data as FormDataCM);
      yield put(useFormDataAction().createSuccess(data));
    } catch (error) {
      yield put(useFormDataAction().createError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useUpdate(action: FormData) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(FormDataService.update, action.payload.data as FormDataUM);
      yield put(useFormDataAction().updateSuccess(data));
    } catch (error) {
      yield put(useFormDataAction().updateError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useRemove(action: FormData) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(FormDataService.remove, action.payload.data as string);
      yield put(useFormDataAction().removeSuccess(data));
    } catch (error) {
      yield put(useFormDataAction().removeError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }

  return { useInit };
};