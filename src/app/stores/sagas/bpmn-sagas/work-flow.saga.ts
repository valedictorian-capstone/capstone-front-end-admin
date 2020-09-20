/* eslint-disable react-hooks/rules-of-hooks */
import { useLoadingAction, useWorkFlowAction } from '@stores/actions';
import { WorkFlow } from '@stores/models';
import { WORK_FLOW_TYPE } from '@stores/types';
import { call, put, takeLatest } from 'redux-saga/effects';
import { WorkFlowService } from '@services';
import { WorkFlowCM, WorkFlowUM } from '@view-models';

export const useWorkFlowSaga = () => {
  function* useInit() {
    yield takeLatest(WORK_FLOW_TYPE.GETALL.FETCH, useGetAll);
    yield takeLatest(WORK_FLOW_TYPE.CREATE.FETCH, useCreate);
    yield takeLatest(WORK_FLOW_TYPE.UPDATE.FETCH, useUpdate);
    yield takeLatest(WORK_FLOW_TYPE.REMOVE.FETCH, useRemove);
  }
  function* useGetAll() {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(WorkFlowService.findAll);
      yield put(useWorkFlowAction().getAllSuccess(data));
    } catch (error) {
      yield put(useWorkFlowAction().getAllError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useCreate(action: WorkFlow) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(WorkFlowService.insert, action.payload.data as WorkFlowCM);
      yield put(useWorkFlowAction().createSuccess(data));
    } catch (error) {
      yield put(useWorkFlowAction().createError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useUpdate(action: WorkFlow) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(WorkFlowService.update, action.payload.data as WorkFlowUM);
      yield put(useWorkFlowAction().updateSuccess(data));
    } catch (error) {
      yield put(useWorkFlowAction().updateError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useRemove(action: WorkFlow) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(WorkFlowService.remove, action.payload.data as string);
      yield put(useWorkFlowAction().removeSuccess(data));
    } catch (error) {
      yield put(useWorkFlowAction().removeError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }

  return { useInit };
};