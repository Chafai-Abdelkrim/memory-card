const importAll = (r) => r.keys().map(r);

const images = importAll(
  require.context('../images/cat-imgs/', false, /\.(webp)$/)
);

const catArr = images.map((path) => {
  return {
    name: path.split(/[., /]/)[3],
    image: path,
  };
});

export default catArr;