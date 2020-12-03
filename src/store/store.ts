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
      text: 'React Functional Component.',
      isCompleted: false,
    },
    {
      id: '222',
      text: 'React Hooks.',
      isCompleted: true,
    },
  ],
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
