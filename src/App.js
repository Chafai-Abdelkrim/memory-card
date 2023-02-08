import { useState } from 'react';
import { catArr } from './utils';
import { Header, Scoreboard, Cards, Footer, GameOver } from './components/';

function App() {
  const [cats, setCats] = useState(catArr);
  const [selected, setSelected] = useState([]);
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);


  const resetGame = () => {
    setScore(0);
    setSelected([]);
    setCats(catArr);
  };

  const onSelection = (obj) => {
    if (selected.some((object) => object.name === obj.name)) {
      resetGame();
      return;
    }

    setScore(score + 1);
    setSelected([...selected, obj]);
    setCats([...cats.filter((cat) => cat.name !== obj.name)]);

    if (score === highestScore) setHighestScore(highestScore + 1);
  };

  return (
    <div className="App">
      <Header />
      <Scoreboard score={score} highestScore={highestScore} />
      {selected.length === catArr.length ? (
        <GameOver resetGame={resetGame} />
      ) : (
        <Cards cats={cats} selected={selected} onSelection={onSelection} />
      )}
      <Footer />
    </div>
  );
}

export default App;
