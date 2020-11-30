import React, { useContext } from 'react';
import AppContext from '../../store/store';
import {
  counterDownActionCreator,
  counterUpActionCreator,
} from '../../store/actions/actionsCreator';

export const Counter = () => {
  const {
    state: { counter },
    dispatch,
  } = useContext(AppContext);

  const counterUp = () => {
    dispatch(counterUpActionCreator());
  };

  const counterDown = () => {
    dispatch(counterDownActionCreator());
  };

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => counterUp()}>+</button>
      <button onClick={() => counterDown()}>-</button>
    </div>
  );
};
