import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    const numberArray = this.extractNumbers(input);
    const hasInvalidValue = numberArray.includes(NaN);

    if (hasInvalidValue) Console.print("[ERROR]");
    if (!hasInvalidValue) {
      const result = this.calculateSum(numberArray);
      Console.print(result);
    }
  }

  extractNumbers(input) {
    const COMMA = ",";
    const SEMICOLON = ";";
    const CUSTOM_DELIMITER_PREFIX = "//";
    const CUSTOM_DELIMITER_SUFFIX = "\\n";

    const hasComma = this.hasSeparator(input, COMMA);
    const hasSemicolon = this.hasSeparator(input, SEMICOLON);
    const hasCustomDelimiterPrefix = this.hasSeparator(input, CUSTOM_DELIMITER_PREFIX);
    const hasCustomDelimiterSuffix = this.hasSeparator(input, CUSTOM_DELIMITER_SUFFIX);

    const hasCommaAndSemicolon = hasComma && hasSemicolon;
    const hasCustomSeparator = hasCustomDelimiterPrefix && hasCustomDelimiterSuffix;

    if (hasCustomSeparator) {
      const customDelimiterPrefixIndex = input.indexOf(CUSTOM_DELIMITER_PREFIX);
      const customDelimiterSuffixIndex = input.indexOf(CUSTOM_DELIMITER_SUFFIX);
      const customSeparator = input.slice(customDelimiterPrefixIndex + 2, customDelimiterSuffixIndex);
      const stringToSeparate = input.replace(input.slice(customDelimiterPrefixIndex, customDelimiterSuffixIndex + 2), "");
      return this.splitAndConvertToNumbers(stringToSeparate, customSeparator);
    }
    if (hasCommaAndSemicolon)
      return this.splitAndConvertToNumbers(input, [COMMA, SEMICOLON]);
    if (hasComma) return this.splitAndConvertToNumbers(input, COMMA);
    if (hasSemicolon) return this.splitAndConvertToNumbers(input, SEMICOLON);
    return Console.print("[ERROR]");
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
