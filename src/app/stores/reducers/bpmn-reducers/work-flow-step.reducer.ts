import { WORK_FLOW_STEP_TYPE } from '@stores/types';
import { Reducer } from 'redux';
import { WorkFlowStepState } from '@stores/states';
import { WorkFlowStep } from '@stores/models';
import { WorkFlowStepUM, WorkFlowStepVM } from '@view-models';

export const useWorkFlowStepReducer: Reducer<WorkFlowStepState, WorkFlowStep> = (state: WorkFlowStepState = new WorkFlowStepState({arr: []}), action: WorkFlowStep): WorkFlowStepState => {
  switch (action.type) {
    case WORK_FLOW_STEP_TYPE.RESET.FETCH: {
      return {
        ...state,
        arr: [],
      };
    }
    case WORK_FLOW_STEP_TYPE.GETALL.SUCCESS: {
      return {
        ...state,
        arr: action.payload.data as WorkFlowStepVM[],
      };
    }
    case WORK_FLOW_STEP_TYPE.CREATE.SUCCESS: {
      const newArr = state.arr;
      newArr.push(action.payload.data as WorkFlowStepVM);
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case WORK_FLOW_STEP_TYPE.UPDATE.SUCCESS: {
      const newArr = state.arr;
      newArr[newArr.findIndex(model => model.id === (action.payload.data as WorkFlowStepUM).id)] = action.payload.data as WorkFlowStepVM;
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case WORK_FLOW_STEP_TYPE.REMOVE.SUCCESS: {
      const newArr = state.arr.filter(model => model.id !== action.payload.data);
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