/* eslint-disable react-hooks/rules-of-hooks */
import { useLoadingAction, useRoleAction } from '@stores/actions';
import { Role } from '@stores/models';
import { ROLE_TYPE } from '@stores/types';
import { call, put, takeLatest } from 'redux-saga/effects';
import { RoleService } from '@services';
import { RoleCM, RoleUM } from '@view-models';

export const useRoleSaga = () => {
  function* useInit() {
    yield takeLatest(ROLE_TYPE.GETALL.FETCH, useGetAll);
    yield takeLatest(ROLE_TYPE.CREATE.FETCH, useCreate);
    yield takeLatest(ROLE_TYPE.UPDATE.FETCH, useUpdate);
    yield takeLatest(ROLE_TYPE.REMOVE.FETCH, useRemove);
  }
  function* useGetAll() {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(RoleService.findAll);
      yield put(useRoleAction().getAllSuccess(data));
    } catch (error) {
      yield put(useRoleAction().getAllError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useCreate(action: Role) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(RoleService.insert, action.payload.data as RoleCM);
      yield put(useRoleAction().createSuccess(data));
    } catch (error) {
      yield put(useRoleAction().createError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useUpdate(action: Role) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(RoleService.update, action.payload.data as RoleUM);
      yield put(useRoleAction().updateSuccess(data));
    } catch (error) {
      yield put(useRoleAction().updateError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useRemove(action: Role) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(RoleService.remove, action.payload.data as string);
      yield put(useRoleAction().removeSuccess(data));
    } catch (error) {
      yield put(useRoleAction().removeError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }

  return { useInit };
};