/* eslint-disable react-hooks/rules-of-hooks */
import { useLoadingAction, useCommentAction } from '@stores/actions';
import { Comment } from '@stores/models';
import { COMMENT_TYPE } from '@stores/types';
import { call, put, takeLatest } from 'redux-saga/effects';
import { CommentService } from '@services';
import { CommentCM, CommentUM } from '@view-models';

export const useCommentSaga = () => {
  function* useInit() {
    yield takeLatest(COMMENT_TYPE.GETALL.FETCH, useGetAll);
    yield takeLatest(COMMENT_TYPE.CREATE.FETCH, useCreate);
    yield takeLatest(COMMENT_TYPE.UPDATE.FETCH, useUpdate);
    yield takeLatest(COMMENT_TYPE.REMOVE.FETCH, useRemove);
  }
  function* useGetAll() {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(CommentService.findAll);
      yield put(useCommentAction().getAllSuccess(data));
    } catch (error) {
      yield put(useCommentAction().getAllError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useCreate(action: Comment) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(CommentService.insert, action.payload.data as CommentCM);
      yield put(useCommentAction().createSuccess(data));
    } catch (error) {
      yield put(useCommentAction().createError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useUpdate(action: Comment) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(CommentService.update, action.payload.data as CommentUM);
      yield put(useCommentAction().updateSuccess(data));
    } catch (error) {
      yield put(useCommentAction().updateError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }
  function* useRemove(action: Comment) {
    yield put(useLoadingAction().showLoader());
    try {
      const { data } = yield call(CommentService.remove, action.payload.data as string);
      yield put(useCommentAction().removeSuccess(data));
    } catch (error) {
      yield put(useCommentAction().removeError(error));
    }
    yield put(useLoadingAction().hideLoader());
  }

  return { useInit };
};