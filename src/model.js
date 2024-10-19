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
      SPACE_BETWEEN_NUMBERS:
        "[ERROR] 붙어있어야 할 문자들 사이에 공백이 있습니다.",
      SPACE_IN_CUSTOM_SEPARATOR:
        "[ERROR] 커스텀 구분자와 줄바꿈 사이에 공백이 있습니다.",
      CONSECUTIVE_DEFAULT_SEPARATORS:
        "[ERROR] 기본 구분자는 연속으로 사용할 수 없습니다.",
    };
  }

  async calculate(input) {
    return await this.parseInput(input);
  }

  async parseInput(input) {
    // 빈 문자열일 경우 0 반환
    if (input.trim() === "") {
      return 0;
    }

    let separators = [...this.defaultSeparators];
    let numbersString = input;

    // 구분자 추출 로직을 별도의 메서드로 분리
    const { extractedSeparators, newNumbersString } =
      this.extractCustomSeparator(input);
    if (extractedSeparators) {
      separators = separators.concat(extractedSeparators);
      numbersString = newNumbersString;
    }

    // 커스텀 구분자 확인 및 공백 체크
    if (this.checkForSpacesInCustomSeparator(input)) {
      throw new Error(this.errorMessages.SPACE_IN_CUSTOM_SEPARATOR);
    }

    // 공백이 구분자로 사용될 경우 처리
    if (numbersString.includes(" ")) {
      // 숫자 사이의 공백인지 확인
      if (/\d\s+\d/.test(numbersString)) {
        throw new Error(this.errorMessages.SPACE_BETWEEN_NUMBERS);
      }
      throw new Error(this.errorMessages.INVALID_SPACE);
    }

    // 기본 구분자의 연속 사용 체크
    const consecutiveSeparatorRegex = new RegExp(
      `[${this.defaultSeparators.join("")}]{2,}`
    );
    if (consecutiveSeparatorRegex.test(numbersString)) {
      throw new Error(this.errorMessages.CONSECUTIVE_DEFAULT_SEPARATORS);
    }

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
    if (this.endWithSeparators(numbersString, separators)) {
      throw new Error(this.errorMessages.INVALID_END);
    }

    // 마지막 값이 숫자인지 확인
    const lastValue = numbersString
      .trim()
      .split(new RegExp(`[${separators.join("")}]+`))
      .pop();
    if (!/^(-?\d+(\.\d+)?)$/.test(lastValue)) {
      throw new Error(this.errorMessages.INVALID_END);
    }

    const regex = new RegExp(`[${separators.join("")}]+`);
    const numbers = numbersString
      .split(regex)
      .map(this.processNumber.bind(this));

    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    return sum;
  }

  // 구분자 추출 로직을 별도의 메서드로 분리
  extractCustomSeparator(input) {
    const customSeparatorMatch = input.match(/^\/\/(.*?)\\n/);
    if (customSeparatorMatch) {
      const customSeparator = customSeparatorMatch[1].trim();

      // 커스텀 구분자가 숫자인지 체크
      if (!isNaN(customSeparator)) {
        throw new Error(this.errorMessages.NUMBER_AS_SEPARATOR);
      }

      const newNumbersString = input.slice(customSeparatorMatch[0].length);
      return { extractedSeparators: [customSeparator], newNumbersString };
    }

    return { extractedSeparators: null, newNumbersString: input };
  }

  // 커스텀 구분자와 줄바꿈 사이에 공백이 있는지 체크하는 메서드
  checkForSpacesInCustomSeparator(input) {
    const customSeparatorMatch = input.match(/^\/\/(.*?)\\n/);
    if (customSeparatorMatch) {
      // 커스텀 구분자와 줄바꿈 사이에 공백이 있는지 검사
      return /\s/.test(customSeparatorMatch[0]);
    }
    return false;
  }

  processNumber(num) {
    const trimmedNum = num.trim();

    // 숫자가 아닌 값 포함 체크
    if (!/^(-?\d+(\.\d+)?)$/.test(trimmedNum)) {
      throw new Error(this.errorMessages.INVALID_NUMBER);
    }

    const parsedNum = parseFloat(trimmedNum);
    if (parsedNum < 0) {
      throw new Error(this.errorMessages.NEGATIVE_NOT_ALLOWED);
    }

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
}

export default CalculatorModel;
