import { WORK_FLOW_STEP_INSTANCE_TYPE } from '@stores/types';
import { Reducer } from 'redux';
import { WorkFlowStepInstanceState } from '@stores/states';
import { WorkFlowStepInstance } from '@stores/models';
import { WorkFlowStepInstanceUM, WorkFlowStepInstanceVM } from '@view-models';

export const useWorkFlowStepInstanceReducer: Reducer<WorkFlowStepInstanceState, WorkFlowStepInstance> = (state: WorkFlowStepInstanceState = new WorkFlowStepInstanceState({arr: []}), action: WorkFlowStepInstance): WorkFlowStepInstanceState => {
  switch (action.type) {
    case WORK_FLOW_STEP_INSTANCE_TYPE.RESET.FETCH: {
      return {
        ...state,
        arr: [],
      };
    }
    case WORK_FLOW_STEP_INSTANCE_TYPE.GETALL.SUCCESS: {
      return {
        ...state,
        arr: action.payload.data as WorkFlowStepInstanceVM[],
      };
    }
    case WORK_FLOW_STEP_INSTANCE_TYPE.CREATE.SUCCESS: {
      const newArr = state.arr;
      newArr.push(action.payload.data as WorkFlowStepInstanceVM);
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case WORK_FLOW_STEP_INSTANCE_TYPE.UPDATE.SUCCESS: {
      const newArr = state.arr;
      newArr[newArr.findIndex(model => model.Id === (action.payload.data as WorkFlowStepInstanceUM).Id)] = action.payload.data as WorkFlowStepInstanceVM;
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case WORK_FLOW_STEP_INSTANCE_TYPE.REMOVE.SUCCESS: {
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