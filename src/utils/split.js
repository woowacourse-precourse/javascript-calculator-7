import { DEFAULT_DELIMITER_STRING } from '../constant.js';

export function findCustomDelimiter(string, validation = []) {
  const match = string.match(/\/\/.*\\n/);

  if (!match) {
    return { customDelimiter: null, numberStr: string };
  }

  const customDelimiter = [...match[0]].slice(2, -2).join('');

  validation.forEach((func) => func(customDelimiter));

  return {
    customDelimiter,
    numberStr: string.slice(match[0].length),
  };
}

export function splitWithCustomDelimiter(
  customDelimiter,
  numberStr,
  validation = []
) {
  const delimiterRegExp = new RegExp(
    customDelimiter
      ? `${DEFAULT_DELIMITER_STRING}|${customDelimiter}`
      : DEFAULT_DELIMITER_STRING
  );
  const numberArr = numberStr.split(delimiterRegExp);

  validation.forEach((func) => func(numberArr));

  return numberArr.map(BigInt);
}
