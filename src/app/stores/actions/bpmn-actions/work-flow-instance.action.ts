import { WorkFlowInstanceCM, WorkFlowInstanceUM, WorkFlowInstanceVM } from '@view-models';
import { ActionCreatorsMapObject } from 'redux';
import { WorkFlowInstance } from '@stores/models';
import { WORK_FLOW_INSTANCE_TYPE } from '@stores/types';

export const useWorkFlowInstanceAction = (): ActionCreatorsMapObject<WorkFlowInstance> => {
  const reset = (): WorkFlowInstance => {
    return { type: WORK_FLOW_INSTANCE_TYPE.RESET.FETCH, payload: { data: WORK_FLOW_INSTANCE_TYPE.RESET.FETCH } };
  };
  const getAll = (): WorkFlowInstance => {
    return { type: WORK_FLOW_INSTANCE_TYPE.GETALL.FETCH, payload: { data: WORK_FLOW_INSTANCE_TYPE.GETALL.FETCH } };
  };
  const getAllSuccess = (data: WorkFlowInstanceVM[]): WorkFlowInstance => {
    return { type: WORK_FLOW_INSTANCE_TYPE.GETALL.SUCCESS, payload: { data } };
  };
  const getAllError = (error: any): WorkFlowInstance => {
    console.log(error.response);
    return { type: WORK_FLOW_INSTANCE_TYPE.GETALL.ERROR, payload: { data: WORK_FLOW_INSTANCE_TYPE.GETALL.ERROR } };
  };
  const create = (data: WorkFlowInstanceCM): WorkFlowInstance => {
    return { type: WORK_FLOW_INSTANCE_TYPE.CREATE.FETCH, payload: { data } };
  };
  const createSuccess = (data: WorkFlowInstanceVM): WorkFlowInstance => {
    return { type: WORK_FLOW_INSTANCE_TYPE.CREATE.SUCCESS, payload: { data } };
  };
  const createError = (error: any): WorkFlowInstance => {
    console.log(error);
    return { type: WORK_FLOW_INSTANCE_TYPE.CREATE.ERROR, payload: { data: WORK_FLOW_INSTANCE_TYPE.CREATE.ERROR } };
  };
  const update = (data: WorkFlowInstanceUM): WorkFlowInstance => {
    return { type: WORK_FLOW_INSTANCE_TYPE.UPDATE.FETCH, payload: { data } };
  };
  const updateSuccess = (data: WorkFlowInstanceVM): WorkFlowInstance => {
    return { type: WORK_FLOW_INSTANCE_TYPE.UPDATE.SUCCESS, payload: { data } };
  };
  const updateError = (error: any): WorkFlowInstance => {
    return { type: WORK_FLOW_INSTANCE_TYPE.UPDATE.ERROR, payload: { data: WORK_FLOW_INSTANCE_TYPE.UPDATE.ERROR } };
  };
  const remove = (data: string): WorkFlowInstance => {
    return { type: WORK_FLOW_INSTANCE_TYPE.REMOVE.FETCH, payload: { data } };
  };
  const removeSuccess = (data: string): WorkFlowInstance => {
    return { type: WORK_FLOW_INSTANCE_TYPE.REMOVE.SUCCESS, payload: { data } };
  };
  const removeError = (error: any): WorkFlowInstance => {
    return { type: WORK_FLOW_INSTANCE_TYPE.REMOVE.ERROR, payload: { data: WORK_FLOW_INSTANCE_TYPE.REMOVE.ERROR } };
  };
  const actions: ActionCreatorsMapObject<WorkFlowInstance> = {
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