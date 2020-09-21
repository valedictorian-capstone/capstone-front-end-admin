import { ActionCreatorsMapObject } from 'redux';
import { Loading } from '@stores/models';
import { LOADING_TYPE } from '@stores/types';

export const useLoadingAction = (): ActionCreatorsMapObject<Loading> => {

  const showLoader = (): Loading => {
    return { type: LOADING_TYPE.HIDE, payload: { status: false } };

  };
  const hideLoader = (): Loading => {
    return { type: LOADING_TYPE.HIDE, payload: { status: false } };
  };
  return { showLoader, hideLoader };
};