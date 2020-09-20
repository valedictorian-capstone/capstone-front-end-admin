/* eslint-disable react-hooks/rules-of-hooks */
import { useLoadingAction, useWorkFlowInstanceAction } from '@stores/actions';
import { WorkFlowInstance } from '@stores/models';
import { WORK_FLOW_INSTANCE_TYPE } from '@stores/types';
import { call, put, takeLatest } from 'redux-saga/effects';
import { WorkFlowInstanceService } from '@services';
import { WorkFlowInstanceCM, WorkFlowInstanceUM } from '@view-models';

export const useWorkFlowInstanceSaga = () => {
  function* useInit() {
    yield takeLatest(WORK_FLOW_INSTANCE_TYPE.GETALL.FETCH, useGetAll);
    yield takeLatest(WORK_FLOW_INSTANCE_TYPE.CREATE.FETCH, useCreate);
    yield takeLatest(WORK_FLOW_INSTANCE_TYPE.UPDATE.FETCH, useUpdate);
    yield takeLatest(WORK_FLOW_INSTANCE_TYPE.REMOVE.FETCH, useRemove);
  }
  function* useGetAll() {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(WorkFlowInstanceService.findAll);
      yield put(useWorkFlowInstanceAction().getAllSuccess(data));
    } catch (error) {
      yield put(useWorkFlowInstanceAction().getAllError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useCreate(action: WorkFlowInstance) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(WorkFlowInstanceService.insert, action.payload.data as WorkFlowInstanceCM);
      yield put(useWorkFlowInstanceAction().createSuccess(data));
    } catch (error) {
      yield put(useWorkFlowInstanceAction().createError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useUpdate(action: WorkFlowInstance) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(WorkFlowInstanceService.update, action.payload.data as WorkFlowInstanceUM);
      yield put(useWorkFlowInstanceAction().updateSuccess(data));
    } catch (error) {
      yield put(useWorkFlowInstanceAction().updateError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useRemove(action: WorkFlowInstance) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(WorkFlowInstanceService.remove, action.payload.data as string);
      yield put(useWorkFlowInstanceAction().removeSuccess(data));
    } catch (error) {
      yield put(useWorkFlowInstanceAction().removeError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }

  return { useInit };
};