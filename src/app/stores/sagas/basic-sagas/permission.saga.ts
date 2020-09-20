/* eslint-disable react-hooks/rules-of-hooks */
import { useLoadingAction, usePermissionAction } from '@stores/actions';
import { Permission } from '@stores/models';
import { PERMISSION_TYPE } from '@stores/types';
import { call, put, takeLatest } from 'redux-saga/effects';
import { PermissionService } from '@services';
import { PermissionCM, PermissionUM } from '@view-models';

export const usePermissionSaga = () => {
  function* useInit() {
    yield takeLatest(PERMISSION_TYPE.GETALL.FETCH, useGetAll);
    yield takeLatest(PERMISSION_TYPE.CREATE.FETCH, useCreate);
    yield takeLatest(PERMISSION_TYPE.UPDATE.FETCH, useUpdate);
    yield takeLatest(PERMISSION_TYPE.REMOVE.FETCH, useRemove);
  }
  function* useGetAll() {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(PermissionService.findAll);
      yield put(usePermissionAction().getAllSuccess(data));
    } catch (error) {
      yield put(usePermissionAction().getAllError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useCreate(action: Permission) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(PermissionService.insert, action.payload.data as PermissionCM);
      yield put(usePermissionAction().createSuccess(data));
    } catch (error) {
      yield put(usePermissionAction().createError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useUpdate(action: Permission) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(PermissionService.update, action.payload.data as PermissionUM);
      yield put(usePermissionAction().updateSuccess(data));
    } catch (error) {
      yield put(usePermissionAction().updateError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useRemove(action: Permission) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(PermissionService.remove, action.payload.data as string);
      yield put(usePermissionAction().removeSuccess(data));
    } catch (error) {
      yield put(usePermissionAction().removeError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }

  return { useInit };
};