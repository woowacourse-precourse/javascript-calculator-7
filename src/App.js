import { Console } from "@woowacourse/mission-utils";
import {
  RUN_MESSAGES,
  EXTRA_NUMBERS_MESSAGE,
  CUSTOM_DELIMITER,
} from "./message";
class App {
  async run() {
    const input = await Console.readLineAsync(RUN_MESSAGES.INPUT);
    const numberArray = this.extractNumbers(input);
    const hasInvalidValue = numberArray.includes(NaN);

    if (hasInvalidValue || this.hasNegativeNumber(numberArray))
      throw new Error(RUN_MESSAGES.ERROR);
    const invalidCharacterRegexResult = this.calculateSum(numberArray);
    return Console.print(
      `${RUN_MESSAGES.RESULT}${invalidCharacterRegexResult}`
    );
  }

  extractNumbers(input) {
    const hasComma = this.hasSeparator(input, EXTRA_NUMBERS_MESSAGE.COMMA);
    const hasSemicolon = this.hasSeparator(
      input,
      EXTRA_NUMBERS_MESSAGE.SEMICOLON
    );
    const hasCustomDelimiterPrefix = this.hasSeparator(
      input,
      EXTRA_NUMBERS_MESSAGE.CUSTOM_DELIMITER_PREFIX
    );
    const hasCustomDelimiterSuffix = this.hasSeparator(
      input,
      EXTRA_NUMBERS_MESSAGE.CUSTOM_DELIMITER_SUFFIX
    );

    const hasCommaAndSemicolon = hasComma && hasSemicolon;
    const hasCustomSeparator =
      hasCustomDelimiterPrefix && hasCustomDelimiterSuffix;

    if (hasCustomSeparator) {
      const isCustomDelimiterAtStart = input.indexOf(
        EXTRA_NUMBERS_MESSAGE.CUSTOM_DELIMITER_PREFIX
      );
      return isCustomDelimiterAtStart
        ? [NaN]
        : this.splitUsingCustomDelimiterAndConvertToNumbers(
            input,
            EXTRA_NUMBERS_MESSAGE.CUSTOM_DELIMITER_SUFFIX
          );
    }
    if (hasCommaAndSemicolon)
      return this.separatingStrings(input, [
        EXTRA_NUMBERS_MESSAGE.COMMA,
        EXTRA_NUMBERS_MESSAGE.SEMICOLON,
      ]);
    if (hasComma)
      return this.separatingStrings(input, EXTRA_NUMBERS_MESSAGE.COMMA);
    if (hasSemicolon)
      return this.separatingStrings(input, EXTRA_NUMBERS_MESSAGE.SEMICOLON);
    return [NaN];
  }

  splitUsingCustomDelimiterAndConvertToNumbers(input, customDelimiterSuffix) {
    const customDelimiterSuffixIndex = input.indexOf(customDelimiterSuffix);
    const customDelimiter = input.slice(
      CUSTOM_DELIMITER.PREFIX_LENGTH,
      customDelimiterSuffixIndex
    );
    const stringToSeparate = input.slice(
      customDelimiterSuffixIndex + CUSTOM_DELIMITER.SUFFIX_LENGTH
    );
    return this.separatingStrings(stringToSeparate, customDelimiter);
  }

  hasSeparator(input, separator) {
    return input.includes(separator);
  }

  separatingStrings(input, separator) {
    const isTwoSeparators = typeof separator === "object";

    if (isTwoSeparators) {
      const [comma, semicolon] = separator;
      const separatedString = input.replaceAll(semicolon, comma).split(comma);
      return this.convertToNumbers(separatedString);
    }
    if (!isTwoSeparators) {
      const separatedString = input.split(separator);
      return this.convertToNumbers(separatedString);
    }
  }

  convertToNumbers(separatedString) {
    return separatedString.map(Number);
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
