const importAll = (r) => r.keys().map(r);

const wantedArr = importAll(
  require.context('../images/wanted-images/', false, /\.(webp)$/)
);

export default wantedArr;
