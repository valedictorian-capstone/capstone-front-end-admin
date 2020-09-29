import { CUSTOMER_EXTRA_DATA_TYPE } from '@stores/types';
import { Reducer } from 'redux';
import { CustomerExtraDataState } from '@stores/states';
import { CustomerExtraData } from '@stores/models';
import { CustomerExtraDataUM, CustomerExtraDataVM } from '@view-models';

export const useCustomerExtraDataReducer: Reducer<CustomerExtraDataState, CustomerExtraData> = (state: CustomerExtraDataState = new CustomerExtraDataState({arr: []}), action: CustomerExtraData): CustomerExtraDataState => {
  switch (action.type) {
    case CUSTOMER_EXTRA_DATA_TYPE.RESET.FETCH: {
      return {
        ...state,
        arr: [],
      };
    }
    case CUSTOMER_EXTRA_DATA_TYPE.GETALL.SUCCESS: {
      return {
        ...state,
        arr: action.payload.data as CustomerExtraDataVM[],
      };
    }
    case CUSTOMER_EXTRA_DATA_TYPE.CREATE.SUCCESS: {
      const newArr = state.arr;
      newArr.push(action.payload.data as CustomerExtraDataVM);
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case CUSTOMER_EXTRA_DATA_TYPE.UPDATE.SUCCESS: {
      const newArr = state.arr;
      newArr[newArr.findIndex(model => model.id === (action.payload.data as CustomerExtraDataUM).id)] = action.payload.data as CustomerExtraDataVM;
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case CUSTOMER_EXTRA_DATA_TYPE.REMOVE.SUCCESS: {
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