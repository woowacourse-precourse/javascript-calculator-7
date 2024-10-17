export const plusCalculator = (array) => {
  const sum = array.reduce((acc, cur) => acc + parseInt(cur), 0);
  return sum;
};
