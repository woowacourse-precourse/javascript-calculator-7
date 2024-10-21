import getNumbers from './getNumbers.js';
import sumNumbers from './sumNumbers.js';

const getCalculateResult = function getCalculateResultFunc(
  processedInput,
  delimiter,
) {
  const numbers = getNumbers(processedInput, delimiter.getDelimiters());
  const total = sumNumbers(numbers);

  return total;
};

export default getCalculateResult;
