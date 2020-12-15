import React from 'react';
import { AppProvider } from './store/storeContainer';
import { Counter } from './components/Counter/Counter';
import TodoList from './components/TodoList/TodoList';

import './App.css';

function App() {
  return (
    <AppProvider>
      <div className="app">
        <TodoList />
        {/*<Counter />*/}
      </div>
    </AppProvider>
  );
}

export default App;
