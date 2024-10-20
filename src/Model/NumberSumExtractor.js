export const SumNumbersFromString = (input) => {
  const numberList = (input.match(/\d+/g) || []).map(Number);
  const result = NUMBER_LIST.reduce((acc, num) => acc + num, 0);

  return result;
};
