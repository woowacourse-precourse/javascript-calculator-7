import ERROR_MESSAGES from './constants/errorMessages.js';
import { validateMixedDelimiters, validateOnlyDelimiter } from './validator.js';

function parseDefaultDelimiters(userInput) {
  const defaultDelimiterPattern = /[,:]/g;
  const delimiterSeparatedArray = userInput.split(defaultDelimiterPattern);

  validateOnlyDelimiter(delimiterSeparatedArray);
  return delimiterSeparatedArray;
}

function parseCustomDelimiters(userInput) {
  const customDelimitersPattern = /^\/\/(.*?)\\n/;
  const match = userInput.match(customDelimitersPattern);

  if (!match) {
    throw new Error(
      `${ERROR_MESSAGES.PREFIX} ${ERROR_MESSAGES.CUSTOM_DELIMITER_POSITION}`,
    );
  }

  const customDelimiter = match[1];
  const delimiterSeparatedArray = userInput
    .split('\\n')[1]
    .split(customDelimiter);

  validateMixedDelimiters(userInput);
  validateOnlyDelimiter(delimiterSeparatedArray);
  return delimiterSeparatedArray;
}

export default function parseInput(userInput) {
  return userInput.startsWith('//')
    ? parseCustomDelimiters(userInput)
    : parseDefaultDelimiters(userInput);
}
