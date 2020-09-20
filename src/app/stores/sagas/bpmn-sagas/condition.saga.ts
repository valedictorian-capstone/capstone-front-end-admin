/* eslint-disable react-hooks/rules-of-hooks */
import { useLoadingAction, useConditionAction } from '@stores/actions';
import { Condition } from '@stores/models';
import { CONDITION_TYPE } from '@stores/types';
import { call, put, takeLatest } from 'redux-saga/effects';
import { ConditionService } from '@services';
import { ConditionCM, ConditionUM } from '@view-models';

export const useConditionSaga = () => {
  function* useInit() {
    yield takeLatest(CONDITION_TYPE.GETALL.FETCH, useGetAll);
    yield takeLatest(CONDITION_TYPE.CREATE.FETCH, useCreate);
    yield takeLatest(CONDITION_TYPE.UPDATE.FETCH, useUpdate);
    yield takeLatest(CONDITION_TYPE.REMOVE.FETCH, useRemove);
  }
  function* useGetAll() {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(ConditionService.findAll);
      yield put(useConditionAction().getAllSuccess(data));
    } catch (error) {
      yield put(useConditionAction().getAllError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useCreate(action: Condition) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(ConditionService.insert, action.payload.data as ConditionCM);
      yield put(useConditionAction().createSuccess(data));
    } catch (error) {
      yield put(useConditionAction().createError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useUpdate(action: Condition) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(ConditionService.update, action.payload.data as ConditionUM);
      yield put(useConditionAction().updateSuccess(data));
    } catch (error) {
      yield put(useConditionAction().updateError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useRemove(action: Condition) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(ConditionService.remove, action.payload.data as string);
      yield put(useConditionAction().removeSuccess(data));
    } catch (error) {
      yield put(useConditionAction().removeError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }

  return { useInit };
};