import { AUTHENTICATION_TYPE } from '@stores/types';
import { Reducer } from 'redux';
import { AuthenticationState } from '@stores/states';
import { Authentication } from '@stores/models';
import { AccountVM, AuthenticationUM, AuthenticationVM } from '@view-models';

export const useAuthenticationReducer: Reducer<AuthenticationState, Authentication> = (state: AuthenticationState = new AuthenticationState({ item: {} as any }), action: Authentication): AuthenticationState => {
  switch (action.type) {
    case AUTHENTICATION_TYPE.RESET.FETCH: {
      return {
        ...state,
        item: {} as AuthenticationVM,
      };
    }
    case AUTHENTICATION_TYPE.GETALL.SUCCESS: {
      return {
        ...state,
        item: action.payload.data as AuthenticationVM,
      };
    }
    case AUTHENTICATION_TYPE.CREATE.SUCCESS: {
      return {
        ...state,
        item: action.payload.data as AuthenticationVM,
      };
    }
    case AUTHENTICATION_TYPE.UPDATE.SUCCESS: {
      return {
        ...state,
        item: action.payload.data as AuthenticationVM,
      };
    }
    case AUTHENTICATION_TYPE.REMOVE.SUCCESS: {
      const accountVM: AccountVM = {} as any;
      const result: AuthenticationVM = {
        AccountVM: accountVM,
        IsLogin: false,
        Token: '',
      };
      return {
        ...state,
        item: result,
      };
    }
    case AUTHENTICATION_TYPE.AUTHENTICATION.SUCCESS: {
      return {
        ...state,
        item: action.payload.data as AuthenticationVM,
      };
    }
    case AUTHENTICATION_TYPE.CHECKLOGIN.SUCCESS: {
      return {
        ...state,
        item: action.payload.data as AuthenticationVM,
      };
    }
    default: {
      return {
        ...state,
      };
    }

  }
};