import React from 'react';

export const ShowTimePerTurn = (props) => {
  const time = props.time;
  const minutes = parseInt(time / 60, 10);
  const seconds = time % 60;

  const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
  const secondsStr = seconds < 10 ? `0${seconds}` : seconds;

  return <p className="time_per_turn">
    <span className="time_per_turn_count">{minutesStr}:{secondsStr} </span><br/> 
    tempo da volta
  </p>
}