class StringCalculator {
  static CUSTOM_DELIMITER_PATTERN = /^\/\/(.)\\n/;

  parseAndAdd(input) {
    this.checkEmptyInput(input);

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
      throw new Error(
        "[ERROR] 입력값에 허용되지 않는 문자가 포함되어 있습니다."
      );
    }
  }

  checkNegativeNumbers(numbers) {
    for (const num of numbers) {
      if (num < 0) {
        throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
      }
    }
  }

  checkEmptyInput(input) {
    if (!input || input.trim() === "") {
      throw new Error("[ERROR] 입력값이 빈 문자열입니다.");
    }
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
    if (customDelimiter) {
      return numberSection.split(customDelimiter).map(Number);
    }
    return numberSection.split(/,|:/).map(Number);
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
