import { errorMessages, Regex } from './constant.js';

class Validator {
  valid(input) {
    if (this.notInputCustomDelimiter(input)) {
      throw new Error(`[ERROR]: ${errorMessages.notInputCustomDelimiter}`);
    }
    return Regex.valid.test(input);
  }

  notInputCustomDelimiter(input) {
    return Regex.notInputCustomDelimiter.test(input);
  }
}

export default Validator;
