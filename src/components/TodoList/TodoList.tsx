import React, { useContext } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import AppContext from '../../store/store';

const TodoList = () => {
  const {
    state: { todos },
  } = useContext(AppContext);

  return (
    <div className="main">
      <input type="checkbox" id="toggle-all" className="toggle-all" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
