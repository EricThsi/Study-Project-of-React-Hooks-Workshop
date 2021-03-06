import React, { FC, useReducer } from 'react';
import { appReducer } from './reducers/appReducer';
import AppContext, { initialState } from './store';

export const AppProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
