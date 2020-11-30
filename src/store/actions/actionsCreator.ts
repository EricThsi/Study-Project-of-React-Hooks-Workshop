/**
 * Actions Creator
 */
import { ITodo } from '../../constants/interfaces';
import { Actions } from './actions';

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
