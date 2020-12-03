import React, { useContext } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import AppContext from '../../store/store';
import TodoFooter from '../TodoFooter/TodoFooter';
import TodoForm from '../TodoForm/TodoForm';
import { ITodo } from '../../constants/interfaces';
import { todoCreateItemActionCreator } from '../../store/actions/actionsCreator';

const TodoList = () => {
  const {
    state: { todos, visibility },
    dispatch,
  } = useContext(AppContext);

  const handleTodoCreate = (newTodo: ITodo) => {
    dispatch(todoCreateItemActionCreator(newTodo));
  };

  return (
    <div className="todoapp">
      <header className="header">
        <h1>Todos</h1>
        <TodoForm handleTodoCreate={handleTodoCreate} />
      </header>
      <div className="main">
        <input type="checkbox" id="toggle-all" className="toggle-all" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
      {todos.length !== 0 && (
        <TodoFooter todos={todos} visibility={visibility} />
      )}
    </div>
  );
};

export default TodoList;
