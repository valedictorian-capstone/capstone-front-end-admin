import { WORK_FLOW_CONNECTION_TYPE } from '@stores/types';
import { Reducer } from 'redux';
import { WorkFlowConnectionState } from '@stores/states';
import { WorkFlowConnection } from '@stores/models';
import { WorkFlowConnectionUM, WorkFlowConnectionVM } from '@view-models';

export const useWorkFlowConnectionReducer: Reducer<WorkFlowConnectionState, WorkFlowConnection> = (state: WorkFlowConnectionState = new WorkFlowConnectionState({arr: []}), action: WorkFlowConnection): WorkFlowConnectionState => {
  switch (action.type) {
    case WORK_FLOW_CONNECTION_TYPE.RESET.FETCH: {
      return {
        ...state,
        arr: [],
      };
    }
    case WORK_FLOW_CONNECTION_TYPE.GETALL.SUCCESS: {
      return {
        ...state,
        arr: action.payload.data as WorkFlowConnectionVM[],
      };
    }
    case WORK_FLOW_CONNECTION_TYPE.CREATE.SUCCESS: {
      const newArr = state.arr;
      newArr.push(action.payload.data as WorkFlowConnectionVM);
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case WORK_FLOW_CONNECTION_TYPE.UPDATE.SUCCESS: {
      const newArr = state.arr;
      newArr[newArr.findIndex(model => model.Id === (action.payload.data as WorkFlowConnectionUM).Id)] = action.payload.data as WorkFlowConnectionVM;
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case WORK_FLOW_CONNECTION_TYPE.REMOVE.SUCCESS: {
      const newArr = state.arr.filter(model => model.Id !== action.payload.data);
      return {
        ...state,
        arr: [...newArr],
      };
    }
    default: {
      return {
        ...state,
      };
    }

  }
};