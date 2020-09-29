import { FORM_VALUE_TYPE } from '@stores/types';
import { Reducer } from 'redux';
import { FormValueState } from '@stores/states';
import { FormValue } from '@stores/models';
import { FormValueUM, FormValueVM } from '@view-models';

export const useFormValueReducer: Reducer<FormValueState, FormValue> = (state: FormValueState = new FormValueState({arr: []}), action: FormValue): FormValueState => {
  switch (action.type) {
    case FORM_VALUE_TYPE.RESET.FETCH: {
      return {
        ...state,
        arr: [],
      };
    }
    case FORM_VALUE_TYPE.GETALL.SUCCESS: {
      return {
        ...state,
        arr: action.payload.data as FormValueVM[],
      };
    }
    case FORM_VALUE_TYPE.CREATE.SUCCESS: {
      const newArr = state.arr;
      newArr.push(action.payload.data as FormValueVM);
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case FORM_VALUE_TYPE.UPDATE.SUCCESS: {
      const newArr = state.arr;
      newArr[newArr.findIndex(model => model.id === (action.payload.data as FormValueUM).id)] = action.payload.data as FormValueVM;
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case FORM_VALUE_TYPE.REMOVE.SUCCESS: {
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