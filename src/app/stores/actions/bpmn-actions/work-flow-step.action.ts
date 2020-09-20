import { WorkFlowStepCM, WorkFlowStepUM, WorkFlowStepVM } from '@view-models';
import { ActionCreatorsMapObject } from 'redux';
import { WorkFlowStep } from '@stores/models';
import { WORK_FLOW_STEP_TYPE } from '@stores/types';

export const useWorkFlowStepAction = (): ActionCreatorsMapObject<WorkFlowStep> => {
  const reset = (): WorkFlowStep => {
    return new WorkFlowStep({ type: WORK_FLOW_STEP_TYPE.RESET.FETCH, payload: { data: WORK_FLOW_STEP_TYPE.RESET.FETCH } });
  };
  const getAll = (): WorkFlowStep => {
    return new WorkFlowStep({ type: WORK_FLOW_STEP_TYPE.GETALL.FETCH, payload: { data: WORK_FLOW_STEP_TYPE.GETALL.FETCH } });
  };
  const getAllSuccess = (data: WorkFlowStepVM[]): WorkFlowStep => {
    return new WorkFlowStep({ type: WORK_FLOW_STEP_TYPE.GETALL.SUCCESS, payload: { data } });
  };
  const getAllError = (error: any): WorkFlowStep => {
    console.log(error.response);
    return new WorkFlowStep({ type: WORK_FLOW_STEP_TYPE.GETALL.ERROR, payload: { data: WORK_FLOW_STEP_TYPE.GETALL.ERROR } });
  };
  const create = (data: WorkFlowStepCM): WorkFlowStep => {
    return new WorkFlowStep({ type: WORK_FLOW_STEP_TYPE.CREATE.FETCH, payload: { data } });
  };
  const createSuccess = (data: WorkFlowStepVM): WorkFlowStep => {
    return new WorkFlowStep({ type: WORK_FLOW_STEP_TYPE.CREATE.SUCCESS, payload: { data } });
  };
  const createError = (error: any): WorkFlowStep => {
    console.log(error);
    return new WorkFlowStep({ type: WORK_FLOW_STEP_TYPE.CREATE.ERROR, payload: { data: WORK_FLOW_STEP_TYPE.CREATE.ERROR } });
  };
  const update = (data: WorkFlowStepUM): WorkFlowStep => {
    return new WorkFlowStep({ type: WORK_FLOW_STEP_TYPE.UPDATE.FETCH, payload: { data } });
  };
  const updateSuccess = (data: WorkFlowStepVM): WorkFlowStep => {
    return new WorkFlowStep({ type: WORK_FLOW_STEP_TYPE.UPDATE.SUCCESS, payload: { data } });
  };
  const updateError = (error: any): WorkFlowStep => {
    return new WorkFlowStep({ type: WORK_FLOW_STEP_TYPE.UPDATE.ERROR, payload: { data: WORK_FLOW_STEP_TYPE.UPDATE.ERROR} });
  };
  const remove = (data: string): WorkFlowStep => {
    return new WorkFlowStep({ type: WORK_FLOW_STEP_TYPE.REMOVE.FETCH, payload: { data } });
  };
  const removeSuccess = (data: string): WorkFlowStep => {
    return new WorkFlowStep({ type: WORK_FLOW_STEP_TYPE.REMOVE.SUCCESS, payload: { data } });
  };
  const removeError = (error: any): WorkFlowStep => {
    return new WorkFlowStep({ type: WORK_FLOW_STEP_TYPE.REMOVE.ERROR, payload: {data: WORK_FLOW_STEP_TYPE.REMOVE.ERROR} });
  };
  const actions: ActionCreatorsMapObject<WorkFlowStep> = {
    reset,
    getAll,
    getAllSuccess,
    getAllError,
    create,
    createSuccess,
    createError,
    update,
    updateSuccess,
    updateError,
    remove,
    removeSuccess,
    removeError,
  };
  return actions;
};