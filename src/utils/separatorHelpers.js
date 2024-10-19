import { escapeRegExp } from './regexHelpers.js';

export const findCustomSeparator = (text) => {
  const startIdx = text.indexOf('//');

  if (startIdx === -1) return;

  const newlineIdx = text.indexOf('\\n', startIdx);

  if (newlineIdx === -1) return;

  return text.slice(startIdx + 2, newlineIdx);
};

export const splitBySeparator = (separator, text) => {
  const separatorString = separator.map((x) => escapeRegExp(x)).join('|');
  const regex = new RegExp(`${separatorString}`, 'g');
  const replacedText = text.replace(regex, ',');

  const result = replacedText.split(',').map((x) => +x);

  return result;
};
