import { FORM_DATA_TYPE } from '@stores/types';
import { Reducer } from 'redux';
import { FormDataState } from '@stores/states';
import { FormData } from '@stores/models';
import { FormDataUM, FormDataVM } from '@view-models';

export const useFormDataReducer: Reducer<FormDataState, FormData> = (state: FormDataState = new FormDataState({arr: []}), action: FormData): FormDataState => {
  switch (action.type) {
    case FORM_DATA_TYPE.RESET.FETCH: {
      return {
        ...state,
        arr: [],
      };
    }
    case FORM_DATA_TYPE.GETALL.SUCCESS: {
      return {
        ...state,
        arr: action.payload.data as FormDataVM[],
      };
    }
    case FORM_DATA_TYPE.CREATE.SUCCESS: {
      const newArr = state.arr;
      newArr.push(action.payload.data as FormDataVM);
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case FORM_DATA_TYPE.UPDATE.SUCCESS: {
      const newArr = state.arr;
      newArr[newArr.findIndex(model => model.Id === (action.payload.data as FormDataUM).Id)] = action.payload.data as FormDataVM;
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case FORM_DATA_TYPE.REMOVE.SUCCESS: {
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