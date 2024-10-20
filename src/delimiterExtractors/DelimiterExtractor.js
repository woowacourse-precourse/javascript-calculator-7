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

    if (customDelimiterMatch.index !== 0) {
      throw new Error(ERROR_MESSAGES.CUSTOM_DELIMITER_NOT_AT_START);
    }

    const customDelimiter = customDelimiterMatch[1];

    if (customDelimiter.length > 1) {
      throw new Error(ERROR_MESSAGES.CUSTOM_DELIMITER_TOO_LONG);
    }

    this.#customDelimiter = customDelimiter;
    return inputValue.slice(customDelimiterMatch[0].length);
  }

  getDelimiters() {
    if (this.#customDelimiter) {
      return [...DEFAULT_DELIMITERS, this.#customDelimiter];
    }
    return DEFAULT_DELIMITERS;
  }
}

export default DelimiterExtractor;
