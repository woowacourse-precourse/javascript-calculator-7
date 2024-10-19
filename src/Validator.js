import { Operand } from "./Operand.js";
import { ERROR_MESSAGE } from "./constants/constants.js";
import { CUSTOM_DELIMITER_STATEMENT } from "./constants/constants.js";
import { DELIMITER } from "./constants/constants.js";

export class Validator {
  static customDelimiterLength(customDelimiter) {
    if (customDelimiter.length !== 1) {
      throw new Error(
        ERROR_MESSAGE.TAG + ERROR_MESSAGE.CUSTOM_DELIMITER_LENGTH
      );
    }
  }

  static isCustomDelimiterString(customDelimiter) {
    if (/\d/.test(customDelimiter)) {
      throw new Error(ERROR_MESSAGE.TAG + ERROR_MESSAGE.CUSTOM_DELIMITER_TYPE);
    }
  }

  static duplicatedSet(string) {
    const CUSTOM_END_INDEX = string.indexOf(CUSTOM_DELIMITER_STATEMENT.END);

    if (Operand.isSetCustomDelimiter(string, CUSTOM_END_INDEX)) {
      throw new Error(ERROR_MESSAGE.TAG + ERROR_MESSAGE.DUPLICATED_SET);
    }
  }

  static containUndelimitedChars(string, customDelimiter) {
    if (customDelimiter !== undefined) {
      DELIMITER.push(customDelimiter);
    }

    if (
      [...string].some(
        (element) => !DELIMITER.includes(element) && isNaN(element)
      )
    ) {
      throw new Error(ERROR_MESSAGE.TAG + ERROR_MESSAGE.UNDELIMIT_CHAR);
    }
  }
}
