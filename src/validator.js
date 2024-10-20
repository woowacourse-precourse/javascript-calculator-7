import throwError from './error/errorHandler.js';

export function isNegativeNumber(number) {
  if (number < 0) throwError('NEGATIVE_NUMBER');
}

export function isNumber(value) {
  const number = Number(value);

  if (Number.isNaN(number)) throwError('INVALID_CHARACTER');
  return number;
}

export function isEmptyString(userInput) {
  if (userInput === '') return true;
  return false;
}

export function checkForMixedDelimiters(userInput) {
  if (/^\/\/(.*?)\\n.*[,:]/.test(userInput)) throwError('MIXED_DELIMITERS');
}

export function checkForDelimiterOnly(splitValues) {
  const isOnlyDelimeter = splitValues.every((value) => value === '');

  if (isOnlyDelimeter) throwError('ONLY_DELIMITER');
}

export function validateSplitValues(
  userInput,
  splitValues,
  hasCustomDelimiter,
) {
  checkForDelimiterOnly(splitValues);

  if (hasCustomDelimiter) {
    checkForMixedDelimiters(userInput);
  }
}

export function checkCustomDelimiterPosition(match) {
  if (!match) throwError('CUSTOM_DELIMITER_POSITION');
}
