import { GroupCM, GroupUM, GroupVM } from '@view-models';
import { ActionCreatorsMapObject } from 'redux';
import { Group } from '@stores/models';
import { GROUP_TYPE } from '@stores/types';

export const useGroupAction = (): ActionCreatorsMapObject<Group> => {
  const reset = (): Group => {
    return new Group({ type: GROUP_TYPE.RESET.FETCH, payload: { data: GROUP_TYPE.RESET.FETCH } });
  };
  const getAll = (): Group => {
    return new Group({ type: GROUP_TYPE.GETALL.FETCH, payload: { data: GROUP_TYPE.GETALL.FETCH } });
  };
  const getAllSuccess = (data: GroupVM[]): Group => {
    return new Group({ type: GROUP_TYPE.GETALL.SUCCESS, payload: { data } });
  };
  const getAllError = (error: any): Group => {
    console.log(error.response);
    return new Group({ type: GROUP_TYPE.GETALL.ERROR, payload: { data: GROUP_TYPE.GETALL.ERROR } });
  };
  const create = (data: GroupCM): Group => {
    return new Group({ type: GROUP_TYPE.CREATE.FETCH, payload: { data } });
  };
  const createSuccess = (data: GroupVM): Group => {
    return new Group({ type: GROUP_TYPE.CREATE.SUCCESS, payload: { data } });
  };
  const createError = (error: any): Group => {
    console.log(error);
    return new Group({ type: GROUP_TYPE.CREATE.ERROR, payload: { data: GROUP_TYPE.CREATE.ERROR } });
  };
  const update = (data: GroupUM): Group => {
    return new Group({ type: GROUP_TYPE.UPDATE.FETCH, payload: { data } });
  };
  const updateSuccess = (data: GroupVM): Group => {
    return new Group({ type: GROUP_TYPE.UPDATE.SUCCESS, payload: { data } });
  };
  const updateError = (error: any): Group => {
    return new Group({ type: GROUP_TYPE.UPDATE.ERROR, payload: { data: GROUP_TYPE.UPDATE.ERROR} });
  };
  const remove = (data: string): Group => {
    return new Group({ type: GROUP_TYPE.REMOVE.FETCH, payload: { data } });
  };
  const removeSuccess = (data: string): Group => {
    return new Group({ type: GROUP_TYPE.REMOVE.SUCCESS, payload: { data } });
  };
  const removeError = (error: any): Group => {
    return new Group({ type: GROUP_TYPE.REMOVE.ERROR, payload: {data: GROUP_TYPE.REMOVE.ERROR} });
  };
  const actions: ActionCreatorsMapObject<Group> = {
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