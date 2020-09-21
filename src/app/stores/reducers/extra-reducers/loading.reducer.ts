import { LOADING_TYPE } from '@stores/types';
import { Reducer } from 'redux';
import { LoadingState } from '@stores/states';
import { Loading } from '@stores/models';

export const useLoadingReducer: Reducer<LoadingState, Loading> = (state: LoadingState = new LoadingState({ loading: { status: false } }), action: Loading): LoadingState => {
  switch (action.type) {
    case LOADING_TYPE.SHOW: {
      return {
        ...state,
        loading: { status: action.payload.status },
      };
    }
    case LOADING_TYPE.HIDE: {
      return {
        ...state,
        loading: { status: action.payload.status },
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};