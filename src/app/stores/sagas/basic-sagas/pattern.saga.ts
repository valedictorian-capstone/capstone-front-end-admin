/* eslint-disable react-hooks/rules-of-hooks */
import { useLoadingAction, usePatternAction } from '@stores/actions';
import { Pattern } from '@stores/models';
import { PATTERN_TYPE } from '@stores/types';
import { call, put, takeLatest } from 'redux-saga/effects';
import { PatternService } from '@services';
import { PatternCM, PatternUM } from '@view-models';

export const usePatternSaga = () => {
  function* useInit() {
    yield takeLatest(PATTERN_TYPE.GETALL.FETCH, useGetAll);
    yield takeLatest(PATTERN_TYPE.CREATE.FETCH, useCreate);
    yield takeLatest(PATTERN_TYPE.UPDATE.FETCH, useUpdate);
    yield takeLatest(PATTERN_TYPE.REMOVE.FETCH, useRemove);
    yield takeLatest(PATTERN_TYPE.ACTIVE.FETCH, useActive);
    yield takeLatest(PATTERN_TYPE.DEACTIVE.FETCH, useDeactive);
  }
  function* useGetAll(action: Pattern) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(PatternService.findAll);
      yield put(usePatternAction().getAllSuccess(data, action.onSuccess));
    } catch (error) {
      yield put(usePatternAction().getAllError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useCreate(action: Pattern) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(PatternService.insert, action.payload.data as PatternCM);
      yield put(usePatternAction().createSuccess(data, action.onSuccess));
    } catch (error) {
      yield put(usePatternAction().createError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useUpdate(action: Pattern) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(PatternService.update, action.payload.data as PatternUM);
      yield put(usePatternAction().updateSuccess(data, action.onSuccess));
    } catch (error) {
      yield put(usePatternAction().updateError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useRemove(action: Pattern) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(PatternService.remove, action.payload.data as string);
      yield put(usePatternAction().removeSuccess(action.payload.data as string, action.onSuccess));
    } catch (error) {
      yield put(usePatternAction().removeError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useActive(action: Pattern) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(PatternService.active, action.payload.data as string[]);
      yield put(usePatternAction().activeSuccess(action.payload.data as string[], action.onSuccess));
    } catch (error) {
      yield put(usePatternAction().activeError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useDeactive(action: Pattern) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(PatternService.deactive, action.payload.data as string[]);
      yield put(usePatternAction().deactiveSuccess(action.payload.data as string[], action.onSuccess));
    } catch (error) {
      yield put(usePatternAction().deactiveError(() => action.onError ? action.onError(error) : (() => { })));
    }
    yield put(useLoadingAction().hideLoader());
  }
  return { useInit };
};