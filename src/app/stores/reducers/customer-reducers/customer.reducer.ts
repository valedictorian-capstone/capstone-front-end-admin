import { CUSTOMER_TYPE } from '@stores/types';
import { Reducer } from 'redux';
import { CustomerState } from '@stores/states';
import { Customer } from '@stores/models';
import { CustomerUM, CustomerVM } from '@view-models';

export const useCustomerReducer: Reducer<CustomerState, Customer> = (state: CustomerState = new CustomerState({arr: []}), action: Customer): CustomerState => {
  switch (action.type) {
    case CUSTOMER_TYPE.RESET.FETCH: {
      return {
        ...state,
        arr: [],
      };
    }
    case CUSTOMER_TYPE.GETALL.SUCCESS: {
      return {
        ...state,
        arr: action.payload.data as CustomerVM[],
      };
    }
    case CUSTOMER_TYPE.CREATE.SUCCESS: {
      const newArr = state.arr;
      newArr.push(action.payload.data as CustomerVM);
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case CUSTOMER_TYPE.UPDATE.SUCCESS: {
      const newArr = state.arr;
      newArr[newArr.findIndex(model => model.id === (action.payload.data as CustomerUM).id)] = action.payload.data as CustomerVM;
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case CUSTOMER_TYPE.REMOVE.SUCCESS: {
      const newArr = state.arr.filter(model => model.id !== action.payload.data);
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case CUSTOMER_TYPE.ACTIVE.SUCCESS: {
      return {
        ...state,
        arr: state.arr.map((e) => ({...e, isDelete: (action.payload.data as string[]).indexOf(e.id) > -1 ? false : e.isDelete })),
      };
    }
    case CUSTOMER_TYPE.DEACTIVE.SUCCESS: {
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