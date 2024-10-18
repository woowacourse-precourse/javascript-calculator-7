import ERROR_MESSAGES from './constants/errorMessages.js';

function validateNegativeNumber(number) {
  if (number < 0)
    throw new Error(
      `${ERROR_MESSAGES.PREFIX} ${ERROR_MESSAGES.NEGATIVE_NUMBER}`,
    );
}

export function validateEmptyString(userInput) {
  if (userInput === '') return 0;
  return null;
}

export function validateNumbers(parsedArray) {
  return parsedArray.map((value) => {
    const number = Number(value);

    if (Number.isNaN(number))
      throw new Error(
        `${ERROR_MESSAGES.PREFIX} ${ERROR_MESSAGES.INVALID_CHARACTER}`,
      );

    validateNegativeNumber(number);
    return number;
  });
}

export function validateMixedDelimiters(userInput) {
  if (/^\/\/(.*?)\\n.*[,:]/.test(userInput))
    throw new Error(
      `${ERROR_MESSAGES.PREFIX} ${ERROR_MESSAGES.MIXED_DELIMITERS}`,
    );
}

export function validateOnlyDelimiter(delimiterSeparated) {
  const isOnlyDelimeter = delimiterSeparated.every((value) => value === '');

  if (isOnlyDelimeter)
    throw new Error(
      `${ERROR_MESSAGES.PREFIX} ${ERROR_MESSAGES.ONLY_DELIMITER}`,
    );
}
