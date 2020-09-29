import { PATTERN_TYPE } from '@stores/types';
import { Reducer } from 'redux';
import { PatternState } from '@stores/states';
import { Pattern } from '@stores/models';
import { PatternUM, PatternVM } from '@view-models';

export const usePatternReducer: Reducer<PatternState, Pattern> = (state: PatternState = new PatternState({arr: []}), action: Pattern): PatternState => {
  switch (action.type) {
    case PATTERN_TYPE.RESET.FETCH: {
      return {
        ...state,
        arr: [],
      };
    }
    case PATTERN_TYPE.GETALL.SUCCESS: {
      return {
        ...state,
        arr: action.payload.data as PatternVM[],
      };
    }
    case PATTERN_TYPE.CREATE.SUCCESS: {
      const newArr = state.arr;
      newArr.push(action.payload.data as PatternVM);
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case PATTERN_TYPE.UPDATE.SUCCESS: {
      const newArr = state.arr;
      newArr[newArr.findIndex(model => model.id === (action.payload.data as PatternUM).id)] = action.payload.data as PatternVM;
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case PATTERN_TYPE.REMOVE.SUCCESS: {
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