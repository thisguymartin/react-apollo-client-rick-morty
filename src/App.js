import React from 'react';

import Characters from './components/characters'
import Login from './components/login'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Characters /> */}
        <Login />
      </header>
    </div>
  );
}

export default App;
