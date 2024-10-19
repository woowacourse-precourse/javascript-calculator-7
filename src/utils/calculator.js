import { splitBySeparator, findCustomSeparator } from './separatorHelpers.js';

export const sumByDefaultSeparator = (text) => {
  const numberArray = splitBySeparator([',', ':'], text);

  return numberArray.reduce((acc, num) => acc + num);
};

export const sumByCustomSeparator = (text) => {
  const separator = findCustomSeparator(text);
  const numberArray = splitBySeparator(['//', '\\n', separator], text);

  return numberArray.reduce((acc, num) => acc + num);
};
