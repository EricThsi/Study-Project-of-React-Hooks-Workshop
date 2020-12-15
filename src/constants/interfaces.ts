import { VisibilityType } from './constants';

export interface ITodo {
  id: string;
  text: string;
  isCompleted: boolean;
}

export interface ITodoList {
  todos: ITodo[];
}

export interface ITodoItem {
  todo: ITodo;
  handleTodoToggle: (id: string) => void;
  handleTodoRemove: (id: string) => void;
}

export interface IAppState {
  counter: number;
  todos: ITodo[];
  visibility: VisibilityType;
}

export interface ITodoForm {
  handleTodoCreate: (todo: ITodo) => void;
}

export interface ITodoFooter {
  todos: ITodo[];
  visibility: VisibilityType;
  handleTodoVisibility: (visibility: VisibilityType) => void;
}
