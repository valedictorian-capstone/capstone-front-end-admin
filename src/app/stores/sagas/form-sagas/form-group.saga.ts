
/* eslint-disable react-hooks/rules-of-hooks */
import { useLoadingAction, useFormGroupAction } from '@stores/actions';
import { FormGroup } from '@stores/models';
import { FORM_GROUP_TYPE } from '@stores/types';
import { call, put, takeLatest } from 'redux-saga/effects';
import { FormGroupService } from '@services';
import { FormGroupCM, FormGroupUM } from '@view-models';

export const useFormGroupSaga = () => {
  function* useInit() {
    yield takeLatest(FORM_GROUP_TYPE.GETALL.FETCH, useGetAll);
    yield takeLatest(FORM_GROUP_TYPE.CREATE.FETCH, useCreate);
    yield takeLatest(FORM_GROUP_TYPE.UPDATE.FETCH, useUpdate);
    yield takeLatest(FORM_GROUP_TYPE.REMOVE.FETCH, useRemove);
    yield takeLatest(FORM_GROUP_TYPE.ACTIVE.FETCH, useActive);
    yield takeLatest(FORM_GROUP_TYPE.DEACTIVE.FETCH, useDeactive);
  }
  function* useGetAll() {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(FormGroupService.findAll);
      yield put(useFormGroupAction().getAllSuccess(data));
    } catch (error) {
      yield put(useFormGroupAction().getAllError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useCreate(action: FormGroup) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(FormGroupService.insert, action.payload.data as FormGroupCM);
      yield put(useFormGroupAction().createSuccess(data));
    } catch (error) {
      yield put(useFormGroupAction().createError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useUpdate(action: FormGroup) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(FormGroupService.update, action.payload.data as FormGroupUM);
      yield put(useFormGroupAction().updateSuccess(data));
    } catch (error) {
      yield put(useFormGroupAction().updateError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useRemove(action: FormGroup) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(FormGroupService.remove, action.payload.data as string);
      yield put(useFormGroupAction().removeSuccess(action.payload.data as string));
    } catch (error) {
      yield put(useFormGroupAction().removeError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useActive(action: FormGroup) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(FormGroupService.active, action.payload.data as string[]);
      yield put(useFormGroupAction().activeSuccess(action.payload.data as string[]));
    } catch (error) {
      yield put(useFormGroupAction().activeError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useDeactive(action: FormGroup) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(FormGroupService.deactive, action.payload.data as string[]);
      yield put(useFormGroupAction().deactiveSuccess(action.payload.data as string[]));
    } catch (error) {
      yield put(useFormGroupAction().deactiveError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }

  return { useInit };
};