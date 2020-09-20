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
  }
  function* useGetAll() {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(DepartmentService.findAll);
      yield put(useDepartmentAction().getAllSuccess(data));
    } catch (error) {
      yield put(useDepartmentAction().getAllError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useCreate(action: Department) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(DepartmentService.insert, action.payload.data as DepartmentCM);
      yield put(useDepartmentAction().createSuccess(data));
    } catch (error) {
      yield put(useDepartmentAction().createError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useUpdate(action: Department) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(DepartmentService.update, action.payload.data as DepartmentUM);
      yield put(useDepartmentAction().updateSuccess(data));
    } catch (error) {
      yield put(useDepartmentAction().updateError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useRemove(action: Department) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(DepartmentService.remove, action.payload.data as string);
      yield put(useDepartmentAction().removeSuccess(data));
    } catch (error) {
      yield put(useDepartmentAction().removeError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }

  return { useInit };
};