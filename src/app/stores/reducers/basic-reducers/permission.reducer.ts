import { PERMISSION_TYPE } from '@stores/types';
import { Reducer } from 'redux';
import { PermissionState } from '@stores/states';
import { Permission } from '@stores/models';
import { PermissionUM, PermissionVM } from '@view-models';

export const usePermissionReducer: Reducer<PermissionState, Permission> = (state: PermissionState = new PermissionState({arr: []}), action: Permission): PermissionState => {
  switch (action.type) {
    case PERMISSION_TYPE.RESET.FETCH: {
      return {
        ...state,
        arr: [],
      };
    }
    case PERMISSION_TYPE.GETALL.SUCCESS: {
      return {
        ...state,
        arr: action.payload.data as PermissionVM[],
      };
    }
    case PERMISSION_TYPE.CREATE.SUCCESS: {
      const newArr = state.arr;
      newArr.push(action.payload.data as PermissionVM);
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case PERMISSION_TYPE.UPDATE.SUCCESS: {
      const newArr = state.arr;
      newArr[newArr.findIndex(model => model.id === (action.payload.data as PermissionUM).id)] = action.payload.data as PermissionVM;
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case PERMISSION_TYPE.REMOVE.SUCCESS: {
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