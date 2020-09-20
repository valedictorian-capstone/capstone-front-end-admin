/* eslint-disable react-hooks/rules-of-hooks */
import { useLoadingAction, useWorkFlowConnectionAction } from '@stores/actions';
import { WorkFlowConnection } from '@stores/models';
import { WORK_FLOW_CONNECTION_TYPE } from '@stores/types';
import { call, put, takeLatest } from 'redux-saga/effects';
import { WorkFlowConnectionService } from '@services';
import { WorkFlowConnectionCM, WorkFlowConnectionUM } from '@view-models';

export const useWorkFlowConnectionSaga = () => {
  function* useInit() {
    yield takeLatest(WORK_FLOW_CONNECTION_TYPE.GETALL.FETCH, useGetAll);
    yield takeLatest(WORK_FLOW_CONNECTION_TYPE.CREATE.FETCH, useCreate);
    yield takeLatest(WORK_FLOW_CONNECTION_TYPE.UPDATE.FETCH, useUpdate);
    yield takeLatest(WORK_FLOW_CONNECTION_TYPE.REMOVE.FETCH, useRemove);
  }
  function* useGetAll() {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(WorkFlowConnectionService.findAll);
      yield put(useWorkFlowConnectionAction().getAllSuccess(data));
    } catch (error) {
      yield put(useWorkFlowConnectionAction().getAllError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useCreate(action: WorkFlowConnection) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(WorkFlowConnectionService.insert, action.payload.data as WorkFlowConnectionCM);
      yield put(useWorkFlowConnectionAction().createSuccess(data));
    } catch (error) {
      yield put(useWorkFlowConnectionAction().createError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useUpdate(action: WorkFlowConnection) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(WorkFlowConnectionService.update, action.payload.data as WorkFlowConnectionUM);
      yield put(useWorkFlowConnectionAction().updateSuccess(data));
    } catch (error) {
      yield put(useWorkFlowConnectionAction().updateError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useRemove(action: WorkFlowConnection) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(WorkFlowConnectionService.remove, action.payload.data as string);
      yield put(useWorkFlowConnectionAction().removeSuccess(data));
    } catch (error) {
      yield put(useWorkFlowConnectionAction().removeError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }

  return { useInit };
};