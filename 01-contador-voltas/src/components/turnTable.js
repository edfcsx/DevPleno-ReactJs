import React from 'react';

export const TurnTable = (props) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Volta</th>
            <th>Tempo</th>
          </tr>
        </thead>
        <tbody>
          {
            props.data.map((turn) => (
              <tr key={turn.turn}>
                <td>{turn.turn}</td>
                <td>{turn.time}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}