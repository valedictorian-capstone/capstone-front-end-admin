import { AUTHENTICATION_TYPE } from '@stores/types';
import { Reducer } from 'redux';
import { AuthenticationState } from '@stores/states';
import { Authentication } from '@stores/models';
import { AuthenticationUM, AuthenticationVM } from '@view-models';

export const useAuthenticationReducer: Reducer<AuthenticationState, Authentication> = (state: AuthenticationState = new AuthenticationState({arr: []}), action: Authentication): AuthenticationState => {
  switch (action.type) {
    case AUTHENTICATION_TYPE.RESET.FETCH: {
      return {
        ...state,
        arr: [],
      };
    }
    case AUTHENTICATION_TYPE.GETALL.SUCCESS: {
      return {
        ...state,
        arr: action.payload.data as AuthenticationVM[],
      };
    }
    case AUTHENTICATION_TYPE.CREATE.SUCCESS: {
      const newArr = state.arr;
      newArr.push(action.payload.data as AuthenticationVM);
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case AUTHENTICATION_TYPE.UPDATE.SUCCESS: {
      const newArr = state.arr;
      newArr[newArr.findIndex(model => model.Id === (action.payload.data as AuthenticationUM).Id)] = action.payload.data as AuthenticationVM;
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case AUTHENTICATION_TYPE.REMOVE.SUCCESS: {
      const newArr = state.arr.filter(model => model.Id !== action.payload.data);
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case AUTHENTICATION_TYPE.AUTHENTICATION.SUCCESS: {
      const newArr = state.arr;
      newArr[newArr.findIndex(model => model.Id === (action.payload.data as AuthenticationVM).Id)] = action.payload.data as AuthenticationVM;
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case AUTHENTICATION_TYPE.REMOVE.SUCCESS: {
      const newArr = state.arr.filter(model => model.Id !== action.payload.data);
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case AUTHENTICATION_TYPE.CHECKLOGIN.SUCCESS: {
      const newArr = state.arr;
      newArr[newArr.findIndex(model => model.Id === (action.payload.data as AuthenticationVM).Id)] = action.payload.data as AuthenticationVM;
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case AUTHENTICATION_TYPE.LOGIN.SUCCESS: {
      const newArr = state.arr;
      newArr[newArr.findIndex(model => model.Id === (action.payload.data as AuthenticationVM).Id)] = action.payload.data as AuthenticationVM;
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