import React, { useState, useEffect } from 'react';
import './App.css';

const ShowTurns = (props) => 
  <p>{props.turns} <br/> voltas</p>

const ShowTimePerTurn = (props) => {
  const time = props.time;
  const minutes = parseInt(time / 60, 10);
  const seconds = time % 60;

  const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
  const secondsStr = seconds < 10 ? `0${seconds}` : seconds;

  return <p>{minutesStr}:{secondsStr} <br/> tempo da volta</p>
}

const Button = (props) =>
  <button onClick={props.onClick}>{props.text}</button>

function App() {
  const [turns, setTurns] = useState({
    total: 1,
    turns: []
  });

  let [time, setTime] = useState(0);

  const [running, setRunning] = useState(false);

  const alterTurns = (operation) => {
    setTurns({
      ...turns,
      //eslint-disable-next-line
      total: eval(`${turns.total} ${operation}`)
    })
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
  
  return (
    <div className="App">
      <ShowTurns turns={turns.total} />
      <p>
        <Button text='+' onClick={() => alterTurns('+1')} />
        <Button text='-' onClick={() => alterTurns('-1')} />
      </p>
      <ShowTimePerTurn time={time} />
      <p>
        { !running && <Button text='Iniciar' onClick={toggleRunning} /> }
        { running && <Button text='Pausar' onClick={toggleRunning} /> }
        <Button text='Reiniciar' />
      </p>
    </div>
  );
}

export default App;
