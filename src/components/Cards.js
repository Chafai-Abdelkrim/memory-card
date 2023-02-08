import React, { useState, useEffect } from 'react';
import { wantedArr, getRandomCats } from '../utils';

function Cards(props) {
  const { cats, selected, onSelection } = props;

  const [randomCats, setRandomCats] = useState([]);
  const [cardBacks, setCardBacks] = useState([]);
  const [canClick, setCanClick] = useState(1);

  useEffect(() => {
    setTimeout(
      () => {
        setRandomCats(getRandomCats(cats, selected));
      },
      randomCats.length ? 1000 : 0
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cats, selected]);

  useEffect(() => {
    setCardBacks(wantedArr.sort(() => Math.random() - 0.5));
  }, [randomCats]);

  const handleClick = (obj) => {
    if (!canClick) return;

    setCanClick(0);

    document.querySelectorAll('.card').forEach((element) =>
      element.animate(
        [{ transform: 'rotateY(0turn)' }, { transform: 'rotateY(0.5turn)' }],
        {
          duration: 1000,
          iterations: 2,
          direction: 'alternate',
          easing: 'ease-in-out',
        }
      )
    );

    onSelection(obj);

    setTimeout(() => {
      setCanClick(1);
    }, 2000);
  };

  return (
    <div className='card-container'>
      {randomCats.map((obj, index) => (
        <div 
          key={index}
          className='card'
          onClick={() => handleClick(obj)}
          style={{ '--bg-image': `url(${cardBacks[index]})` }}
        >
          <img src={obj.image} alt='' />
          <p>{obj.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Cards;