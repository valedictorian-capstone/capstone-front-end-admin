import { GROUP_TYPE } from '@stores/types';
import { Reducer } from 'redux';
import { GroupState } from '@stores/states';
import { Group } from '@stores/models';
import { GroupUM, GroupVM } from '@view-models';

export const useGroupReducer: Reducer<GroupState, Group> = (state: GroupState = new GroupState({arr: []}), action: Group): GroupState => {
  switch (action.type) {
    case GROUP_TYPE.RESET.FETCH: {
      return {
        ...state,
        arr: [],
      };
    }
    case GROUP_TYPE.GETALL.SUCCESS: {
      return {
        ...state,
        arr: action.payload.data as GroupVM[],
      };
    }
    case GROUP_TYPE.CREATE.SUCCESS: {
      const newArr = state.arr;
      newArr.push(action.payload.data as GroupVM);
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case GROUP_TYPE.UPDATE.SUCCESS: {
      const newArr = state.arr;
      newArr[newArr.findIndex(model => model.Id === (action.payload.data as GroupUM).Id)] = action.payload.data as GroupVM;
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case GROUP_TYPE.REMOVE.SUCCESS: {
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