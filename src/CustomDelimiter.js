import { SYMBOL } from './constants/Symbol.js';
import { ERROR_MESSAGES } from './constants/Message.js';

const parseCustomDelimiter = userInputValue => {
  const formattedInput = userInputValue.replace(
    SYMBOL.escaped_newline_pattern,
    SYMBOL.formatted_newline,
  );
  const delimiterBoundary = formattedInput.indexOf(
    SYMBOL.custom_delimiter_surffix,
  );

  if (delimiterBoundary === SYMBOL.no_delimiter_position) {
    throw new Error(ERROR_MESSAGES.invalid_custom_delimiter);
  }

  const extractedDelimiter = formattedInput
    .substring(SYMBOL.delimiter_start_index, delimiterBoundary)
    .trim();

  if (!extractedDelimiter) {
    throw new Error(ERROR_MESSAGES.empty_custom_delimiter);
  }

  if (extractedDelimiter.length !== SYMBOL.max_custom_delimiter_length) {
    throw new Error(ERROR_MESSAGES.invalid_custom_delimiter_length);
  }

  const escapedDelimiter = extractedDelimiter.replace(
    SYMBOL.special_char_escape_pattern,
    SYMBOL.special_char_escape_replacement,
  );
  const remainingValue = formattedInput.substring(
    delimiterBoundary + SYMBOL.newline_offset,
  );

  return { escapedDelimiter, remainingValue };
};

export default parseCustomDelimiter;
