/* eslint-disable react-hooks/rules-of-hooks */
import { useLoadingAction, useWorkFlowStepInstanceAction } from '@stores/actions';
import { WorkFlowStepInstance } from '@stores/models';
import { WORK_FLOW_STEP_INSTANCE_TYPE } from '@stores/types';
import { call, put, takeLatest } from 'redux-saga/effects';
import { WorkFlowStepInstanceService } from '@services';
import { WorkFlowStepInstanceCM, WorkFlowStepInstanceUM } from '@view-models';

export const useWorkFlowStepInstanceSaga = () => {
  function* useInit() {
    yield takeLatest(WORK_FLOW_STEP_INSTANCE_TYPE.GETALL.FETCH, useGetAll);
    yield takeLatest(WORK_FLOW_STEP_INSTANCE_TYPE.CREATE.FETCH, useCreate);
    yield takeLatest(WORK_FLOW_STEP_INSTANCE_TYPE.UPDATE.FETCH, useUpdate);
    yield takeLatest(WORK_FLOW_STEP_INSTANCE_TYPE.REMOVE.FETCH, useRemove);
  }
  function* useGetAll() {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(WorkFlowStepInstanceService.findAll);
      yield put(useWorkFlowStepInstanceAction().getAllSuccess(data));
    } catch (error) {
      yield put(useWorkFlowStepInstanceAction().getAllError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useCreate(action: WorkFlowStepInstance) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(WorkFlowStepInstanceService.insert, action.payload.data as WorkFlowStepInstanceCM);
      yield put(useWorkFlowStepInstanceAction().createSuccess(data));
    } catch (error) {
      yield put(useWorkFlowStepInstanceAction().createError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useUpdate(action: WorkFlowStepInstance) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(WorkFlowStepInstanceService.update, action.payload.data as WorkFlowStepInstanceUM);
      yield put(useWorkFlowStepInstanceAction().updateSuccess(data));
    } catch (error) {
      yield put(useWorkFlowStepInstanceAction().updateError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useRemove(action: WorkFlowStepInstance) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(WorkFlowStepInstanceService.remove, action.payload.data as string);
      yield put(useWorkFlowStepInstanceAction().removeSuccess(data));
    } catch (error) {
      yield put(useWorkFlowStepInstanceAction().removeError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }

  return { useInit };
};