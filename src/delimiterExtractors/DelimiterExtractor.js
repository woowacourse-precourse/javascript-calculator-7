import {
  CUSTOM_DELIMITER_PATTERN,
  DEFAULT_DELIMITERS,
  ERROR_MESSAGES,
} from '../constants.js';
import IDelimiterExtractor from '../interfaces/IDelimiterExtractor.js';

class DelimiterExtractor extends IDelimiterExtractor {
  #customDelimiter;

  constructor() {
    super();
    this.#customDelimiter = null;
  }

  extractDelimiter(inputValue) {
    const customDelimiterMatch = inputValue.match(CUSTOM_DELIMITER_PATTERN);

    if (!customDelimiterMatch) {
      return inputValue;
    }

    this.validateCustomDelimiterPosition(customDelimiterMatch);
    this.setCustomDelimiter(customDelimiterMatch[1]);

    return inputValue.slice(customDelimiterMatch[0].length);
  }

  validateCustomDelimiterPosition(match) {
    if (match.index !== 0) {
      throw new Error(ERROR_MESSAGES.CUSTOM_DELIMITER_NOT_AT_START);
    }
  }

  setCustomDelimiter(customDelimiter) {
    if (customDelimiter.length > 1) {
      throw new Error(ERROR_MESSAGES.CUSTOM_DELIMITER_TOO_LONG);
    }
    this.#customDelimiter = customDelimiter;
  }

  getDelimiters() {
    if (this.#customDelimiter) {
      return [...DEFAULT_DELIMITERS, this.#customDelimiter];
    }
    return DEFAULT_DELIMITERS;
  }
}

export default DelimiterExtractor;
