import { useLoadingAction, useProductExtraInformationDataAction } from '@stores/actions';
import { ProductExtraInformationData } from '@stores/models';
import { PRODUCT_EXTRA_INFORMATION_DATA_TYPE } from '@stores/types';
import { call, put, takeLatest } from 'redux-saga/effects';
import { ProductExtraInformationDataService } from '@services';
import { ProductExtraInformationDataCM, ProductExtraInformationDataUM } from '@view-models';

export const useProductExtraInformationDataSaga = () => {
  function* useInit() {
    yield takeLatest(PRODUCT_EXTRA_INFORMATION_DATA_TYPE.GETALL.FETCH, useGetAll);
    yield takeLatest(PRODUCT_EXTRA_INFORMATION_DATA_TYPE.CREATE.FETCH, useCreate);
    yield takeLatest(PRODUCT_EXTRA_INFORMATION_DATA_TYPE.UPDATE.FETCH, useUpdate);
    yield takeLatest(PRODUCT_EXTRA_INFORMATION_DATA_TYPE.REMOVE.FETCH, useRemove);
  }
  function* useGetAll() {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(ProductExtraInformationDataService.findAll);
      yield put(useProductExtraInformationDataAction().getAllSuccess(data));
    } catch (error) {
      yield put(useProductExtraInformationDataAction().getAllError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useCreate(action: ProductExtraInformationData) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(ProductExtraInformationDataService.insert, action.payload.data as ProductExtraInformationDataCM);
      yield put(useProductExtraInformationDataAction().createSuccess(data));
    } catch (error) {
      yield put(useProductExtraInformationDataAction().createError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useUpdate(action: ProductExtraInformationData) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(ProductExtraInformationDataService.update, action.payload.data as ProductExtraInformationDataUM);
      yield put(useProductExtraInformationDataAction().updateSuccess(data));
    } catch (error) {
      yield put(useProductExtraInformationDataAction().updateError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useRemove(action: ProductExtraInformationData) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(ProductExtraInformationDataService.remove, action.payload.data as string);
      yield put(useProductExtraInformationDataAction().removeSuccess(data));
    } catch (error) {
      yield put(useProductExtraInformationDataAction().removeError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }

  return { useInit };
};