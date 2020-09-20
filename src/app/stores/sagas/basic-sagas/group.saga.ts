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
  }
  function* useGetAll() {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(GroupService.findAll);
      yield put(useGroupAction().getAllSuccess(data));
    } catch (error) {
      yield put(useGroupAction().getAllError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useCreate(action: Group) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(GroupService.insert, action.payload.data as GroupCM);
      yield put(useGroupAction().createSuccess(data));
    } catch (error) {
      yield put(useGroupAction().createError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useUpdate(action: Group) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(GroupService.update, action.payload.data as GroupUM);
      yield put(useGroupAction().updateSuccess(data));
    } catch (error) {
      yield put(useGroupAction().updateError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useRemove(action: Group) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(GroupService.remove, action.payload.data as string);
      yield put(useGroupAction().removeSuccess(data));
    } catch (error) {
      yield put(useGroupAction().removeError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }

  return { useInit };
};