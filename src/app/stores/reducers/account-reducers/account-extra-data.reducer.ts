import { ACCOUNT_EXTRA_DATA_TYPE } from '@stores/types';
import { Reducer } from 'redux';
import { AccountExtraDataState } from '@stores/states';
import { AccountExtraData } from '@stores/models';
import { AccountExtraDataUM, AccountExtraDataVM } from '@view-models';

export const useAccountExtraDataReducer: Reducer<AccountExtraDataState, AccountExtraData> = (state: AccountExtraDataState = new AccountExtraDataState({arr: []}), action: AccountExtraData): AccountExtraDataState => {
  switch (action.type) {
    case ACCOUNT_EXTRA_DATA_TYPE.RESET.FETCH: {
      return {
        ...state,
        arr: [],
      };
    }
    case ACCOUNT_EXTRA_DATA_TYPE.GETALL.SUCCESS: {
      return {
        ...state,
        arr: action.payload.data as AccountExtraDataVM[],
      };
    }
    case ACCOUNT_EXTRA_DATA_TYPE.CREATE.SUCCESS: {
      const newArr = state.arr;
      newArr.push(action.payload.data as AccountExtraDataVM);
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case ACCOUNT_EXTRA_DATA_TYPE.UPDATE.SUCCESS: {
      const newArr = state.arr;
      newArr[newArr.findIndex(model => model.id === (action.payload.data as AccountExtraDataUM).id)] = action.payload.data as AccountExtraDataVM;
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case ACCOUNT_EXTRA_DATA_TYPE.REMOVE.SUCCESS: {
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