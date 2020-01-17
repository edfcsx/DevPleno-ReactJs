import React, { useState, useEffect } from 'react';
import { ShowTurns } from './components/showTurns';
import { ShowTimePerTurn } from './components/showTimePerTurn';
import { Button } from './components/Button';
import { TurnTable } from './components/turnTable';

import './App.css';

function App() {
  const [turns, setTurns] = useState({
    total: 1,
    turns: []
  });

  let [time, setTime] = useState(0);

  const [running, setRunning] = useState(false);

  const alterTurns = (operation) => {
    const newTurns = { ...turns };

    if (operation.substr(0, 1) === '+') {
      newTurns.turns.push({
        turn: newTurns.total,
        time,
      });
    }

    if (operation.substr(0, 1) === '-') {
      newTurns.turns.pop();
    }

    setTurns({
      ...newTurns,
      //eslint-disable-next-line
      total: eval(`${turns.total} ${operation}`)
    });

    setTime(0);
  }

  useEffect(() => {
    let timer = null;

    if(running) {
      timer = setInterval(() => setTime(old => old + 1), 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [running]);

  const toggleRunning = () => setRunning(!running);

  const restart = () => {
    setTurns({
      turns: [],
      total: 1,
    });

    setRunning(false);

    setTime(0)
  }
  
  return (
    <div className="App">
      <ShowTurns turns={turns.total} />
      <p>
        <Button className="operation" text='+' onClick={() => alterTurns('+1')} />
        <Button className="operation" text='-' onClick={() => alterTurns('-1')} />
      </p>
      <ShowTimePerTurn time={time} />
      <p>
        <Button text={running ? 'Pausar' : 'Iniciar' } onClick={toggleRunning} />
        <Button text='Reiniciar' onClick={restart} />
      </p>
      <TurnTable data={turns.turns} />
    </div>
  );
}

export default App;
