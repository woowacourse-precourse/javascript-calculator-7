import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    const INPUT_MESSAGE = "덧셈할 문자열을 입력해 주세요.\n";
    const RESULT = "결과 : ";
    const ERROR = "[ERROR]";

    const input = await Console.readLineAsync(INPUT_MESSAGE);
    const numberArray = this.extractNumbers(input);
    const hasInvalidValue = numberArray.includes(NaN);
    const hasNegativeNumber = numberArray.filter((el) => el < 0).length;

    if (hasInvalidValue || hasNegativeNumber) throw new Error(ERROR);
    if (!hasInvalidValue && !hasNegativeNumber) {
      const result = this.calculateSum(numberArray);
      Console.print(`${RESULT}${result}`);
    }
  }

  extractNumbers(input) {
    const COMMA = ",";
    const SEMICOLON = ";";
    const CUSTOM_DELIMITER_PREFIX = "//";
    const CUSTOM_DELIMITER_SUFFIX = "\\n";

    const hasComma = this.hasSeparator(input, COMMA);
    const hasSemicolon = this.hasSeparator(input, SEMICOLON);
    const hasCustomDelimiterPrefix = this.hasSeparator(
      input,
      CUSTOM_DELIMITER_PREFIX
    );
    const hasCustomDelimiterSuffix = this.hasSeparator(
      input,
      CUSTOM_DELIMITER_SUFFIX
    );

    const hasCommaAndSemicolon = hasComma && hasSemicolon;
    const hasCustomSeparator =
      hasCustomDelimiterPrefix && hasCustomDelimiterSuffix;

    if (hasCustomSeparator)
      return this.splitUsingCustomDelimiterAndConvertToNumbers(
        input,
        CUSTOM_DELIMITER_PREFIX,
        CUSTOM_DELIMITER_SUFFIX
      );
    if (hasCommaAndSemicolon)
      return this.splitAndConvertToNumbers(input, [COMMA, SEMICOLON]);
    if (hasComma) return this.splitAndConvertToNumbers(input, COMMA);
    if (hasSemicolon) return this.splitAndConvertToNumbers(input, SEMICOLON);
    return [NaN];
  }

  splitUsingCustomDelimiterAndConvertToNumbers(
    input,
    customDelimiterPrefix,
    customDelimiterSuffix
  ) {
    const customDelimiterPrefixIndex = input.indexOf(customDelimiterPrefix);
    const customDelimiterSuffixIndex = input.indexOf(customDelimiterSuffix);
    const customDelimiter = input.slice(
      customDelimiterPrefixIndex + 2,
      customDelimiterSuffixIndex
    );
    const stringToSeparate = input.replace(
      input.slice(customDelimiterPrefixIndex, customDelimiterSuffixIndex + 2),
      ""
    );
    return this.splitAndConvertToNumbers(stringToSeparate, customDelimiter);
  }

  hasSeparator(input, separator) {
    return input.includes(separator);
  }

  splitAndConvertToNumbers(input, separator) {
    if (typeof separator === "object") {
      const [comma, semicolon] = separator;
      return input
        .split(comma)
        .flatMap((el) => el.split(semicolon))
        .map(Number);
    } else return input.split(separator).map(Number);
  }

  calculateSum(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }
}

export default App;
