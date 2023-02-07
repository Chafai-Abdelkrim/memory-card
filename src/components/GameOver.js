import React from 'react';
import gif from '../images/game-over.gif';

function GameOver(props) {
  return (
    <div className="modal">
      <div className="game-over">
        <h2>Game Over!</h2>
        <p>You guessed all the cat pics correctly!</p>
        <img src={gif} alt="" />
        <button onClick={props.resetGame}>Play Again!</button>
      </div>
    </div>
  );
}

export default GameOver;
