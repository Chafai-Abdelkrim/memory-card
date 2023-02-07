const getRandomCats = (catArr, selectedArr) => {
  const arrayOne = [...catArr].sort(() => Math.random() - 0.5);
  const arrayTwo = [...selectedArr].sort(() => Math.random() - 0.5);

  const newArray = [];

  while (newArray.length < 4) {
    if (arrayOne.length) newArray.push(arrayOne.pop());
    if (arrayTwo.length) newArray.push(arrayTwo.pop());
  }

  return newArray.sort(() => Math.random() - 0.5);
};

export default getRandomCats;
