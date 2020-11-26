/**
 * Actions
 */

import { ITodo } from '../../constants/interfaces';
import { VisibilityType } from '../../constants/constants';

export enum Actions {
  COUNTER_INCREASE = 'COUNTER_INCREASE',
  CREATE_ITEM = 'CREATE_ITEM',
  UPDATE_ITEM = 'UPDATE_ITEM',
  DELETE_ITEM = 'DELETE_IT',
  CHANGE_VISIBILITY = 'CHANGE_VISIBILITY',
  TOGGLE_ALL_ITEMS = 'TOGGLE_ALL_ITEMS',
  TOGGLE_ITEM = 'TOGGLE_ITEM',
  CLEAR_COMPLETED = 'CLEAR_COMPLETED',
}

export type TodoActions =
  | { type: Actions.COUNTER_INCREASE }
  | {
      type: Actions.CREATE_ITEM;
      payload: ITodo;
    }
  | {
      type: Actions.UPDATE_ITEM;
      payload: {
        id: string;
        text: string;
      };
    }
  | {
      type: Actions.DELETE_ITEM;
      payload: {
        id: string;
      };
    }
  | {
      type: Actions.TOGGLE_ALL_ITEMS;
      payload: {
        toggleStatus: boolean;
      };
    }
  | {
      type: Actions.TOGGLE_ITEM;
      payload: {
        id: string;
      };
    }
  | {
      type: Actions.CLEAR_COMPLETED;
    }
  | {
      type: Actions.CHANGE_VISIBILITY;
      payload: {
        visibility: VisibilityType;
      };
    };
