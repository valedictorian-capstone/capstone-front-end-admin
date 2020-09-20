import { DEPARTMENT_TYPE } from '@stores/types';
import { Reducer } from 'redux';
import { DepartmentState } from '@stores/states';
import { Department } from '@stores/models';
import { DepartmentUM, DepartmentVM } from '@view-models';

export const useDepartmentReducer: Reducer<DepartmentState, Department> = (state: DepartmentState = new DepartmentState({arr: []}), action: Department): DepartmentState => {
  switch (action.type) {
    case DEPARTMENT_TYPE.RESET.FETCH: {
      return {
        ...state,
        arr: [],
      };
    }
    case DEPARTMENT_TYPE.GETALL.SUCCESS: {
      return {
        ...state,
        arr: action.payload.data as DepartmentVM[],
      };
    }
    case DEPARTMENT_TYPE.CREATE.SUCCESS: {
      const newArr = state.arr;
      newArr.push(action.payload.data as DepartmentVM);
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case DEPARTMENT_TYPE.UPDATE.SUCCESS: {
      const newArr = state.arr;
      newArr[newArr.findIndex(model => model.Id === (action.payload.data as DepartmentUM).Id)] = action.payload.data as DepartmentVM;
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case DEPARTMENT_TYPE.REMOVE.SUCCESS: {
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