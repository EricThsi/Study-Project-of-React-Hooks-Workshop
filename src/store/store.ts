/**
 * App Store
 */
import { createContext, Dispatch } from 'react';
import { IAppState } from '../constants/interfaces';
import { VisibilityType } from '../constants/constants';
import { TodoActions } from './actions/actions';

export const initialState: IAppState = {
  counter: 0,
  todos: [
    {
      id: '111',
      text: 'Todo Item.',
      isCompleted: false,
    },
  ],
  newTodo: '',
  visibility: VisibilityType.ALL,
};

const AppContext = createContext<{
  state: IAppState;
  dispatch: Dispatch<any>;
}>({
  state: initialState,
  dispatch: (action: TodoActions) => null,
});

export default AppContext;
