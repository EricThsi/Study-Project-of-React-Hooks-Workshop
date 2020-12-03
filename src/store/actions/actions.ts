/**
 * Actions
 */

import { ITodo } from '../../constants/interfaces';
import { VisibilityType } from '../../constants/constants';

export enum Actions {
  COUNTER_UP = 'COUNTER_UP',
  COUNTER_DOWN = 'COUNTER_DOWN',
  CREATE_ITEM = 'CREATE_ITEM',
  UPDATE_ITEM = 'UPDATE_ITEM',
  REMOVE_ITEM = 'DELETE_ITEM',
  CHANGE_VISIBILITY = 'CHANGE_VISIBILITY',
  TOGGLE_ALL_ITEMS = 'TOGGLE_ALL_ITEMS',
  TOGGLE_ITEM = 'TOGGLE_ITEM',
  CLEAR_COMPLETED = 'CLEAR_COMPLETED',
}

export type TodoActions =
  | { type: Actions.COUNTER_UP }
  | { type: Actions.COUNTER_DOWN }
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
      type: Actions.REMOVE_ITEM;
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
