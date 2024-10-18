import { DEFAULT_DELIMITER_STRING } from '../constant.js';
import { isValidDelimiterLength, isValidNumberArray } from './validation.js';

function findCustomDelimiter(string) {
  const regExp = /\/\/.*\\n/;

  if (!regExp.test(string)) {
    return { customDelimiter: null, numbers: string };
  }

  return {
    customDelimiter: [...string.match(regExp)[0]].slice(2, -2).join(''),
    numbers: string.replace(regExp, ''),
  };
}

export default function splitWithCustomDelimiter(string) {
  const { customDelimiter, numbers } = findCustomDelimiter(string);
  const delimiterRegExp = new RegExp(
    customDelimiter
      ? `${DEFAULT_DELIMITER_STRING}|${customDelimiter}`
      : DEFAULT_DELIMITER_STRING
  );
  const numberArr = numbers.split(delimiterRegExp);

  customDelimiter && isValidDelimiterLength(customDelimiter);
  isValidNumberArray(numberArr);

  return numberArr.map(BigInt);
}
