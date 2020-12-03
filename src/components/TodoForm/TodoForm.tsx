import React, { ChangeEvent, KeyboardEvent, FC, useRef, useState } from 'react';
import { ITodo, ITodoForm } from '../../constants/interfaces';
import { nanoid } from 'nanoid';

const TodoForm: FC<ITodoForm> = ({ handleTodoCreate }) => {
  const [formState, setFormState] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormState(event.target.value);
  };

  const handleInputEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const newTodo: ITodo = {
        id: nanoid(),
        text: formState,
        isCompleted: false,
      };

      // Create new todo item
      handleTodoCreate(newTodo);

      // Reset input field
      if (inputRef && inputRef.current) {
        inputRef.current.value = '';
        setFormState('');
      }
    }
  };

  return (
    <input
      type="text"
      className="new-todo"
      placeholder="What needs to be done?"
      ref={inputRef}
      onChange={handleInputChange}
      onKeyPress={handleInputEnter}
    ></input>
  );
};

export default TodoForm;
