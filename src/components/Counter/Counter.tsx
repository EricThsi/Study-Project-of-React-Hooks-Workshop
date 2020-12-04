import React, { useContext } from 'react';
import AppContext from '../../store/store';
import {
  counterDownActionCreator,
  counterUpActionCreator,
} from '../../store/actions/actionsCreator';
import HooksSimulateDidMount from '../Simulation/HooksSimulateDidMount';
import HooksSimulateDidUpdate from '../Simulation/HooksSimulateDidUpdate';
import HooksSimulateWillUmount from '../Simulation/HooksSimulateWillUmount';

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
      <button onClick={() => counterUp()}>Count Up +</button>
      <button onClick={() => counterDown()}>Count Down -</button>
      <p>-------------------------------------------</p>
      <HooksSimulateDidMount count={counter} />
      {/*<HooksSimulateDidUpdate count={counter} />*/}
      {/*{counter !== 1 && <HooksSimulateWillUmount count={counter} />}*/}
    </div>
  );
};
