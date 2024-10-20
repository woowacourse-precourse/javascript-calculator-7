export const sumNumbersFromString = (input) => {
  const numberList = (input.match(/\d+/g) || []).map(Number);
  const result = numberList.reduce((acc, num) => acc + num, 0);

  return result;
};
