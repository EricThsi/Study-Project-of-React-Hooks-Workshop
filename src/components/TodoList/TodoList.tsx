import React, { useContext } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import AppContext from '../../store/store';
import TodoFooter from '../TodoFooter/TodoFooter';
import TodoForm from '../TodoForm/TodoForm';
import { ITodo } from '../../constants/interfaces';
import {
  todoCreateItemActionCreator,
  todoRemoveItemActionCreator,
  todoToggleItemActionCreator,
} from '../../store/actions/actionsCreator';

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
            />
            <label htmlFor="toggle-all">Mark all as complete</label>
          </>
        )}
        <ul className="todo-list">
          {todos.map((todo) => (
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
        <TodoFooter todos={todos} visibility={visibility} />
      )}
    </div>
  );
};

export default TodoList;
