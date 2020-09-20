import { Loading } from '@stores/models';
import { LOADINGTYPE } from '@stores/types';

export const useLoadingAction = () => {

  const showLoader = (): Loading => {
    return new Loading({ type: LOADINGTYPE.HIDE, payload: { status: false } });

  };
  const hideLoader = (): Loading => {
    return new Loading({ type: LOADINGTYPE.HIDE, payload: { status: false } });
  };
  return { showLoader, hideLoader };
};