import React, { useContext } from 'react';
import AppContext from '../../store/store';
import { counterIncreaseActionCreator } from '../../store/actions/actionsCreator';

export const Counter = () => {
  const {
    state: { counter },
    dispatch,
  } = useContext(AppContext);

  const increaseCounter = () => {
    dispatch(counterIncreaseActionCreator());
  };

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => increaseCounter()}>Increase</button>
    </div>
  );
};
