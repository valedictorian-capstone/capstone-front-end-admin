import { PRODUCT_TYPE } from '@stores/types';
import { Reducer } from 'redux';
import { ProductState } from '@stores/states';
import { Product } from '@stores/models';
import { ProductUM, ProductVM } from '@view-models';

export const useProductReducer: Reducer<ProductState, Product> = (state: ProductState = new ProductState({arr: []}), action: Product): ProductState => {
  switch (action.type) {
    case PRODUCT_TYPE.RESET.FETCH: {
      return {
        ...state,
        arr: [],
      };
    }
    case PRODUCT_TYPE.GETALL.SUCCESS: {
      return {
        ...state,
        arr: action.payload.data as ProductVM[],
      };
    }
    case PRODUCT_TYPE.CREATE.SUCCESS: {
      const newArr = state.arr;
      newArr.push(action.payload.data as ProductVM);
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case PRODUCT_TYPE.UPDATE.SUCCESS: {
      const newArr = state.arr;
      newArr[newArr.findIndex(model => model.id === (action.payload.data as ProductUM).id)] = action.payload.data as ProductVM;
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case PRODUCT_TYPE.REMOVE.SUCCESS: {
      const newArr = state.arr.filter(model => model.id !== action.payload.data);
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case PRODUCT_TYPE.ACTIVE.SUCCESS: {
      return {
        ...state,
        arr: state.arr.map((e) => ({...e, isDelete: (action.payload.data as string[]).indexOf(e.id) > -1 ? false : e.isDelete })),
      };
    }
    case PRODUCT_TYPE.DEACTIVE.SUCCESS: {
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