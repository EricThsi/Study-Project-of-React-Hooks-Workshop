import React, { ChangeEvent, useContext } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import AppContext from '../../store/store';
import TodoFooter from '../TodoFooter/TodoFooter';
import TodoForm from '../TodoForm/TodoForm';
import { ITodo } from '../../constants/interfaces';
import {
  todoCreateItemActionCreator,
  todoListVisibilityActionCreator,
  todoRemoveItemActionCreator,
  todoToggleAllActionCreator,
  todoToggleItemActionCreator,
} from '../../store/actions/actionsCreator';
import { VisibilityType } from '../../constants/constants';

const TodoList = () => {
  const {
    state: { todos, visibility },
    dispatch,
  } = useContext(AppContext);

  const isTodoListNotEmpty = todos.length !== 0;
  const isAllItemsCompleted = todos.every((todo) => todo.isCompleted);

  const handleTodoCreate = (newTodo: ITodo) => {
    dispatch(todoCreateItemActionCreator(newTodo));
  };

  const handleTodoToggle = (id: string) => {
    dispatch(todoToggleItemActionCreator(id));
  };

  const handleTodoRemove = (id: string) => {
    dispatch(todoRemoveItemActionCreator(id));
  };

  const handleTodoToggleAll = () => {
    dispatch(todoToggleAllActionCreator(!isAllItemsCompleted));
  };

  const handleTodoVisibility = (visibility: VisibilityType) => {
    dispatch(todoListVisibilityActionCreator(visibility));
  };

  const filterTodos = todos.filter((todo) => {
    if (visibility === VisibilityType.COMPLETED && todo.isCompleted) {
      return true;
    }

    if (visibility == VisibilityType.ACTIVE && !todo.isCompleted) {
      return true;
    }

    if (visibility == VisibilityType.ALL) {
      return true;
    }
  });

  return (
    <div className="todoapp">
      <header className="header">
        <h1>Todos</h1>
        <TodoForm handleTodoCreate={handleTodoCreate} />
      </header>
      <div className="main">
        {isTodoListNotEmpty && (
          <>
            <input
              type="checkbox"
              id="toggle-all"
              className="toggle-all"
              checked={isAllItemsCompleted}
              onChange={handleTodoToggleAll}
            />
            <label htmlFor="toggle-all">Mark all as complete</label>
          </>
        )}
        <ul className="todo-list">
          {filterTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleTodoToggle={handleTodoToggle}
              handleTodoRemove={handleTodoRemove}
            />
          ))}
        </ul>
      </div>
      {isTodoListNotEmpty && (
        <TodoFooter
          todos={todos}
          visibility={visibility}
          handleTodoVisibility={handleTodoVisibility}
        />
      )}
    </div>
  );
};

export default TodoList;
