import { isNegativeNumber, isNumber } from '../validator.js';

export default function convertStringToNumber(splitValues) {
  const numbers = splitValues.map((value) => {
    const number = isNumber(value);
    isNegativeNumber(number);
    return number;
  });

  return numbers;
}
