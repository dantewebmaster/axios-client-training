import React from 'react';
import logo from './logo.svg';
import './App.css';
import getUsers from './services/users.service';

function App() {
  function handleCallApi() {
    const response = getUsers()

    console.log(response.data)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button onClick={handleCallApi}>Call api</button>
      </header>
    </div>
  );
}

export default App;
