import { useLoadingAction, useAuthenticationAction } from '@stores/actions';
import { Authentication } from '@stores/models';
import { AUTHENTICATION_TYPE } from '@stores/types';
import { call, put, takeLatest } from 'redux-saga/effects';
import { AuthenticationService } from '@services';
import { AuthenticationCM, AuthenticationUM } from '@view-models';

export const useAuthenticationSaga = () => {
  function* useInit() {
    yield takeLatest(AUTHENTICATION_TYPE.GETALL.FETCH, useGetAll);
    yield takeLatest(AUTHENTICATION_TYPE.CREATE.FETCH, useCreate);
    yield takeLatest(AUTHENTICATION_TYPE.UPDATE.FETCH, useUpdate);
    yield takeLatest(AUTHENTICATION_TYPE.REMOVE.FETCH, useRemove);
    yield takeLatest(AUTHENTICATION_TYPE.AUTHENTICATION.FETCH, useAuthentication);
    yield takeLatest(AUTHENTICATION_TYPE.LOGIN.FETCH, useLogin);
  }
  function* useGetAll() {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(AuthenticationService.findAll);
      yield put(useAuthenticationAction().getAllSuccess(data));
    } catch (error) {
      yield put(useAuthenticationAction().getAllError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useCreate(action: Authentication) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(AuthenticationService.insert, action.payload.data as AuthenticationCM);
      yield put(useAuthenticationAction().createSuccess(data));
    } catch (error) {
      yield put(useAuthenticationAction().createError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useUpdate(action: Authentication) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(AuthenticationService.update, action.payload.data as AuthenticationUM);
      yield put(useAuthenticationAction().updateSuccess(data));
    } catch (error) {
      yield put(useAuthenticationAction().updateError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useRemove(action: Authentication) {
    console.log(action);
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(AuthenticationService.remove, action.payload.data as string);
      yield put(useAuthenticationAction().removeSuccess(data));
    } catch (error) {
      yield put(useAuthenticationAction().removeError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useAuthentication(action: Authentication) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(AuthenticationService.authenticate, action.payload.data as string);
      yield put(useAuthenticationAction().authenticateSuccess(data));
    } catch (error) {
      yield put(useAuthenticationAction().authenticateError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useLogin(action: Authentication) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(AuthenticationService.login, action.payload.data as AuthenticationCM);
      yield put(useAuthenticationAction().loginSuccess(data));
    } catch (error) {
      yield put(useAuthenticationAction().loginError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  return { useInit };
};