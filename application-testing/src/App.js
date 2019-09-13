import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const clearBoard = () => {
    setBalls(0);
    setStrikes(0);
  }

  const addStrike = () => {
    if (strikes ===2 ) clearBoard();
    else setStrikes(strikes + 1);
  }

  const addBall = () => {
    if (balls === 3) clearBoard();
    else setBalls(balls + 1);
  }

  return (
    <div className="App">
      <Display balls={balls} strikes={strikes}/>
      <Dashboard />
    </div>
  );
}

export default App;
