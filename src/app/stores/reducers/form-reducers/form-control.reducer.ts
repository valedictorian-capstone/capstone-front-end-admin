import { FORM_CONTROL_TYPE } from '@stores/types';
import { Reducer } from 'redux';
import { FormControlState } from '@stores/states';
import { FormControl } from '@stores/models';
import { FormControlUM, FormControlVM } from '@view-models';

export const useFormControlReducer: Reducer<FormControlState, FormControl> = (state: FormControlState = new FormControlState({arr: []}), action: FormControl): FormControlState => {
  switch (action.type) {
    case FORM_CONTROL_TYPE.RESET.FETCH: {
      return {
        ...state,
        arr: [],
      };
    }
    case FORM_CONTROL_TYPE.GETALL.SUCCESS: {
      return {
        ...state,
        arr: action.payload.data as FormControlVM[],
      };
    }
    case FORM_CONTROL_TYPE.CREATE.SUCCESS: {
      const newArr = state.arr;
      newArr.push(action.payload.data as FormControlVM);
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case FORM_CONTROL_TYPE.UPDATE.SUCCESS: {
      const newArr = state.arr;
      newArr[newArr.findIndex(model => model.id === (action.payload.data as FormControlUM).id)] = action.payload.data as FormControlVM;
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case FORM_CONTROL_TYPE.REMOVE.SUCCESS: {
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