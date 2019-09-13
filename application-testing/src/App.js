import React, { useState } from 'react';
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

  const foulBall = () => {
    if (strikes === 2) return;
    else setStrikes(strikes + 1);
  }

  return (
    <div className="App">
      <Display balls={balls} strikes={strikes}/>
      <Dashboard addStrike={addStrike} addBall={addBall} foulBall={foulBall} clearBoard={clearBoard} />
    </div>
  );
}

export default App;
