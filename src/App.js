import React from 'react';
import Characters from './components/characters'
import Login from './components/login'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <Characters />
      </header>
    </div>
  );
}

export default App;
