import isVaildateNumber from '../utils/isVaildateNumber.js';

const sumNumbers = function sumNumbersFunc(numbers) {
  const result = numbers.reduce((acc, num) => acc + num, 0);
  isVaildateNumber(result);
  return result;
};

export default sumNumbers;
