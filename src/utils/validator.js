import { CUSTOM_DELIMITER_INPUT } from '../constants/Delimeters.js';
import { ERROR_MESSAGES } from '../constants/Messages.js';

const validator = {
  validateString(string) {
    if (!this.startWithCustomDelimiter(string))
      throw new Error(ERROR_MESSAGES.shouldStartWithDelimiter);
    if (!this.duplicatedCustomDelimiterInput(string))
      throw new Error(ERROR_MESSAGES.duplicatedDelimiterInput);
  },

  validateCustomDelimiter(delimiter) {
    if (!this.delimiterNotIncludingNumber(delimiter))
      throw new Error(ERROR_MESSAGES.numberNotAllowed);
    if (!this.invalidDelimiterLength(delimiter))
      throw new Error(ERROR_MESSAGES.invalidDelimiterLength);
  },

  validateValueToSum(valueArray) {
    if (!this.valueIsIntegerBiggerThenZero(valueArray))
      throw new Error(ERROR_MESSAGES.shouldBePositiveInteger);
  },

  startWithCustomDelimiter(string) {
    const index = string.indexOf(CUSTOM_DELIMITER_INPUT.start);
    return index === 0 || index === -1;
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
    const regex = /[0-9]/g;
    return !regex.test(delimiter);
  },

  valueIsIntegerBiggerThenZero(valueArray) {
    return valueArray.every((value) => value >= 0 && Number.isInteger(value));
  },
};

export default validator;
