export const SumNumbersFromString = (input) => {
  const NUMBER_LIST = (input.match(/\d+/g) || []).map(Number);
  const RESULT = NUMBER_LIST.reduce((acc, num) => acc + num, 0);

  return RESULT;
};
