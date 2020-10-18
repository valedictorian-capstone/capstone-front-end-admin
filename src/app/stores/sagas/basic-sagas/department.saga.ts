/* eslint-disable react-hooks/rules-of-hooks */
import { useLoadingAction, useDepartmentAction } from '@stores/actions';
import { Department } from '@stores/models';
import { DEPARTMENT_TYPE } from '@stores/types';
import { call, put, takeLatest } from 'redux-saga/effects';
import { DepartmentService } from '@services';
import { DepartmentCM, DepartmentUM } from '@view-models';

export const useDepartmentSaga = () => {
  function* useInit() {
    yield takeLatest(DEPARTMENT_TYPE.GETALL.FETCH, useGetAll);
    yield takeLatest(DEPARTMENT_TYPE.CREATE.FETCH, useCreate);
    yield takeLatest(DEPARTMENT_TYPE.UPDATE.FETCH, useUpdate);
    yield takeLatest(DEPARTMENT_TYPE.REMOVE.FETCH, useRemove);
    yield takeLatest(DEPARTMENT_TYPE.ACTIVE.FETCH, useActive);
    yield takeLatest(DEPARTMENT_TYPE.DEACTIVE.FETCH, useDeactive);
  }
  function* useGetAll(action: Department) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(DepartmentService.findAll);
      yield put(useDepartmentAction().getAllSuccess(data, action.onSuccess));
    } catch (error) {
      yield put(useDepartmentAction().getAllError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useCreate(action: Department) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(DepartmentService.insert, action.payload.data as DepartmentCM);
      yield put(useDepartmentAction().createSuccess(data, action.onSuccess));
    } catch (error) {
      yield put(useDepartmentAction().createError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useUpdate(action: Department) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(DepartmentService.update, action.payload.data as DepartmentUM);
      yield put(useDepartmentAction().updateSuccess(data, action.onSuccess));
    } catch (error) {
      yield put(useDepartmentAction().updateError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useRemove(action: Department) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(DepartmentService.remove, action.payload.data as string);
      yield put(useDepartmentAction().removeSuccess(action.payload.data as string, action.onSuccess));
    } catch (error) {
      yield put(useDepartmentAction().removeError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useActive(action: Department) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(DepartmentService.active, action.payload.data as string[]);
      yield put(useDepartmentAction().activeSuccess(action.payload.data as string[], action.onSuccess));
    } catch (error) {
      yield put(useDepartmentAction().activeError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useDeactive(action: Department) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(DepartmentService.deactive, action.payload.data as string[]);
      yield put(useDepartmentAction().deactiveSuccess(action.payload.data as string[], action.onSuccess));
    } catch (error) {
      yield put(useDepartmentAction().deactiveError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  return { useInit };
};