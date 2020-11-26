/**
 * Actions Creator
 */
import { ITodo } from '../../constants/interfaces';
import { Actions } from './actions';

export const counterIncreaseActionCreator = () => {
  return {
    type: Actions.COUNTER_INCREASE,
  };
};

export const todoCreateItemActionCreator = (item: ITodo) => {
  return {
    type: Actions.CREATE_ITEM,
    payload: item,
  };
};
