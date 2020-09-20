import { ACCOUNT_EXTRA_DATA_TYPE } from '@stores/types';
import { Reducer } from 'redux';
import { AccountExtraInformationDataState } from '@stores/states';
import { AccountExtraInformationData } from '@stores/models';
import { AccountExtraInformationDataUM, AccountExtraInformationDataVM } from '@view-models';

export const useAccountExtraInformationDataReducer: Reducer<AccountExtraInformationDataState, AccountExtraInformationData> = (state: AccountExtraInformationDataState = new AccountExtraInformationDataState({arr: []}), action: AccountExtraInformationData): AccountExtraInformationDataState => {
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
        arr: action.payload.data as AccountExtraInformationDataVM[],
      };
    }
    case ACCOUNT_EXTRA_DATA_TYPE.CREATE.SUCCESS: {
      const newArr = state.arr;
      newArr.push(action.payload.data as AccountExtraInformationDataVM);
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case ACCOUNT_EXTRA_DATA_TYPE.UPDATE.SUCCESS: {
      const newArr = state.arr;
      newArr[newArr.findIndex(model => model.Id === (action.payload.data as AccountExtraInformationDataUM).Id)] = action.payload.data as AccountExtraInformationDataVM;
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case ACCOUNT_EXTRA_DATA_TYPE.REMOVE.SUCCESS: {
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