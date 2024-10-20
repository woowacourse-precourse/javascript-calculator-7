import { errorMessages, Regex } from './constant.js';

class Validator {
  valid(input) {
    if (this.notInputCustomDelimiter(input)) {
      throw new Error(`[ERROR]: ${errorMessages.notInputCustomDelimiter}`);
    }

    if (this.invalidCustomDelimiter(input)) {
      throw new Error(`[ERROR]: ${errorMessages.invalidCustomDelimiter}`);
    }

    return Regex.valid.test(input);
  }

  notInputCustomDelimiter(input) {
    return Regex.notInputCustomDelimiter.test(input);
  }

  invalidCustomDelimiter(input) {
    return Regex.invalidCustomDelimiter.test(input);
  }

  // invalidDelimiter(input) {
  //   return Regex.invalidDelimiter.test(input);
  // }
}

export default Validator;
