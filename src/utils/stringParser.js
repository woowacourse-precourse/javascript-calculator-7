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

export const addCustomSeparator = (separators, customPart) => {
  separators.push(customPart[2]);
  return separators;
};

export const separate = (str, separators) => {
  const replacedString = separators.reduce(
    (acc, cur) => acc.replaceAll(cur, ','),
    str
  );
  return replacedString.split(',').map(Number);
};

export const sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0);

export const sumString = (line, separators) => sum(separate(line, separators));
