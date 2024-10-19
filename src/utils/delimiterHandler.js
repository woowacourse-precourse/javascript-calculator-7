import {
  checkCustomDelimiterPosition,
  validateSplitValues,
} from '../validator.js';

function splitStringByDefaultDelimiters(userInput) {
  const DEFAULT_DELIMITER_PATTERN = /[,:]/g;
  const splitValues = userInput.split(DEFAULT_DELIMITER_PATTERN);

  return splitValues;
}

function splitStringByCustomDelimiter(userInput) {
  const CUSTOM_DELIMITER_PATTERN = /^\/\/(.*?)\\n/;
  const match = userInput.match(CUSTOM_DELIMITER_PATTERN);

  checkCustomDelimiterPosition(match);

  const customDelimiter = match[1];
  const splitValues = userInput.split('\\n')[1].split(customDelimiter);

  return splitValues;
}

export default function splitStringByDelimiter(userInput) {
  const hasCustomDelimiter = /\/\/(.*?)\\n/.test(userInput);
  const splitValues = hasCustomDelimiter
    ? splitStringByCustomDelimiter(userInput)
    : splitStringByDefaultDelimiters(userInput);

  validateSplitValues(userInput, splitValues, hasCustomDelimiter);

  return splitValues;
}
