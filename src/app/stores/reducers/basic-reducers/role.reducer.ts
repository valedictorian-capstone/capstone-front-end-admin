import { ROLE_TYPE } from '@stores/types';
import { Reducer } from 'redux';
import { RoleState } from '@stores/states';
import { Role } from '@stores/models';
import { RoleUM, RoleVM } from '@view-models';

export const useRoleReducer: Reducer<RoleState, Role> = (state: RoleState = new RoleState({arr: []}), action: Role): RoleState => {
  switch (action.type) {
    case ROLE_TYPE.RESET.FETCH: {
      return {
        ...state,
        arr: [],
      };
    }
    case ROLE_TYPE.GETALL.SUCCESS: {
      return {
        ...state,
        arr: action.payload.data as RoleVM[],
      };
    }
    case ROLE_TYPE.CREATE.SUCCESS: {
      const newArr = state.arr;
      newArr.push(action.payload.data as RoleVM);
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case ROLE_TYPE.UPDATE.SUCCESS: {
      const newArr = state.arr;
      newArr[newArr.findIndex(model => model.Id === (action.payload.data as RoleUM).Id)] = action.payload.data as RoleVM;
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case ROLE_TYPE.REMOVE.SUCCESS: {
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