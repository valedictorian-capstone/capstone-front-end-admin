import { WORK_FLOW_TYPE } from '@stores/types';
import { Reducer } from 'redux';
import { WorkFlowState } from '@stores/states';
import { WorkFlow } from '@stores/models';
import { WorkFlowUM, WorkFlowVM } from '@view-models';

export const useWorkFlowReducer: Reducer<WorkFlowState, WorkFlow> = (state: WorkFlowState = new WorkFlowState({arr: []}), action: WorkFlow): WorkFlowState => {
  switch (action.type) {
    case WORK_FLOW_TYPE.RESET.FETCH: {
      return {
        ...state,
        arr: [],
      };
    }
    case WORK_FLOW_TYPE.GETALL.SUCCESS: {
      return {
        ...state,
        arr: action.payload.data as WorkFlowVM[],
      };
    }
    case WORK_FLOW_TYPE.CREATE.SUCCESS: {
      const newArr = state.arr;
      newArr.push(action.payload.data as WorkFlowVM);
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case WORK_FLOW_TYPE.UPDATE.SUCCESS: {
      const newArr = state.arr;
      newArr[newArr.findIndex(model => model.Id === (action.payload.data as WorkFlowUM).Id)] = action.payload.data as WorkFlowVM;
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case WORK_FLOW_TYPE.REMOVE.SUCCESS: {
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