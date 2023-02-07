import React, { useState, useEffect } from 'react';
import { wantedArr, getRandomCats } from '../utils';

function Cards(props) {
  const { cats, selected } = props;

  const [randomCats, setRandomCats] = useState([]);
  const [cardBacks, setCardBacks] = useState([]);
  const [canClick, setCanClick] = useState(1);
  const [firstLoad, setFirstLoad] = useState(1);

  useEffect(() => {
    setTimeout(
      () => {
        setRandomCats(getRandomCats(cats, selected));
        setFirstLoad(0);
      },
      randomCats.length ? 1000 : 0
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cats, selected]);

  useEffect(() => {
    setCardBacks(wantedArr.sort(() => Math.random() - 0.5));
  }, [randomCats]);

  
}
