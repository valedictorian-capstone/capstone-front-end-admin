import { EXTRA_INFORMATION_TYPE } from '@stores/types';
import { Reducer } from 'redux';
import { ExtraInformationState } from '@stores/states';
import { ExtraInformation } from '@stores/models';
import { ExtraInformationUM, ExtraInformationVM } from '@view-models';

export const useExtraInformationReducer: Reducer<ExtraInformationState, ExtraInformation> = (state: ExtraInformationState = new ExtraInformationState({arr: []}), action: ExtraInformation): ExtraInformationState => {
  switch (action.type) {
    case EXTRA_INFORMATION_TYPE.RESET.FETCH: {
      return {
        ...state,
        arr: [],
      };
    }
    case EXTRA_INFORMATION_TYPE.GETALL.SUCCESS: {
      return {
        ...state,
        arr: action.payload.data as ExtraInformationVM[],
      };
    }
    case EXTRA_INFORMATION_TYPE.CREATE.SUCCESS: {
      const newArr = state.arr;
      newArr.push(action.payload.data as ExtraInformationVM);
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case EXTRA_INFORMATION_TYPE.UPDATE.SUCCESS: {
      const newArr = state.arr;
      newArr[newArr.findIndex(model => model.id === (action.payload.data as ExtraInformationUM).id)] = action.payload.data as ExtraInformationVM;
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case EXTRA_INFORMATION_TYPE.REMOVE.SUCCESS: {
      const newArr = state.arr.filter(model => model.id !== action.payload.data);
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case EXTRA_INFORMATION_TYPE.ACTIVE.SUCCESS: {
      return {
        ...state,
        arr: state.arr.map((e) => ({...e, isDelete: (action.payload.data as string[]).indexOf(e.id) > -1 ? false : e.isDelete })),
      };
    }
    case EXTRA_INFORMATION_TYPE.DEACTIVE.SUCCESS: {
      return {
        ...state,
        arr: state.arr.map((e) => ({...e, isDelete: (action.payload.data as string[]).indexOf(e.id) > -1 ? true : e.isDelete })),
      };
    }
    default: {
      return {
        ...state,
      };
    }

  }
};