import { CUSTOMER_EXTRA_INFORMATION_DATA_TYPE } from '@stores/types';
import { Reducer } from 'redux';
import { CustomerExtraInformationDataState } from '@stores/states';
import { CustomerExtraInformationData } from '@stores/models';
import { CustomerExtraInformationDataUM, CustomerExtraInformationDataVM } from '@view-models';

export const useCustomerExtraInformationDataReducer: Reducer<CustomerExtraInformationDataState, CustomerExtraInformationData> = (state: CustomerExtraInformationDataState = new CustomerExtraInformationDataState({arr: []}), action: CustomerExtraInformationData): CustomerExtraInformationDataState => {
  switch (action.type) {
    case CUSTOMER_EXTRA_INFORMATION_DATA_TYPE.RESET.FETCH: {
      return {
        ...state,
        arr: [],
      };
    }
    case CUSTOMER_EXTRA_INFORMATION_DATA_TYPE.GETALL.SUCCESS: {
      return {
        ...state,
        arr: action.payload.data as CustomerExtraInformationDataVM[],
      };
    }
    case CUSTOMER_EXTRA_INFORMATION_DATA_TYPE.CREATE.SUCCESS: {
      const newArr = state.arr;
      newArr.push(action.payload.data as CustomerExtraInformationDataVM);
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case CUSTOMER_EXTRA_INFORMATION_DATA_TYPE.UPDATE.SUCCESS: {
      const newArr = state.arr;
      newArr[newArr.findIndex(model => model.id === (action.payload.data as CustomerExtraInformationDataUM).id)] = action.payload.data as CustomerExtraInformationDataVM;
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case CUSTOMER_EXTRA_INFORMATION_DATA_TYPE.REMOVE.SUCCESS: {
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