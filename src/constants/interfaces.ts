import { VisibilityType } from './constants';

export interface ITodo {
  id: string;
  text: string;
  isCompleted: boolean;
}

export interface ITodoList {
  todos: ITodo[];
}

export interface IAppState {
  counter: number;
  todos: ITodo[];
  newTodo: string;
  visibility: VisibilityType;
}
