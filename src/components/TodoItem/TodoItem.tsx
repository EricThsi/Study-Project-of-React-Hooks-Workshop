import React, { FC } from 'react';
import { ITodoItem } from '../../constants/interfaces';

const TodoItem: FC<ITodoItem> = (props: ITodoItem) => {
  const { todo } = props;
  return (
    <div className="view todo-item">
      <input className="toggle" type="checkbox" checked={todo.isCompleted} />
      <label>{todo.text} </label>
      <button className="destroy"></button>
      <input type="text" className="edit" />
    </div>
  );
};

export default TodoItem;
