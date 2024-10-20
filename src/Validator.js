import { errorMessages, Regex } from './constant.js';

class Validator {
  valid(input) {
    if (this.notInputCustomDelimiter(input)) {
      throw Error(errorMessages.notInputCustomDelimiter);
    }

    if (this.invalidCustomDelimiter(input)) {
      throw Error(errorMessages.invalidCustomDelimiter);
    }

    return Regex.valid.test(input);
  }

  notInputCustomDelimiter(input) {
    return Regex.notInputCustomDelimiter.test(input);
  }

  invalidCustomDelimiter(input) {
    return Regex.invalidCustomDelimiter.test(input);
  }
}

export default Validator;
