import { CUSTOMER_EXTRA_INFORMATION_TYPE } from '@stores/types';
import { Reducer } from 'redux';
import { CustomerExtraInformationState } from '@stores/states';
import { CustomerExtraInformation } from '@stores/models';
import { CustomerExtraInformationUM, CustomerExtraInformationVM } from '@view-models';

export const useCustomerExtraInformationReducer: Reducer<CustomerExtraInformationState, CustomerExtraInformation> = (state: CustomerExtraInformationState = new CustomerExtraInformationState({ arr: [] }), action: CustomerExtraInformation): CustomerExtraInformationState => {
  switch (action.type) {
    case CUSTOMER_EXTRA_INFORMATION_TYPE.RESET.FETCH: {
      return {
        ...state,
        arr: [],
      };
    }
    case CUSTOMER_EXTRA_INFORMATION_TYPE.GETALL.SUCCESS: {
      return {
        ...state,
        arr: action.payload.data as CustomerExtraInformationVM[],
      };
    }
    case CUSTOMER_EXTRA_INFORMATION_TYPE.CREATE.SUCCESS: {
      const newArr = state.arr;
      newArr.push(action.payload.data as CustomerExtraInformationVM);
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case CUSTOMER_EXTRA_INFORMATION_TYPE.UPDATE.SUCCESS: {
      const newArr = state.arr;
      for (const extra of action.payload.data as CustomerExtraInformationUM[]) {
        newArr[newArr.findIndex(model => model.id === extra.id)] = extra as CustomerExtraInformationVM;
      }
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case CUSTOMER_EXTRA_INFORMATION_TYPE.REMOVE.SUCCESS: {
      const newArr = state.arr.filter(model => model.id !== action.payload.data);
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case CUSTOMER_EXTRA_INFORMATION_TYPE.ACTIVE.SUCCESS: {
      return {
        ...state,
        arr: state.arr.map((e) => ({ ...e, isDelete: (action.payload.data as string[]).indexOf(e.id) > -1 ? false : e.isDelete })),
      };
    }
    case CUSTOMER_EXTRA_INFORMATION_TYPE.DEACTIVE.SUCCESS: {
      return {
        ...state,
        arr: state.arr.map((e) => ({ ...e, isDelete: (action.payload.data as string[]).indexOf(e.id) > -1 ? true : e.isDelete })),
      };
    }
    default: {
      return {
        ...state,
      };
    }

  }
};