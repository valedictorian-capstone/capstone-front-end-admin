
/* eslint-disable react-hooks/rules-of-hooks */
import { useLoadingAction, useFormControlAction } from '@stores/actions';
import { FormControl } from '@stores/models';
import { FORM_CONTROL_TYPE } from '@stores/types';
import { call, put, takeLatest } from 'redux-saga/effects';
import { FormControlService } from '@services';
import { FormControlCM, FormControlUM } from '@view-models';

export const useFormControlSaga = () => {
  function* useInit() {
    yield takeLatest(FORM_CONTROL_TYPE.GETALL.FETCH, useGetAll);
    yield takeLatest(FORM_CONTROL_TYPE.CREATE.FETCH, useCreate);
    yield takeLatest(FORM_CONTROL_TYPE.UPDATE.FETCH, useUpdate);
    yield takeLatest(FORM_CONTROL_TYPE.REMOVE.FETCH, useRemove);
  }
  function* useGetAll() {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(FormControlService.findAll);
      yield put(useFormControlAction().getAllSuccess(data));
    } catch (error) {
      yield put(useFormControlAction().getAllError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useCreate(action: FormControl) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(FormControlService.insert, action.payload.data as FormControlCM);
      yield put(useFormControlAction().createSuccess(data));
    } catch (error) {
      yield put(useFormControlAction().createError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useUpdate(action: FormControl) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(FormControlService.update, action.payload.data as FormControlUM);
      yield put(useFormControlAction().updateSuccess(data));
    } catch (error) {
      yield put(useFormControlAction().updateError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useRemove(action: FormControl) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(FormControlService.remove, action.payload.data as string);
      yield put(useFormControlAction().removeSuccess(data));
    } catch (error) {
      yield put(useFormControlAction().removeError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }

  return { useInit };
};