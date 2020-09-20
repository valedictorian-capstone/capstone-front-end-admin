import { CONDITION_TYPE } from '@stores/types';
import { Reducer } from 'redux';
import { ConditionState } from '@stores/states';
import { Condition } from '@stores/models';
import { ConditionUM, ConditionVM } from '@view-models';

export const useConditionReducer: Reducer<ConditionState, Condition> = (state: ConditionState = new ConditionState({arr: []}), action: Condition): ConditionState => {
  switch (action.type) {
    case CONDITION_TYPE.RESET.FETCH: {
      return {
        ...state,
        arr: [],
      };
    }
    case CONDITION_TYPE.GETALL.SUCCESS: {
      return {
        ...state,
        arr: action.payload.data as ConditionVM[],
      };
    }
    case CONDITION_TYPE.CREATE.SUCCESS: {
      const newArr = state.arr;
      newArr.push(action.payload.data as ConditionVM);
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case CONDITION_TYPE.UPDATE.SUCCESS: {
      const newArr = state.arr;
      newArr[newArr.findIndex(model => model.Id === (action.payload.data as ConditionUM).Id)] = action.payload.data as ConditionVM;
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case CONDITION_TYPE.REMOVE.SUCCESS: {
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