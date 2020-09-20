import { WorkFlowConnectionCM, WorkFlowConnectionUM, WorkFlowConnectionVM } from '@view-models';
import { ActionCreatorsMapObject } from 'redux';
import { WorkFlowConnection } from '@stores/models';
import { WORK_FLOW_CONNECTION_TYPE } from '@stores/types';

export const useWorkFlowConnectionAction = (): ActionCreatorsMapObject<WorkFlowConnection> => {
  const reset = (): WorkFlowConnection => {
    return new WorkFlowConnection({ type: WORK_FLOW_CONNECTION_TYPE.RESET.FETCH, payload: { data: WORK_FLOW_CONNECTION_TYPE.RESET.FETCH } });
  };
  const getAll = (): WorkFlowConnection => {
    return new WorkFlowConnection({ type: WORK_FLOW_CONNECTION_TYPE.GETALL.FETCH, payload: { data: WORK_FLOW_CONNECTION_TYPE.GETALL.FETCH } });
  };
  const getAllSuccess = (data: WorkFlowConnectionVM[]): WorkFlowConnection => {
    return new WorkFlowConnection({ type: WORK_FLOW_CONNECTION_TYPE.GETALL.SUCCESS, payload: { data } });
  };
  const getAllError = (error: any): WorkFlowConnection => {
    console.log(error.response);
    return new WorkFlowConnection({ type: WORK_FLOW_CONNECTION_TYPE.GETALL.ERROR, payload: { data: WORK_FLOW_CONNECTION_TYPE.GETALL.ERROR } });
  };
  const create = (data: WorkFlowConnectionCM): WorkFlowConnection => {
    return new WorkFlowConnection({ type: WORK_FLOW_CONNECTION_TYPE.CREATE.FETCH, payload: { data } });
  };
  const createSuccess = (data: WorkFlowConnectionVM): WorkFlowConnection => {
    return new WorkFlowConnection({ type: WORK_FLOW_CONNECTION_TYPE.CREATE.SUCCESS, payload: { data } });
  };
  const createError = (error: any): WorkFlowConnection => {
    console.log(error);
    return new WorkFlowConnection({ type: WORK_FLOW_CONNECTION_TYPE.CREATE.ERROR, payload: { data: WORK_FLOW_CONNECTION_TYPE.CREATE.ERROR } });
  };
  const update = (data: WorkFlowConnectionUM): WorkFlowConnection => {
    return new WorkFlowConnection({ type: WORK_FLOW_CONNECTION_TYPE.UPDATE.FETCH, payload: { data } });
  };
  const updateSuccess = (data: WorkFlowConnectionVM): WorkFlowConnection => {
    return new WorkFlowConnection({ type: WORK_FLOW_CONNECTION_TYPE.UPDATE.SUCCESS, payload: { data } });
  };
  const updateError = (error: any): WorkFlowConnection => {
    return new WorkFlowConnection({ type: WORK_FLOW_CONNECTION_TYPE.UPDATE.ERROR, payload: { data: WORK_FLOW_CONNECTION_TYPE.UPDATE.ERROR} });
  };
  const remove = (data: string): WorkFlowConnection => {
    return new WorkFlowConnection({ type: WORK_FLOW_CONNECTION_TYPE.REMOVE.FETCH, payload: { data } });
  };
  const removeSuccess = (data: string): WorkFlowConnection => {
    return new WorkFlowConnection({ type: WORK_FLOW_CONNECTION_TYPE.REMOVE.SUCCESS, payload: { data } });
  };
  const removeError = (error: any): WorkFlowConnection => {
    return new WorkFlowConnection({ type: WORK_FLOW_CONNECTION_TYPE.REMOVE.ERROR, payload: {data: WORK_FLOW_CONNECTION_TYPE.REMOVE.ERROR} });
  };
  const actions: ActionCreatorsMapObject<WorkFlowConnection> = {
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