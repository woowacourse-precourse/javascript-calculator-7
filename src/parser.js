import {
  CUSTOM_DELIMITER,
  EXTRA_NUMBERS_MESSAGE,
  ERROR_MESSAGE,
} from "./message.js";
import {
  validateSpecialCharactersInString,
  validateNumericInput,
  hasSeparator,
} from "./validation.js";

export function extractNumbers(input) {
  const hasComma = hasSeparator(input, EXTRA_NUMBERS_MESSAGE.COMMA);
  const hasSemicolon = hasSeparator(input, EXTRA_NUMBERS_MESSAGE.SEMICOLON);
  const hasCustomDelimiterPrefix = hasSeparator(
    input,
    EXTRA_NUMBERS_MESSAGE.CUSTOM_DELIMITER_PREFIX
  );
  const hasCustomDelimiterSuffix = hasSeparator(
    input,
    EXTRA_NUMBERS_MESSAGE.CUSTOM_DELIMITER_SUFFIX
  );

  const hasCommaAndSemicolon = hasComma && hasSemicolon;
  const hasCustomSeparator =
    hasCustomDelimiterPrefix && hasCustomDelimiterSuffix;

  if (hasCustomSeparator) {
    const isCustomDelimiterAtStart = input.indexOf(
      EXTRA_NUMBERS_MESSAGE.CUSTOM_DELIMITER_PREFIX
    );

    if (isCustomDelimiterAtStart)
      throw new Error(ERROR_MESSAGE.CUSTOM_DELIMITER_POSITION);
    if (!isCustomDelimiterAtStart)
      return splitUsingCustomDelimiterAndConvertToNumbers(
        input,
        EXTRA_NUMBERS_MESSAGE.CUSTOM_DELIMITER_SUFFIX
      );
  }
  if (hasCommaAndSemicolon)
    return validateSpecialCharactersInString(input, [
      EXTRA_NUMBERS_MESSAGE.COMMA,
      EXTRA_NUMBERS_MESSAGE.SEMICOLON,
    ]);
  if (hasComma)
    return validateSpecialCharactersInString(
      input,
      EXTRA_NUMBERS_MESSAGE.COMMA
    );
  if (hasSemicolon)
    return validateSpecialCharactersInString(
      input,
      EXTRA_NUMBERS_MESSAGE.SEMICOLON
    );
  throw new Error(ERROR_MESSAGE.INVALID_SPECIAL_CHAR_MESSAGE);
}

export function splitUsingCustomDelimiterAndConvertToNumbers(
  input,
  customDelimiterSuffix
) {
  const customDelimiterSuffixIndex = input.indexOf(customDelimiterSuffix);
  const customDelimiter = input.slice(
    CUSTOM_DELIMITER.PREFIX_LENGTH,
    customDelimiterSuffixIndex
  );
  const stringToSeparate = input.slice(
    customDelimiterSuffixIndex + CUSTOM_DELIMITER.SUFFIX_LENGTH
  );

  return validateSpecialCharactersInString(stringToSeparate, customDelimiter);
}

export function separatingStrings(input, separator) {
  const isTwoSeparators = typeof separator === "object";

  if (isTwoSeparators) {
    const [comma, semicolon] = separator;
    const separatedString = input.replaceAll(semicolon, comma).split(comma);
    return validateNumericInput(separatedString);
  }
  if (!isTwoSeparators) {
    const separatedString = input.split(separator);
    return validateNumericInput(separatedString);
  }
}

export function convertToNumbers(separatedString) {
  return separatedString.map(Number);
}
