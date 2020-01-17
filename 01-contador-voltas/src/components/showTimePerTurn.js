import React from 'react';
import { secondsToTime } from '../utils/utils';

export const ShowTimePerTurn = (props) => {
  return <p className="time_per_turn">
    <span className="time_per_turn_count">{secondsToTime(props.time)}</span>
    <br/> 
    tempo da volta
  </p>
}