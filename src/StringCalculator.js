import { Console } from "@woowacourse/mission-utils";
import { sumNumericStringList } from "./utils/arrayUtils.js";
import { splitBySeparatorList } from "./utils/stringUtils.js";
import { STRING_CALCULATOR_ERROR_MESSAGES } from "./constants/errorMessages.js";

class StringCalculator {
  static DEFAULT_SEPARATOR_LIST = [",", ":"];

  static CUSTOM_SEPARATOR_PREFIX = "//";

  static CUSTOM_SEPARATOR_SUFFIX = "\\n";

  includeCustomSeparator(value) {
    const { CUSTOM_SEPARATOR_PREFIX, CUSTOM_SEPARATOR_SUFFIX } =
      StringCalculator;

    return (
      value.startsWith(CUSTOM_SEPARATOR_PREFIX) &&
      value.includes(CUSTOM_SEPARATOR_SUFFIX, CUSTOM_SEPARATOR_PREFIX.length)
    );
  }

  extractCustomSeparator(value) {
    const { CUSTOM_SEPARATOR_PREFIX, CUSTOM_SEPARATOR_SUFFIX } =
      StringCalculator;
    const customSeparator = value.slice(
      CUSTOM_SEPARATOR_PREFIX.length,
      value.indexOf(CUSTOM_SEPARATOR_SUFFIX)
    );

    return customSeparator;
  }

  omitCustomSeparator(value) {
    const { CUSTOM_SEPARATOR_SUFFIX } = StringCalculator;
    const customSeparatorEndIndex =
      value.indexOf(CUSTOM_SEPARATOR_SUFFIX) + CUSTOM_SEPARATOR_SUFFIX.length;

    return value.slice(customSeparatorEndIndex);
  }

  printSumResult(value) {
    const { DEFAULT_SEPARATOR_LIST } = StringCalculator;
    const hasCustomSeparator = this.includeCustomSeparator(value);
    const cleanedValue = hasCustomSeparator
      ? this.omitCustomSeparator(value)
      : value;
    const separatorList = hasCustomSeparator
      ? [...DEFAULT_SEPARATOR_LIST, this.extractCustomSeparator(value)]
      : DEFAULT_SEPARATOR_LIST;
    const splitResultList = splitBySeparatorList(cleanedValue, separatorList);

    Console.print(`결과 : ${sumNumericStringList(splitResultList)}`);
  }

  validateInputString(value) {
    if (value === "") {
      throw new Error(STRING_CALCULATOR_ERROR_MESSAGES.emptyInput);
    }

    const { DEFAULT_SEPARATOR_LIST } = StringCalculator;
    const hasCustomSeparator = this.includeCustomSeparator(value);
    const cleanedValue = hasCustomSeparator
      ? this.omitCustomSeparator(value)
      : value;
    const separatorList = hasCustomSeparator
      ? [...DEFAULT_SEPARATOR_LIST, this.extractCustomSeparator(value)]
      : DEFAULT_SEPARATOR_LIST;

    if (hasCustomSeparator) {
      const customSeparator = this.extractCustomSeparator(value);

      if (customSeparator === "") {
        throw new Error(
          STRING_CALCULATOR_ERROR_MESSAGES.invalidCustomSeparator
        );
      }
    }

    const splitResultList = splitBySeparatorList(cleanedValue, separatorList);

    if (splitResultList.length === 0) {
      throw new Error(STRING_CALCULATOR_ERROR_MESSAGES.noNumbers);
    }

    if (splitResultList.some((splitResult) => isNaN(splitResult))) {
      throw new Error(STRING_CALCULATOR_ERROR_MESSAGES.invalidNumber);
    }

    if (splitResultList.some((splitResult) => Number(splitResult) < 0)) {
      throw new Error(STRING_CALCULATOR_ERROR_MESSAGES.negativeNumber);
    }
  }

  async input() {
    const value = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    this.validateInputString(value);

    return value;
  }
}

export default StringCalculator;
