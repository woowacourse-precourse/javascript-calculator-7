import { SYMBOL } from './constants/Symbol.js';

const calculate = numbersArray => {
  return numbersArray.reduce(
    (prefixSum, currentNumber) => prefixSum + currentNumber,
    SYMBOL.zero,
  );
};

export default calculate;
