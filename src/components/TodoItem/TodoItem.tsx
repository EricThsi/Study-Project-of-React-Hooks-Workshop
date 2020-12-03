import React, { FC } from 'react';
import { ITodoItem } from '../../constants/interfaces';

const TodoItem: FC<ITodoItem> = (props: ITodoItem) => {
  const {
    todo: { id, text, isCompleted },
    handleTodoToggle,
    handleTodoRemove,
  } = props;

  const handleChange = () => {
    handleTodoToggle(id);
  };

  const handleRemove = () => {
    handleTodoRemove(id);
  };

  return (
    <li className={isCompleted ? 'completed' : ''}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={isCompleted}
          onChange={handleChange}
        />
        <label>{text} </label>
        <button className="destroy" onClick={handleRemove}></button>
      </div>
      <input type="text" className="edit" />
    </li>
  );
};

export default TodoItem;
