import { ACCOUNT_EXTRA_DATA_TYPE } from '@stores/types';
import { Reducer } from 'redux';
import { AccountExtraInformationState } from '@stores/states';
import { AccountExtraInformation } from '@stores/models';
import { AccountExtraInformationUM, AccountExtraInformationVM } from '@view-models';

export const useAccountExtraInformationReducer: Reducer<AccountExtraInformationState, AccountExtraInformation> = (state: AccountExtraInformationState = new AccountExtraInformationState({arr: []}), action: AccountExtraInformation): AccountExtraInformationState => {
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
        arr: action.payload.data as AccountExtraInformationVM[],
      };
    }
    case ACCOUNT_EXTRA_DATA_TYPE.CREATE.SUCCESS: {
      const newArr = state.arr;
      newArr.push(action.payload.data as AccountExtraInformationVM);
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case ACCOUNT_EXTRA_DATA_TYPE.UPDATE.SUCCESS: {
      const newArr = state.arr;
      newArr[newArr.findIndex(model => model.id === (action.payload.data as AccountExtraInformationUM).id)] = action.payload.data as AccountExtraInformationVM;
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