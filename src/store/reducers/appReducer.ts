/**
 * App Reducer
 */
import { IAppState } from '../../constants/interfaces';
import { Actions, TodoActions } from '../actions/actions';

export const appReducer = (
  state: IAppState,
  action: TodoActions,
): IAppState => {
  switch (action.type) {
    case Actions.COUNTER_UP: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case Actions.COUNTER_DOWN: {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    case Actions.CREATE_ITEM: {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }
    case Actions.UPDATE_ITEM: {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              text: todo.text,
            };
          }

          return todo;
        }),
      };
    }
    case Actions.REMOVE_ITEM: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    }
    case Actions.TOGGLE_ITEM: {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              isCompleted: !todo.isCompleted,
            };
          }

          return todo;
        }),
      };
    }
    case Actions.TOGGLE_ALL_ITEMS: {
      return {
        ...state,
        todos: state.todos.map((todo) => ({
          ...todo,
          isCompleted: action.payload.toggleStatus,
        })),
      };
    }
    case Actions.CLEAR_COMPLETED: {
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.isCompleted),
      };
    }
    case Actions.CHANGE_VISIBILITY: {
      return {
        ...state,
        visibility: action.payload.visibility,
      };
    }
    default:
      return state;
  }
};
