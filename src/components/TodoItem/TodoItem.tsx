import React, { FC } from 'react';
import { ITodoItem } from '../../constants/interfaces';

const TodoItem: FC<ITodoItem> = (props: ITodoItem) => {
  const {
    todo: { isCompleted, text },
  } = props;
  return (
    <li className={isCompleted ? 'completed' : ''}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={isCompleted} />
        <label>{text} </label>
        <button className="destroy"></button>
      </div>
      <input type="text" className="edit" />
    </li>
  );
};

export default TodoItem;
