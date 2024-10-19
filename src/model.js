import { Console } from "@woowacourse/mission-utils";

class CalculatorModel {
  constructor() {
    this.defaultSeparators = [",", ":"];
    this.errorMessages = {
      INVALID_SPACE: "[ERROR] 공백은 구분자로 쓸 수 없습니다.",
      DECIMAL_NOT_ALLOWED:
        "[ERROR] 구분자가 '.'일 경우 소수를 입력할 수 없습니다.",
      INVALID_INPUT: "[ERROR] 잘못된 입력입니다.",
      INVALID_END: "[ERROR] 입력의 마지막은 숫자여야 합니다.",
      INVALID_NUMBER:
        "[ERROR] 허용되지 않은 구분자 또는 숫자가 아닌 값이 포함되어 있습니다.",
      NEGATIVE_NOT_ALLOWED: "[ERROR] 음수는 입력할 수 없습니다.",
      NUMBER_AS_SEPARATOR: "[ERROR] 숫자는 구분자로 쓸 수 없습니다.",
    };
    this.regexNumber = /^(-?\d+(\.\d+)?)$/; // 숫자 정규 표현식
  }

  async calculate(input) {
    return await this.parseInput(input);
  }

  async parseInput(input) {
    let separators = [...this.defaultSeparators];
    let numbersString = input;

    // 커스텀 구분자 확인
    const customSeparatorMatch = input.match(/^\/\/(.*?)\\n/);
    if (customSeparatorMatch) {
      const customSeparator = customSeparatorMatch[1].trim();

      this.validateCustomSeparator(customSeparator); // 커스텀 구분자 유효성 검사

      separators.push(customSeparator);
      numbersString = input.slice(customSeparatorMatch[0].length);
    }

    // 공백 구분자 체크
    this.validateNoSpaceSeparator(numbersString);

    // 커스텀 구분자가 .인 경우 처리
    if (separators.includes(".")) {
      const userChoice = await this.getUserChoice();

      if (userChoice === "1") {
        throw new Error(this.errorMessages.DECIMAL_NOT_ALLOWED);
      }
      if (userChoice === "2") {
        return this.calculateInteger(numbersString, separators);
      }

      throw new Error(this.errorMessages.INVALID_INPUT);
    }

    // 입력의 끝단이 구분자인지 확인하는 에러 처리
    this.validateInputEndsWithNumber(numbersString, separators);

    const regex = new RegExp(`[${separators.join("")}]+`);
    const numbers = numbersString
      .split(regex)
      .map(this.processNumber.bind(this));

    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    return sum;
  }

  processNumber(num) {
    const trimmedNum = num.trim();
    this.validateIsNumber(trimmedNum); // 숫자 유효성 검사

    const parsedNum = parseFloat(trimmedNum);
    this.validateNoNegativeNumber(parsedNum); // 음수 유효성 검사

    return parsedNum;
  }

  async calculateInteger(numbersString, separators) {
    const regex = new RegExp(`[${separators.join("")}]+`);
    const integerNumbers = numbersString
      .split(regex)
      .map((num) => parseInt(num.trim(), 10))
      .filter((num) => !isNaN(num));

    const sum = integerNumbers.reduce((acc, cur) => acc + cur, 0);
    return sum;
  }

  async getUserChoice() {
    return Console.readLineAsync(
      "소수 입력이면 1, 정수 입력이면 2를 입력하세요:\n"
    );
  }

  // 입력의 끝단이 구분자인지 확인하는 함수
  endWithSeparators(input, separators) {
    const lastChar = input.trim().slice(-1);
    return separators.some((sep) => sep === lastChar);
  }

  // 유효성 검사 메서드들

  validateCustomSeparator(separator) {
    if (!isNaN(separator)) {
      throw new Error(this.errorMessages.NUMBER_AS_SEPARATOR);
    }
  }

  validateNoSpaceSeparator(numbersString) {
    if (numbersString.includes(" ")) {
      throw new Error(this.errorMessages.INVALID_SPACE);
    }
  }

  validateInputEndsWithNumber(numbersString, separators) {
    if (this.endWithSeparators(numbersString, separators)) {
      throw new Error(this.errorMessages.INVALID_END);
    }
  }

  validateIsNumber(trimmedNum) {
    if (!this.regexNumber.test(trimmedNum)) {
      throw new Error(this.errorMessages.INVALID_NUMBER);
    }
  }

  validateNoNegativeNumber(parsedNum) {
    if (parsedNum < 0) {
      throw new Error(this.errorMessages.NEGATIVE_NOT_ALLOWED);
    }
  }
}

export default CalculatorModel;
