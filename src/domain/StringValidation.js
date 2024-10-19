import { ERROR_CODES, VALID_STRING_CODE } from "../constants/constants.js";

class StringValidation {
  #parsedValue;
  #delimiters;

  constructor(inputValue) {
    this.inputValue = inputValue;
    this.#parsedValue = inputValue;
    this.#delimiters = [',', ':'];
  }

  validate() {
    if (this.#isEmpty()) return ERROR_CODES.EMPTY_STRING;
    if (this.#hasLeadingOrTrailingInvalidCharacter()) return ERROR_CODES.LEADING_TRAILING_CHARACTER;
    if (this.#hasCustomDelimiter()) {
      const customDelimiterValidationResult = this.#customDelimiterValidationResult();
      if (customDelimiterValidationResult) return customDelimiterValidationResult;
    }
    if (this.#hasUndefinedDelimiter()) return ERROR_CODES.UNDEFINED_DELIMITER;
    if (this.#hasConsecutiveDelimiters()) return ERROR_CODES.CONSECUTIVE_DELIMITERS;

    return VALID_STRING_CODE;
  }

  #isEmpty() {
    return this.inputValue === '';
  }

  #hasCustomDelimiter() {
    return this.inputValue.startsWith('//');
  }

  #hasLeadingOrTrailingInvalidCharacter() {
    const firstChar = this.inputValue[0];
    const lastChar = this.inputValue[this.inputValue.length - 1];
    return (!this.#hasCustomDelimiter() 
    && (isNaN(firstChar) || firstChar === ' ')) 
    || (isNaN(lastChar) || lastChar === ' ');
  }

  #customDelimiterValidationResult() {
    const customDelimiter = this.inputValue.substring(2, this.inputValue.indexOf('\\n'));
    const afterDelimiterChar = this.inputValue[this.inputValue.indexOf('\\n') + 2];
    this.#parseAndEscapeDelimiters(customDelimiter);

    if (!this.inputValue.includes('\\n')) return ERROR_CODES.INVALID_CUSTOM_DELIMITER;
    if (customDelimiter === '') return ERROR_CODES.EMPTY_CUSTOM_DELIMITER;
    if (customDelimiter.length >= 2) return ERROR_CODES.MULTIPLE_CUSTOM_DELIMITERS;
    if (!isNaN(customDelimiter) && customDelimiter !== ' ') return ERROR_CODES.NUMERIC_CUSTOM_DELIMITER;
    if (isNaN(afterDelimiterChar) || afterDelimiterChar === ' ') return ERROR_CODES.INVALID_CHARACTER_AFTER_CUSTOM_DELIMITER;

    return null;
  }

  #parseAndEscapeDelimiters(customDelimiter) {
    this.#parsedValue = this.inputValue.substring(this.inputValue.indexOf('\\n') + 2);
    this.#delimiters.push(customDelimiter);
    this.#delimiters = this.#delimiters.map(delimiter => delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  }

  #hasUndefinedDelimiter() {
    const invalidCharacterRegex = new RegExp(`[^0-9${this.#delimiters.join('')}]`);
    return invalidCharacterRegex.test(this.#parsedValue);
  }

  #hasConsecutiveDelimiters() {
    const consecutiveDelimitersRegex = new RegExp(`([${this.#delimiters.join('')}]){2,}`);
    return consecutiveDelimitersRegex.test(this.#parsedValue);
  }
}

export default StringValidation;