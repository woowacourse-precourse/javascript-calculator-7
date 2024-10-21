import { DEFAULT_SEPARATORS } from '../constants.js';

export const checkIsDefaultString = (line) => {
  return !line.split('').some((char) => 
    isNaN(char) && !DEFAULT_SEPARATORS.includes(char)
  );
};

export const divideCustom = (str) => {
  const customSeparatorPart = str.substring(0, 5);
  const targetStringPart = str.substring(5);

  return [customSeparatorPart, targetStringPart];
};

export const getFinalSeparators = (customPart) => [...DEFAULT_SEPARATORS, customPart[2]];

export const separate = (str, separators) => {
  const replacedString = separators.reduce(
    (acc, cur) => acc.replaceAll(cur, ','),
    str
  );

  return replacedString.split(',').map(Number);
};

export const sumString = (line, separators = DEFAULT_SEPARATORS) => {
  const separatedNumbers = separate(line, separators);

  return separatedNumbers.reduce((acc, cur) => acc + cur, 0);
};
