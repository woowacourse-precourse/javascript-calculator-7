import { ERROR_MESSAGES } from "../constants/errorMessages.js";
import {
  EMPTY_INPUT_DEFAULT,
  DEFAULT_DELIMITERS,
  CUSTOM_DELIMITER_REGEX,
  ESCAPE_REGEX_PATTERN,
  ESCAPE_REGEX_REPLACEMENT,
} from "../constants/delimiterConstants.js";

export const isEmptyInput = (input) => !input || input.trim() === "";

export const handleEmptyInput = () => EMPTY_INPUT_DEFAULT;

export const handleDefaultDelimiters = (input) =>
  input.split(DEFAULT_DELIMITERS);

export const validateCustomDelimiter = (delimiter) => {
  if (delimiter === "") {
    throw new Error(ERROR_MESSAGES.EMPTY_DELIMITER);
  }
  if (/\d/.test(delimiter)) {
    throw new Error(ERROR_MESSAGES.INVALID_SPLITTER);
  }
};

const escapeRegExp = (string) => {
  return string.replace(ESCAPE_REGEX_PATTERN, ESCAPE_REGEX_REPLACEMENT);
};

export const handleCustomDelimiter = (match) => {
  const [, customDelimiter, numbersString] = match;
  validateCustomDelimiter(customDelimiter);
  const escapedDelimiter = escapeRegExp(customDelimiter);
  return numbersString.split(new RegExp(escapedDelimiter, "g"));
};

const splitNumber = (input) => {
  if (isEmptyInput(input)) {
    return handleEmptyInput();
  }

  const match = input.match(CUSTOM_DELIMITER_REGEX);

  if (match) {
    return handleCustomDelimiter(match);
  }

  return handleDefaultDelimiters(input);
};

export default splitNumber;
