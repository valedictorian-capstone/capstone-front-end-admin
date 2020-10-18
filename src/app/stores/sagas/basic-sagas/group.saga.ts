/* eslint-disable react-hooks/rules-of-hooks */
import { useLoadingAction, useGroupAction } from '@stores/actions';
import { Group } from '@stores/models';
import { GROUP_TYPE } from '@stores/types';
import { call, put, takeLatest } from 'redux-saga/effects';
import { GroupService } from '@services';
import { GroupCM, GroupUM } from '@view-models';

export const useGroupSaga = () => {
  function* useInit() {
    yield takeLatest(GROUP_TYPE.GETALL.FETCH, useGetAll);
    yield takeLatest(GROUP_TYPE.CREATE.FETCH, useCreate);
    yield takeLatest(GROUP_TYPE.UPDATE.FETCH, useUpdate);
    yield takeLatest(GROUP_TYPE.REMOVE.FETCH, useRemove);
    yield takeLatest(GROUP_TYPE.ACTIVE.FETCH, useActive);
    yield takeLatest(GROUP_TYPE.DEACTIVE.FETCH, useDeactive);
  }
  function* useGetAll(action: Group) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(GroupService.findAll);
      yield put(useGroupAction().getAllSuccess(data, action.onSuccess));
    } catch (error) {
      yield put(useGroupAction().getAllError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useCreate(action: Group) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(GroupService.insert, action.payload.data as GroupCM);
      yield put(useGroupAction().createSuccess(data, action.onSuccess));
    } catch (error) {
      yield put(useGroupAction().createError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useUpdate(action: Group) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(GroupService.update, action.payload.data as GroupUM);
      yield put(useGroupAction().updateSuccess(data, action.onSuccess));
    } catch (error) {
      yield put(useGroupAction().updateError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useRemove(action: Group) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(GroupService.remove, action.payload.data as string);
      yield put(useGroupAction().removeSuccess(action.payload.data as string, action.onSuccess));
    } catch (error) {
      yield put(useGroupAction().removeError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useActive(action: Group) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(GroupService.active, action.payload.data as string[]);
      yield put(useGroupAction().activeSuccess(action.payload.data as string[], action.onSuccess));
    } catch (error) {
      yield put(useGroupAction().activeError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useDeactive(action: Group) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(GroupService.deactive, action.payload.data as string[]);
      yield put(useGroupAction().deactiveSuccess(action.payload.data as string[], action.onSuccess));
    } catch (error) {
      yield put(useGroupAction().deactiveError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  return { useInit };
};