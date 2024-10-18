import { CUSTOM_DELIMITER_INPUT } from "../constants/Delimeters";
import { ERROR_MESSAGES } from "../constants/Messages";

const validator = {
  validateString(string) {
    if (!this.startWithCustomDelimiter(string)) return ERROR_MESSAGES.shouldStartWithDelimiter;
    if (!this.duplicatedCustomDelimiterInput(string))
      return ERROR_MESSAGES.duplicatedDelimiterInput;
    return "";
  },

  validateCustomDelimiter(delimiter) {
    if (!this.delimiterNotIncludingNumber(delimiter)) return ERROR_MESSAGES.numberNotAllowed;
    if (!this.invalidDelimiterLength(delimiter)) return ERROR_MESSAGES.invalidDelimiterLength;
    return "";
  },

  validateValueToSum(valueArray) {
    if (!this.valueIsIntegerBiggerThenZero(valueArray))
      return ERROR_MESSAGES.shouldBePositiveInteger;
    return "";
  },

  startWithCustomDelimiter(string) {
    return string.indexOf(CUSTOM_DELIMITER_INPUT.start) === 0;
  },

  duplicatedCustomDelimiterInput(string) {
    const customStart =
      string.indexOf(CUSTOM_DELIMITER_INPUT.start) ===
      string.lastIndexOf(CUSTOM_DELIMITER_INPUT.start);
    const customEnd =
      string.indexOf(CUSTOM_DELIMITER_INPUT.end) === string.lastIndexOf(CUSTOM_DELIMITER_INPUT.end);
    return customStart && customEnd;
  },

  invalidDelimiterLength(delimiter) {
    return delimiter.length === 1;
  },

  delimiterNotIncludingNumber(delimiter) {
    return !Number.isInteger(delimiter);
  },

  valueIsIntegerBiggerThenZero(valueArray) {
    return valueArray.every((value) => value >= 0 && Number.isInteger(value));
  },
};

export default validator;
