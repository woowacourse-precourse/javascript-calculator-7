import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    const INPUT_MESSAGE = "덧셈할 문자열을 입력해 주세요.\n";
    const RESULT = "결과 : ";
    const ERROR = "[ERROR]";

    const input = await Console.readLineAsync(INPUT_MESSAGE);
    const numberArray = this.extractNumbers(input);
    const hasInvalidValue = numberArray.includes(NaN);

    if (hasInvalidValue || this.hasNegativeNumber(numberArray))
      throw new Error(ERROR);
    const result = this.calculateSum(numberArray);
    return Console.print(`${RESULT}${result}`);
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

    if (hasCustomSeparator) {
      const isCustomDelimiterAtStart = input.indexOf(CUSTOM_DELIMITER_PREFIX);
      return isCustomDelimiterAtStart
        ? [NaN]
        : this.splitUsingCustomDelimiterAndConvertToNumbers(
            input,
            CUSTOM_DELIMITER_SUFFIX
          );
    }
    if (hasCommaAndSemicolon)
      return this.splitAndConvertToNumbers(input, [COMMA, SEMICOLON]);
    if (hasComma) return this.splitAndConvertToNumbers(input, COMMA);
    if (hasSemicolon) return this.splitAndConvertToNumbers(input, SEMICOLON);
    return [NaN];
  }

  splitUsingCustomDelimiterAndConvertToNumbers(input, CUSTOM_DELIMITER_SUFFIX) {
    const CUSTOM_DELIMITER_PREFIX_LENGTH = 2;
    const CUSTOM_DELIMITER_SUFFIX_LENGTH = 2;

    const customDelimiterSuffixIndex = input.indexOf(CUSTOM_DELIMITER_SUFFIX);
    const customDelimiter = input.slice(
      CUSTOM_DELIMITER_PREFIX_LENGTH,
      customDelimiterSuffixIndex
    );
    const stringToSeparate = input.slice(
      customDelimiterSuffixIndex + CUSTOM_DELIMITER_SUFFIX_LENGTH
    );
    return this.splitAndConvertToNumbers(stringToSeparate, customDelimiter);
  }

  hasSeparator(input, separator) {
    return input.includes(separator);
  }

  splitAndConvertToNumbers(input, separator) {
    const isTwoSeparators = typeof separator === "object";

    if (isTwoSeparators) {
      const [comma, semicolon] = separator;
      return input.replaceAll(semicolon, comma).split(comma).map(Number);
    }
    if (!isTwoSeparators) return input.split(separator).map(Number);
  }

  calculateSum(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }

  hasNegativeNumber(numberArray) {
    for (let i = 0; i < numberArray.length; i++) {
      if (numberArray[i] < 0) return true;
    }
  }
}

export default App;
