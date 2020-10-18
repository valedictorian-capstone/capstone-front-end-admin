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
    yield takeLatest(ROLE_TYPE.ACTIVE.FETCH, useActive);
    yield takeLatest(ROLE_TYPE.DEACTIVE.FETCH, useDeactive);
  }
  function* useGetAll(action: Role) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(RoleService.findAll);
      yield put(useRoleAction().getAllSuccess(data, action.onSuccess));
    } catch (error) {
      yield put(useRoleAction().getAllError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useCreate(action: Role) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(RoleService.insert, action.payload.data as RoleCM);
      yield put(useRoleAction().createSuccess(data, action.onSuccess));
    } catch (error) {
      yield put(useRoleAction().createError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useUpdate(action: Role) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(RoleService.update, action.payload.data as RoleUM);
      yield put(useRoleAction().updateSuccess(data, action.onSuccess));
    } catch (error) {
      yield put(useRoleAction().updateError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useRemove(action: Role) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(RoleService.remove, action.payload.data as string);
      yield put(useRoleAction().removeSuccess(action.payload.data as string, action.onSuccess));
    } catch (error) {
      yield put(useRoleAction().removeError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useActive(action: Role) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(RoleService.active, action.payload.data as string[]);
      yield put(useRoleAction().activeSuccess(action.payload.data as string[], action.onSuccess));
    } catch (error) {
      yield put(useRoleAction().activeError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useDeactive(action: Role) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(RoleService.deactive, action.payload.data as string[]);
      yield put(useRoleAction().deactiveSuccess(action.payload.data as string[], action.onSuccess));
    } catch (error) {
      yield put(useRoleAction().deactiveError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  return { useInit };
};