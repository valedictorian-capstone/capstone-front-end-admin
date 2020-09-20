/* eslint-disable react-hooks/rules-of-hooks */
import { useLoadingAction, useWorkFlowStepAction } from '@stores/actions';
import { WorkFlowStep } from '@stores/models';
import { WORK_FLOW_STEP_TYPE } from '@stores/types';
import { call, put, takeLatest } from 'redux-saga/effects';
import { WorkFlowStepService } from '@services';
import { WorkFlowStepCM, WorkFlowStepUM } from '@view-models';

export const useWorkFlowStepSaga = () => {
  function* useInit() {
    yield takeLatest(WORK_FLOW_STEP_TYPE.GETALL.FETCH, useGetAll);
    yield takeLatest(WORK_FLOW_STEP_TYPE.CREATE.FETCH, useCreate);
    yield takeLatest(WORK_FLOW_STEP_TYPE.UPDATE.FETCH, useUpdate);
    yield takeLatest(WORK_FLOW_STEP_TYPE.REMOVE.FETCH, useRemove);
  }
  function* useGetAll() {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(WorkFlowStepService.findAll);
      yield put(useWorkFlowStepAction().getAllSuccess(data));
    } catch (error) {
      yield put(useWorkFlowStepAction().getAllError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useCreate(action: WorkFlowStep) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(WorkFlowStepService.insert, action.payload.data as WorkFlowStepCM);
      yield put(useWorkFlowStepAction().createSuccess(data));
    } catch (error) {
      yield put(useWorkFlowStepAction().createError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useUpdate(action: WorkFlowStep) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(WorkFlowStepService.update, action.payload.data as WorkFlowStepUM);
      yield put(useWorkFlowStepAction().updateSuccess(data));
    } catch (error) {
      yield put(useWorkFlowStepAction().updateError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useRemove(action: WorkFlowStep) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(WorkFlowStepService.remove, action.payload.data as string);
      yield put(useWorkFlowStepAction().removeSuccess(data));
    } catch (error) {
      yield put(useWorkFlowStepAction().removeError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }

  return { useInit };
};