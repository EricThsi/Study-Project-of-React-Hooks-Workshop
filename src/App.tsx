import React from 'react';
import { AppProvider } from './storeContainer';
import { Counter } from './components/Counter/Counter';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Counter />
        <p>TodoList App by React with Hooks.</p>
      </div>
    </AppProvider>
  );
}

export default App;
