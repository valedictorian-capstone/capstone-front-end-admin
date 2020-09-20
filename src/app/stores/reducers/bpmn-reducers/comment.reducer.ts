import { COMMENT_TYPE } from '@stores/types';
import { Reducer } from 'redux';
import { CommentState } from '@stores/states';
import { Comment } from '@stores/models';
import { CommentUM, CommentVM } from '@view-models';

export const useCommentReducer: Reducer<CommentState, Comment> = (state: CommentState = new CommentState({arr: []}), action: Comment): CommentState => {
  switch (action.type) {
    case COMMENT_TYPE.RESET.FETCH: {
      return {
        ...state,
        arr: [],
      };
    }
    case COMMENT_TYPE.GETALL.SUCCESS: {
      return {
        ...state,
        arr: action.payload.data as CommentVM[],
      };
    }
    case COMMENT_TYPE.CREATE.SUCCESS: {
      const newArr = state.arr;
      newArr.push(action.payload.data as CommentVM);
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case COMMENT_TYPE.UPDATE.SUCCESS: {
      const newArr = state.arr;
      newArr[newArr.findIndex(model => model.Id === (action.payload.data as CommentUM).Id)] = action.payload.data as CommentVM;
      return {
        ...state,
        arr: [...newArr],
      };
    }
    case COMMENT_TYPE.REMOVE.SUCCESS: {
      const newArr = state.arr.filter(model => model.Id !== action.payload.data);
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