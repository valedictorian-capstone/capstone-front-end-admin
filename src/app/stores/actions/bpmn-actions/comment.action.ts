import { CommentCM, CommentUM, CommentVM } from '@view-models';
import { ActionCreatorsMapObject } from 'redux';
import { Comment } from '@stores/models';
import { COMMENT_TYPE } from '@stores/types';

export const useCommentAction = (): ActionCreatorsMapObject<Comment> => {
  const reset = (): Comment => {
    return { type: COMMENT_TYPE.RESET.FETCH, payload: { data: COMMENT_TYPE.RESET.FETCH } };
  };
  const getAll = (): Comment => {
    return { type: COMMENT_TYPE.GETALL.FETCH, payload: { data: COMMENT_TYPE.GETALL.FETCH } };
  };
  const getAllSuccess = (data: CommentVM[]): Comment => {
    return { type: COMMENT_TYPE.GETALL.SUCCESS, payload: { data } };
  };
  const getAllError = (error: any): Comment => {
    console.log(error.response);
    return { type: COMMENT_TYPE.GETALL.ERROR, payload: { data: COMMENT_TYPE.GETALL.ERROR } };
  };
  const create = (data: CommentCM): Comment => {
    return { type: COMMENT_TYPE.CREATE.FETCH, payload: { data } };
  };
  const createSuccess = (data: CommentVM): Comment => {
    return { type: COMMENT_TYPE.CREATE.SUCCESS, payload: { data } };
  };
  const createError = (error: any): Comment => {
    console.log(error);
    return { type: COMMENT_TYPE.CREATE.ERROR, payload: { data: COMMENT_TYPE.CREATE.ERROR } };
  };
  const update = (data: CommentUM): Comment => {
    return { type: COMMENT_TYPE.UPDATE.FETCH, payload: { data } };
  };
  const updateSuccess = (data: CommentVM): Comment => {
    return { type: COMMENT_TYPE.UPDATE.SUCCESS, payload: { data } };
  };
  const updateError = (error: any): Comment => {
    return { type: COMMENT_TYPE.UPDATE.ERROR, payload: { data: COMMENT_TYPE.UPDATE.ERROR} };
  };
  const remove = (data: string): Comment => {
    return { type: COMMENT_TYPE.REMOVE.FETCH, payload: { data } };
  };
  const removeSuccess = (data: string): Comment => {
    return { type: COMMENT_TYPE.REMOVE.SUCCESS, payload: { data } };
  };
  const removeError = (error: any): Comment => {
    return { type: COMMENT_TYPE.REMOVE.ERROR, payload: {data: COMMENT_TYPE.REMOVE.ERROR} };
  };
  const actions: ActionCreatorsMapObject<Comment> = {
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
  };
  return actions;
};