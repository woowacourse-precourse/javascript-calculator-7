import ERROR_MESSAGES from './constants/errorMessages.js';

export function isNegativeNumber(number) {
  if (number < 0)
    throw new Error(
      `${ERROR_MESSAGES.PREFIX} ${ERROR_MESSAGES.NEGATIVE_NUMBER}`,
    );
}

export function isNumber(value) {
  const number = Number(value);

  if (Number.isNaN(number))
    throw new Error(
      `${ERROR_MESSAGES.PREFIX} ${ERROR_MESSAGES.INVALID_CHARACTER}`,
    );
  return number;
}

export function isEmptyString(userInput) {
  if (userInput === '') return true;
  return false;
}

export function checkForMixedDelimiters(userInput) {
  if (/^\/\/(.*?)\\n.*[,:]/.test(userInput))
    throw new Error(
      `${ERROR_MESSAGES.PREFIX} ${ERROR_MESSAGES.MIXED_DELIMITERS}`,
    );
}

export function checkForDelimiterOnly(splitValues) {
  const isOnlyDelimeter = splitValues.every((value) => value === '');

  if (isOnlyDelimeter)
    throw new Error(
      `${ERROR_MESSAGES.PREFIX} ${ERROR_MESSAGES.ONLY_DELIMITER}`,
    );
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
  if (!match) {
    throw new Error(
      `${ERROR_MESSAGES.PREFIX} ${ERROR_MESSAGES.CUSTOM_DELIMITER_POSITION}`,
    );
  }
}
