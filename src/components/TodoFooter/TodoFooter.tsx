import React, { FC } from 'react';
import { VisibilityType } from '../../constants/constants';
import { ITodoFooter } from '../../constants/interfaces';

const TodoFooter: FC<ITodoFooter> = ({ todos, visibility }: ITodoFooter) => {
  if (todos.length === 0) {
    return null;
  }

  const isAllSelected = visibility === VisibilityType.ALL ? 'selected' : '';
  const isActiveSelected =
    visibility === VisibilityType.ACTIVE ? 'selected' : '';
  const isCompletedSelected =
    visibility === VisibilityType.COMPLETED ? 'selected' : '';
  const isShowClearButton = todos.some((todo) => todo.isCompleted);
  const itemLeftCount = todos.filter((todo) => !todo.isCompleted).length;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemLeftCount}</strong> item left
      </span>
      <ul className="filters">
        <li>
          <a href="#" className={isAllSelected}>
            All
          </a>
        </li>
        <li>
          <a href="#" className={isActiveSelected}>
            Active
          </a>
        </li>
        <li>
          <a href="#" className={isCompletedSelected}>
            Completed
          </a>
        </li>
        {isShowClearButton && (
          <button className="clear-completed">Clear completed</button>
        )}
      </ul>
    </footer>
  );
};

export default TodoFooter;
