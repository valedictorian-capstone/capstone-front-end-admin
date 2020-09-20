import { FORM_GROUP_TYPE } from '@stores/types';
import { Reducer } from 'redux';
import { FormGroupState } from '@stores/states';
import { FormGroup } from '@stores/models';
import { FormGroupUM, FormGroupVM } from '@view-models';

export const useFormGroupReducer: Reducer<FormGroupState, FormGroup> = (state: FormGroupState = new FormGroupState({arr: []}), action: FormGroup): FormGroupState => {
  switch (action.type) {
    case FORM_GROUP_TYPE.RESET.FETCH: {
      return {
        ...state,
        arr: [],
      };
    }
    case FORM_GROUP_TYPE.GETALL.SUCCESS: {
      return {
        ...state,
        arr: action.payload.data as FormGroupVM[],
      };
    }
    case FORM_GROUP_TYPE.CREATE.SUCCESS: {
      const newArr = state.arr;
      newArr.push(action.payload.data as FormGroupVM);
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case FORM_GROUP_TYPE.UPDATE.SUCCESS: {
      const newArr = state.arr;
      newArr[newArr.findIndex(model => model.Id === (action.payload.data as FormGroupUM).Id)] = action.payload.data as FormGroupVM;
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case FORM_GROUP_TYPE.REMOVE.SUCCESS: {
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