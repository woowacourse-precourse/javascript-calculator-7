import { REGEX_CONSTANTS } from "../constants.js";

class Validator {
  static is_custom_string(user_string) {
    return REGEX_CONSTANTS.CUSTOM_REGEX.test(user_string);
  }

  static is_regular_string(user_string) {
    return REGEX_CONSTANTS.REGULAR_REGEX.test(user_string);
  }
}

export default Validator;
