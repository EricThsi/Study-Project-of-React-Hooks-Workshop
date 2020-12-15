import React, { FC, MouseEvent } from 'react';
import { VisibilityType } from '../../constants/constants';
import { ITodoFooter } from '../../constants/interfaces';

const TodoFooter: FC<ITodoFooter> = ({
  todos,
  visibility,
  handleTodoVisibility,
}: ITodoFooter) => {
  const isAllSelected = visibility === VisibilityType.ALL ? 'selected' : '';
  const isActiveSelected =
    visibility === VisibilityType.ACTIVE ? 'selected' : '';
  const isCompletedSelected =
    visibility === VisibilityType.COMPLETED ? 'selected' : '';
  const isShowClearButton = todos.some((todo) => todo.isCompleted);
  const itemLeftCount = todos.filter((todo) => !todo.isCompleted).length;

  const handleVisibilityChange = (
    event: MouseEvent<HTMLAnchorElement>,
    visibility: VisibilityType,
  ) => {
    event.preventDefault();
    handleTodoVisibility(visibility);
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemLeftCount}</strong> item left
      </span>
      <ul className="filters">
        <li>
          <a
            href="#"
            className={isAllSelected}
            onClick={(event) =>
              handleVisibilityChange(event, VisibilityType.ALL)
            }
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#"
            className={isActiveSelected}
            onClick={(event) =>
              handleVisibilityChange(event, VisibilityType.ACTIVE)
            }
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#"
            className={isCompletedSelected}
            onClick={(event) =>
              handleVisibilityChange(event, VisibilityType.COMPLETED)
            }
          >
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
