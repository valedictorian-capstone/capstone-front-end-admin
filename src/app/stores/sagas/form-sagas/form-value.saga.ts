
/* eslint-disable react-hooks/rules-of-hooks */
import { useLoadingAction, useFormValueAction } from '@stores/actions';
import { FormValue } from '@stores/models';
import { FORM_VALUE_TYPE } from '@stores/types';
import { call, put, takeLatest } from 'redux-saga/effects';
import { FormValueService } from '@services';
import { FormValueCM, FormValueUM } from '@view-models';

export const useFormValueSaga = () => {
  function* useInit() {
    yield takeLatest(FORM_VALUE_TYPE.GETALL.FETCH, useGetAll);
    yield takeLatest(FORM_VALUE_TYPE.CREATE.FETCH, useCreate);
    yield takeLatest(FORM_VALUE_TYPE.UPDATE.FETCH, useUpdate);
    yield takeLatest(FORM_VALUE_TYPE.REMOVE.FETCH, useRemove);
  }
  function* useGetAll() {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(FormValueService.findAll);
      yield put(useFormValueAction().getAllSuccess(data));
    } catch (error) {
      yield put(useFormValueAction().getAllError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useCreate(action: FormValue) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(FormValueService.insert, action.payload.data as FormValueCM);
      yield put(useFormValueAction().createSuccess(data));
    } catch (error) {
      yield put(useFormValueAction().createError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useUpdate(action: FormValue) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(FormValueService.update, action.payload.data as FormValueUM);
      yield put(useFormValueAction().updateSuccess(data));
    } catch (error) {
      yield put(useFormValueAction().updateError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useRemove(action: FormValue) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(FormValueService.remove, action.payload.data as string);
      yield put(useFormValueAction().removeSuccess(data));
    } catch (error) {
      yield put(useFormValueAction().removeError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }

  return { useInit };
};