import { Regex } from './constant.js';

class Validator {
  valid(input) {
    return Regex.valid.test(input);
  }
}

export default Validator;
