import { WorkFlowStepInstanceCM, WorkFlowStepInstanceUM, WorkFlowStepInstanceVM } from '@view-models';
import { ActionCreatorsMapObject } from 'redux';
import { WorkFlowStepInstance } from '@stores/models';
import { WORK_FLOW_STEP_INSTANCE_TYPE } from '@stores/types';

export const useWorkFlowStepInstanceAction = (): ActionCreatorsMapObject<WorkFlowStepInstance> => {
  const reset = (): WorkFlowStepInstance => {
    return new WorkFlowStepInstance({ type: WORK_FLOW_STEP_INSTANCE_TYPE.RESET.FETCH, payload: { data: WORK_FLOW_STEP_INSTANCE_TYPE.RESET.FETCH } });
  };
  const getAll = (): WorkFlowStepInstance => {
    return new WorkFlowStepInstance({ type: WORK_FLOW_STEP_INSTANCE_TYPE.GETALL.FETCH, payload: { data: WORK_FLOW_STEP_INSTANCE_TYPE.GETALL.FETCH } });
  };
  const getAllSuccess = (data: WorkFlowStepInstanceVM[]): WorkFlowStepInstance => {
    return new WorkFlowStepInstance({ type: WORK_FLOW_STEP_INSTANCE_TYPE.GETALL.SUCCESS, payload: { data } });
  };
  const getAllError = (error: any): WorkFlowStepInstance => {
    console.log(error.response);
    return new WorkFlowStepInstance({ type: WORK_FLOW_STEP_INSTANCE_TYPE.GETALL.ERROR, payload: { data: WORK_FLOW_STEP_INSTANCE_TYPE.GETALL.ERROR } });
  };
  const create = (data: WorkFlowStepInstanceCM): WorkFlowStepInstance => {
    return new WorkFlowStepInstance({ type: WORK_FLOW_STEP_INSTANCE_TYPE.CREATE.FETCH, payload: { data } });
  };
  const createSuccess = (data: WorkFlowStepInstanceVM): WorkFlowStepInstance => {
    return new WorkFlowStepInstance({ type: WORK_FLOW_STEP_INSTANCE_TYPE.CREATE.SUCCESS, payload: { data } });
  };
  const createError = (error: any): WorkFlowStepInstance => {
    console.log(error);
    return new WorkFlowStepInstance({ type: WORK_FLOW_STEP_INSTANCE_TYPE.CREATE.ERROR, payload: { data: WORK_FLOW_STEP_INSTANCE_TYPE.CREATE.ERROR } });
  };
  const update = (data: WorkFlowStepInstanceUM): WorkFlowStepInstance => {
    return new WorkFlowStepInstance({ type: WORK_FLOW_STEP_INSTANCE_TYPE.UPDATE.FETCH, payload: { data } });
  };
  const updateSuccess = (data: WorkFlowStepInstanceVM): WorkFlowStepInstance => {
    return new WorkFlowStepInstance({ type: WORK_FLOW_STEP_INSTANCE_TYPE.UPDATE.SUCCESS, payload: { data } });
  };
  const updateError = (error: any): WorkFlowStepInstance => {
    return new WorkFlowStepInstance({ type: WORK_FLOW_STEP_INSTANCE_TYPE.UPDATE.ERROR, payload: { data: WORK_FLOW_STEP_INSTANCE_TYPE.UPDATE.ERROR} });
  };
  const remove = (data: string): WorkFlowStepInstance => {
    return new WorkFlowStepInstance({ type: WORK_FLOW_STEP_INSTANCE_TYPE.REMOVE.FETCH, payload: { data } });
  };
  const removeSuccess = (data: string): WorkFlowStepInstance => {
    return new WorkFlowStepInstance({ type: WORK_FLOW_STEP_INSTANCE_TYPE.REMOVE.SUCCESS, payload: { data } });
  };
  const removeError = (error: any): WorkFlowStepInstance => {
    return new WorkFlowStepInstance({ type: WORK_FLOW_STEP_INSTANCE_TYPE.REMOVE.ERROR, payload: {data: WORK_FLOW_STEP_INSTANCE_TYPE.REMOVE.ERROR} });
  };
  const actions: ActionCreatorsMapObject<WorkFlowStepInstance> = {
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