import { WORK_FLOW_INSTANCE_TYPE } from '@stores/types';
import { Reducer } from 'redux';
import { WorkFlowInstanceState } from '@stores/states';
import { WorkFlowInstance } from '@stores/models';
import { WorkFlowInstanceUM, WorkFlowInstanceVM } from '@view-models';

export const useWorkFlowInstanceReducer: Reducer<WorkFlowInstanceState, WorkFlowInstance> = (state: WorkFlowInstanceState = new WorkFlowInstanceState({arr: []}), action: WorkFlowInstance): WorkFlowInstanceState => {
  switch (action.type) {
    case WORK_FLOW_INSTANCE_TYPE.RESET.FETCH: {
      return {
        ...state,
        arr: [],
      };
    }
    case WORK_FLOW_INSTANCE_TYPE.GETALL.SUCCESS: {
      return {
        ...state,
        arr: action.payload.data as WorkFlowInstanceVM[],
      };
    }
    case WORK_FLOW_INSTANCE_TYPE.CREATE.SUCCESS: {
      const newArr = state.arr;
      newArr.push(action.payload.data as WorkFlowInstanceVM);
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case WORK_FLOW_INSTANCE_TYPE.UPDATE.SUCCESS: {
      const newArr = state.arr;
      newArr[newArr.findIndex(model => model.Id === (action.payload.data as WorkFlowInstanceUM).Id)] = action.payload.data as WorkFlowInstanceVM;
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case WORK_FLOW_INSTANCE_TYPE.REMOVE.SUCCESS: {
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