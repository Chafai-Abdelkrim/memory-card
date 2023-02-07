import React from 'react';

function Scoreboard(props) {
  return (
    <div className="scoreboard-container">
      <p>Score: {props.score}</p>
      <p>Highest Score: {props.highestScore}</p>
    </div>
  );
}

export default Scoreboard;
