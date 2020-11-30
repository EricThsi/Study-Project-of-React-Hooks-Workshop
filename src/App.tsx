import React from 'react';
import { AppProvider } from './store/storeContainer';
// import { Counter } from './components/Counter/Counter';
import TodoList from './components/TodoList/TodoList';

import './App.css';

function App() {
  return (
    <AppProvider>
      <div className="app">
        <div className="todoapp">
          <header className="header">
            <h1>Todos</h1>
          </header>
          <TodoList />
          {/*<Counter />*/}
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
