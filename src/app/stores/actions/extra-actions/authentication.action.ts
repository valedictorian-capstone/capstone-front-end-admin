import { AuthenticationCM, AuthenticationUM, AuthenticationVM } from '@view-models';
import { ActionCreatorsMapObject } from 'redux';
import { Authentication } from '@stores/models';
import { AUTHENTICATION_TYPE } from '@stores/types';

export const useAuthenticationAction = (): ActionCreatorsMapObject<Authentication> => {
  const reset = (): Authentication => {
    return { type: AUTHENTICATION_TYPE.RESET.FETCH, payload: { data: AUTHENTICATION_TYPE.RESET.FETCH } };
  };
  const getAll = (): Authentication => {
    return { type: AUTHENTICATION_TYPE.GETALL.FETCH, payload: { data: AUTHENTICATION_TYPE.GETALL.FETCH } };
  };
  const getAllSuccess = (data: AuthenticationVM[]): Authentication => {
    return { type: AUTHENTICATION_TYPE.GETALL.SUCCESS, payload: { data } };
  };
  const getAllError = (error: any): Authentication => {
    console.log(error.response);
    return { type: AUTHENTICATION_TYPE.GETALL.ERROR, payload: { data: AUTHENTICATION_TYPE.GETALL.ERROR } };
  };
  const create = (data: AuthenticationCM): Authentication => {
    return { type: AUTHENTICATION_TYPE.CREATE.FETCH, payload: { data } };
  };
  const createSuccess = (data: AuthenticationVM): Authentication => {
    return { type: AUTHENTICATION_TYPE.CREATE.SUCCESS, payload: { data } };
  };
  const createError = (error: any): Authentication => {
    console.log(error);
    return { type: AUTHENTICATION_TYPE.CREATE.ERROR, payload: { data: AUTHENTICATION_TYPE.CREATE.ERROR } };
  };
  const update = (data: AuthenticationUM): Authentication => {
    return { type: AUTHENTICATION_TYPE.UPDATE.FETCH, payload: { data } };
  };
  const updateSuccess = (data: AuthenticationVM): Authentication => {
    return { type: AUTHENTICATION_TYPE.UPDATE.SUCCESS, payload: { data } };
  };
  const updateError = (error: any): Authentication => {
    return { type: AUTHENTICATION_TYPE.UPDATE.ERROR, payload: { data: AUTHENTICATION_TYPE.UPDATE.ERROR} };
  };
  const remove = (data: string): Authentication => {
    return { type: AUTHENTICATION_TYPE.REMOVE.FETCH, payload: { data } };
  };
  const removeSuccess = (data: string): Authentication => {
    return { type: AUTHENTICATION_TYPE.REMOVE.SUCCESS, payload: { data } };
  };
  const removeError = (error: any): Authentication => {
    return { type: AUTHENTICATION_TYPE.REMOVE.ERROR, payload: {data: AUTHENTICATION_TYPE.REMOVE.ERROR} };
  };
  const authenticate = (data: string): Authentication => {
    return { type: AUTHENTICATION_TYPE.AUTHENTICATION.FETCH, payload: { data } };
  };
  const authenticateSuccess = (data: AuthenticationVM): Authentication => {
    return { type: AUTHENTICATION_TYPE.AUTHENTICATION.SUCCESS, payload: { data } };
  };
  const authenticateError = (error: any): Authentication => {
    return { type: AUTHENTICATION_TYPE.AUTHENTICATION.ERROR, payload: {data: AUTHENTICATION_TYPE.AUTHENTICATION.ERROR} };
  };
  const login = (data: AuthenticationCM): Authentication => {
    return { type: AUTHENTICATION_TYPE.LOGIN.FETCH, payload: { data } };
  };
  const loginSuccess = (data: AuthenticationVM): Authentication => {
    return { type: AUTHENTICATION_TYPE.LOGIN.SUCCESS, payload: { data } };
  };
  const loginError = (error: any): Authentication => {
    return { type: AUTHENTICATION_TYPE.CHECKLOGIN.ERROR, payload: {data: AUTHENTICATION_TYPE.LOGIN.ERROR} };
  };
  const actions: ActionCreatorsMapObject<Authentication> = {
    reset,
    getAll,
    getAllSuccess,
    getAllError,
    create,
    createSuccess,
    createError,
    update,
    updateSuccess,
    updateError,
    remove,
    removeSuccess,
    removeError,
    authenticate,
    authenticateSuccess,
    authenticateError,
    login,
    loginSuccess,
    loginError,
  };
  return actions;
};