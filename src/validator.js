import Constants from './Constants.js';

export function extractCustomDelimiter(input) {
  if (input.slice(0, 2) !== '//') {
    return input;
  }

  if (input.slice(3, 5) !== '\\n') {
    throw new Error(Constants.ERROR_MESSAGE.INVALID_CUSTOM_DELIMITER);
  }

  if (input[2] >= '1' && input[2] <= '9') {
    throw new Error(Constants.ERROR_MESSAGE.INVALID_CUSTOM_DELIMITER);
  }

  Constants.addDelimiter(input[2]);
  return input.slice(5);
}

