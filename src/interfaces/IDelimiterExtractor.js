import { ERROR_MESSAGES } from '../constants.js';

class IDelimiterExtractor {
  extractDelimiter(inputValue) {
    throw new Error(ERROR_MESSAGES.MUST_OVERRIDE_METHOD('extractDelimiter'));
  }

  getDelimiters() {
    throw new Error(ERROR_MESSAGES.MUST_OVERRIDE_METHOD('getDelimiters'));
  }
}

export default IDelimiterExtractor;
