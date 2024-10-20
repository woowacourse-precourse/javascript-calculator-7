import { ERROR_MESSAGES } from '../constants.js';

class ISplitter {
  split(inputValue, delimiters) {
    throw new Error(ERROR_MESSAGES.MUST_OVERRIDE_METHOD('split'));
  }
}

export default ISplitter;
