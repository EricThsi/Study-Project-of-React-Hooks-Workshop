/**
 * Actions Creator
 */
import { ITodo } from '../../constants/interfaces';
import { Actions } from './actions';
import { VisibilityType } from '../../constants/constants';

export const counterUpActionCreator = () => {
  return {
    type: Actions.COUNTER_UP,
  };
};

export const counterDownActionCreator = () => {
  return {
    type: Actions.COUNTER_DOWN,
  };
};

export const todoCreateItemActionCreator = (item: ITodo) => {
  return {
    type: Actions.CREATE_ITEM,
    payload: item,
  };
};

export const todoRemoveItemActionCreator = (id: string) => {
  return {
    type: Actions.REMOVE_ITEM,
    payload: {
      id,
    },
  };
};

export const todoToggleItemActionCreator = (id: string) => {
  return {
    type: Actions.TOGGLE_ITEM,
    payload: {
      id,
    },
  };
};

export const todoToggleAllActionCreator = (toggleStatus: boolean) => {
  return {
    type: Actions.TOGGLE_ALL_ITEMS,
    payload: {
      toggleStatus,
    },
  };
};

export const todoListVisibilityActionCreator = (visibility: VisibilityType) => {
  return {
    type: Actions.CHANGE_VISIBILITY,
    payload: {
      visibility,
    },
  };
};
