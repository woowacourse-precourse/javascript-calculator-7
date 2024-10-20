import { Console } from "@woowacourse/mission-utils";
import { sumNumericStringList } from "./utils/arrayUtils.js";
import { splitBySeparatorList } from "./utils/stringUtils.js";

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

  async input() {
    const value = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    return value;
  }
}

export default StringCalculator;
