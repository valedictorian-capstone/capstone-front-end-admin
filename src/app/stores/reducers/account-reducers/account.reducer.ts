import { ACCOUNT_EXTRA_DATA_TYPE } from '@stores/types';
import { Reducer } from 'redux';
import { AccountState } from '@stores/states';
import { Account } from '@stores/models';
import { AccountUM, AccountVM } from '@view-models';

export const useAccountReducer: Reducer<AccountState, Account> = (state: AccountState = new AccountState({arr: []}), action: Account): AccountState => {
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
        arr: action.payload.data as AccountVM[],
      };
    }
    case ACCOUNT_EXTRA_DATA_TYPE.CREATE.SUCCESS: {
      const newArr = state.arr;
      newArr.push(action.payload.data as AccountVM);
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case ACCOUNT_EXTRA_DATA_TYPE.UPDATE.SUCCESS: {
      const newArr = state.arr;
      newArr[newArr.findIndex(model => model.id === (action.payload.data as AccountUM).id)] = action.payload.data as AccountVM;
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