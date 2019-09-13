import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [fouls, setFouls] = useState(0);

  return (
    <div className="App">
      <Display balls={balls} strikes={strikes}/>
      <Dashboard />
    </div>
  );
}

export default App;
