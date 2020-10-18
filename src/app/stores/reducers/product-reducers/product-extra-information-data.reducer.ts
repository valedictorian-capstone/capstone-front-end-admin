import { PRODUCT_EXTRA_INFORMATION_DATA_TYPE } from '@stores/types';
import { Reducer } from 'redux';
import { ProductExtraInformationDataState } from '@stores/states';
import { ProductExtraInformationData } from '@stores/models';
import { ProductExtraInformationDataUM, ProductExtraInformationDataVM } from '@view-models';

export const useProductExtraInformationDataReducer: Reducer<ProductExtraInformationDataState, ProductExtraInformationData> = (state: ProductExtraInformationDataState = new ProductExtraInformationDataState({arr: []}), action: ProductExtraInformationData): ProductExtraInformationDataState => {
  switch (action.type) {
    case PRODUCT_EXTRA_INFORMATION_DATA_TYPE.RESET.FETCH: {
      return {
        ...state,
        arr: [],
      };
    }
    case PRODUCT_EXTRA_INFORMATION_DATA_TYPE.GETALL.SUCCESS: {
      return {
        ...state,
        arr: action.payload.data as ProductExtraInformationDataVM[],
      };
    }
    case PRODUCT_EXTRA_INFORMATION_DATA_TYPE.CREATE.SUCCESS: {
      const newArr = state.arr;
      newArr.push(action.payload.data as ProductExtraInformationDataVM);
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case PRODUCT_EXTRA_INFORMATION_DATA_TYPE.UPDATE.SUCCESS: {
      const newArr = state.arr;
      newArr[newArr.findIndex(model => model.id === (action.payload.data as ProductExtraInformationDataUM).id)] = action.payload.data as ProductExtraInformationDataVM;
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case PRODUCT_EXTRA_INFORMATION_DATA_TYPE.REMOVE.SUCCESS: {
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