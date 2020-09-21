import { WorkFlowCM, WorkFlowUM, WorkFlowVM } from '@view-models';
import { ActionCreatorsMapObject } from 'redux';
import { WorkFlow } from '@stores/models';
import { WORK_FLOW_TYPE } from '@stores/types';

export const useWorkFlowAction = (): ActionCreatorsMapObject<WorkFlow> => {
  const reset = (): WorkFlow => {
    return { type: WORK_FLOW_TYPE.RESET.FETCH, payload: { data: WORK_FLOW_TYPE.RESET.FETCH } };
  };
  const getAll = (): WorkFlow => {
    return { type: WORK_FLOW_TYPE.GETALL.FETCH, payload: { data: WORK_FLOW_TYPE.GETALL.FETCH } };
  };
  const getAllSuccess = (data: WorkFlowVM[]): WorkFlow => {
    return { type: WORK_FLOW_TYPE.GETALL.SUCCESS, payload: { data } };
  };
  const getAllError = (error: any): WorkFlow => {
    console.log(error.response);
    return { type: WORK_FLOW_TYPE.GETALL.ERROR, payload: { data: WORK_FLOW_TYPE.GETALL.ERROR } };
  };
  const create = (data: WorkFlowCM): WorkFlow => {
    return { type: WORK_FLOW_TYPE.CREATE.FETCH, payload: { data } };
  };
  const createSuccess = (data: WorkFlowVM): WorkFlow => {
    return { type: WORK_FLOW_TYPE.CREATE.SUCCESS, payload: { data } };
  };
  const createError = (error: any): WorkFlow => {
    console.log(error);
    return { type: WORK_FLOW_TYPE.CREATE.ERROR, payload: { data: WORK_FLOW_TYPE.CREATE.ERROR } };
  };
  const update = (data: WorkFlowUM): WorkFlow => {
    return { type: WORK_FLOW_TYPE.UPDATE.FETCH, payload: { data } };
  };
  const updateSuccess = (data: WorkFlowVM): WorkFlow => {
    return { type: WORK_FLOW_TYPE.UPDATE.SUCCESS, payload: { data } };
  };
  const updateError = (error: any): WorkFlow => {
    return { type: WORK_FLOW_TYPE.UPDATE.ERROR, payload: { data: WORK_FLOW_TYPE.UPDATE.ERROR} };
  };
  const remove = (data: string): WorkFlow => {
    return { type: WORK_FLOW_TYPE.REMOVE.FETCH, payload: { data } };
  };
  const removeSuccess = (data: string): WorkFlow => {
    return { type: WORK_FLOW_TYPE.REMOVE.SUCCESS, payload: { data } };
  };
  const removeError = (error: any): WorkFlow => {
    return { type: WORK_FLOW_TYPE.REMOVE.ERROR, payload: {data: WORK_FLOW_TYPE.REMOVE.ERROR} };
  };
  const actions: ActionCreatorsMapObject<WorkFlow> = {
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