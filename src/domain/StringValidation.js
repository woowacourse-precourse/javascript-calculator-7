import { ERROR_CODES, VALID_STRING_CODE } from "../constants/constants.js";

class StringValidation {
  static validate(inputValue) {
    if (this.#isEmpty(inputValue)) return ERROR_CODES.EMPTY_STRING;
    if (this.#hasLeadingOrTrailingInvalidCharacter(inputValue)) return ERROR_CODES.LEADING_TRAILING_CHARACTER;
    if (this.#hasCustomDelimiter(inputValue)) {
      const customDelimiterValidationResult = this.#customDelimiterValidationResult(inputValue);
      if (customDelimiterValidationResult) return customDelimiterValidationResult;
    }

    const { parsedValue, delimiters } = this.#extractParsedValueAndDelimiters(inputValue);
    if (this.#hasUndefinedDelimiter(parsedValue, delimiters)) return ERROR_CODES.UNDEFINED_DELIMITER;
    if (this.#hasConsecutiveDelimiters(parsedValue, delimiters)) return ERROR_CODES.CONSECUTIVE_DELIMITERS;

    return VALID_STRING_CODE;
  }

  static #isEmpty(inputValue) {
    return inputValue === '';
  }

  static #hasCustomDelimiter(inputValue) {
    return inputValue.startsWith('//');
  }

  static #hasLeadingOrTrailingInvalidCharacter(inputValue) {
    const firstChar = inputValue[0];
    const lastChar = inputValue[inputValue.length - 1];
    return (!this.#hasCustomDelimiter(inputValue) 
    && (isNaN(firstChar) || firstChar === ' ')) 
    || (isNaN(lastChar) || lastChar === ' ');
  }

  static #customDelimiterValidationResult(inputValue) {
    const customDelimiter = inputValue.substring(2, inputValue.indexOf('\\n'));
    const afterDelimiterChar = inputValue[inputValue.indexOf('\\n') + 2];

    if (!inputValue.includes('\\n')) return ERROR_CODES.INVALID_CUSTOM_DELIMITER;
    if (customDelimiter === '') return ERROR_CODES.EMPTY_CUSTOM_DELIMITER;
    if (customDelimiter.length >= 2) return ERROR_CODES.MULTIPLE_CUSTOM_DELIMITERS;
    if (!isNaN(customDelimiter) && customDelimiter !== ' ') return ERROR_CODES.NUMERIC_CUSTOM_DELIMITER;
    if (isNaN(afterDelimiterChar) || afterDelimiterChar === ' ') return ERROR_CODES.INVALID_CHARACTER_AFTER_CUSTOM_DELIMITER;
    return null;
  }

  static #extractParsedValueAndDelimiters(inputValue) {
    let parsedValue = inputValue;
    const delimiters = [',', ':'];

    if (this.#hasCustomDelimiter(inputValue)) {
      parsedValue = inputValue.substring(inputValue.indexOf('\\n') + 2);
      const customDelimiter = inputValue.substring(2, inputValue.indexOf('\\n'));
      delimiters.push(customDelimiter);
    }
    return { parsedValue, delimiters: this.#escapeDelimiters(delimiters) };
  }

  static #escapeDelimiters(delimiters) {
    return delimiters.map(delimiter => delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  }

  static #hasUndefinedDelimiter(parsedValue, delimiters) {
    const invalidCharacterRegex = new RegExp(`[^0-9${delimiters.join('')}]`);
    return invalidCharacterRegex.test(parsedValue);
  }

  static #hasConsecutiveDelimiters(parsedValue, delimiters) {
    const consecutiveDelimitersRegex = new RegExp(`([${delimiters.join('')}]){2,}`);
    return consecutiveDelimitersRegex.test(parsedValue);
  }
}

export default StringValidation;