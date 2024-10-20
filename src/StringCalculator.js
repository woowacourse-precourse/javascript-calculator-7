class StringCalculator {
  static CUSTOM_DELIMITER_PATTERN = /^\/\/(.)\\n/;
  static ERROR_INVALID_CHARACTERS =
    "[ERROR] 입력값에 허용되지 않는 문자가 포함되어 있습니다.";
  static ERROR_NEGATIVE_NUMBER = "[ERROR] 음수는 입력할 수 없습니다.";
  static ERROR_WRONG_DELIMITER = "[ERROR] 구분자가 잘못 사용되었습니다.";

  parseAndAdd(input) {
    if (this.isEmptyInput(input)) {
      return 0;
    }

    const customDelimiter = this.extractCustomDelimiter(input);
    const numberSection = this.getNumberSection(input, customDelimiter);
    this.checkInvalidCharacters(numberSection, customDelimiter);

    const numbers = this.splitNumbers(numberSection, customDelimiter);
    this.checkNegativeNumbers(numbers);

    return this.calculateSum(numbers);
  }

  checkInvalidCharacters(numbersSection, customDelimiter) {
    let validPattern = /^(-?\d+|,|:)+$/;
    if (customDelimiter) {
      const escapedDelimiter = customDelimiter.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
      );
      validPattern = new RegExp(`^(-?\\d+|${escapedDelimiter})+$`);
    }
    if (!validPattern.test(numbersSection)) {
      throw new Error(StringCalculator.ERROR_INVALID_CHARACTERS);
    }
  }

  checkNegativeNumbers(numbers) {
    for (const num of numbers) {
      if (num < 0) {
        throw new Error(StringCalculator.ERROR_NEGATIVE_NUMBER);
      }
    }
  }

  isEmptyInput(input) {
    return !input || input.trim() === "";
  }

  checkDelimiterUsage(numberTokens) {
    numberTokens.forEach((token) => {
      if (token.trim() === "") {
        throw new Error(StringCalculator.ERROR_WRONG_DELIMITER);
      }
    });
  }

  extractCustomDelimiter(input) {
    const match = input.match(StringCalculator.CUSTOM_DELIMITER_PATTERN);

    if (match) {
      return match[1];
    }
    return null;
  }

  getNumberSection(input, customDelimiter) {
    if (customDelimiter) {
      return input.split("\\n")[1];
    }
    return input;
  }

  splitNumbers(numberSection, customDelimiter) {
    const numberTokens = customDelimiter
      ? numberSection.split(customDelimiter)
      : numberSection.split(/,|:/);

    this.checkDelimiterUsage(numberTokens);

    return numberTokens.map(Number);
  }

  calculateSum(numbers) {
    let sum = 0;
    numbers.forEach((num) => {
      sum += num;
    });
    return sum;
  }
}

export default StringCalculator;
