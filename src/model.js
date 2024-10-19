import { Console } from "@woowacourse/mission-utils";

class CalculatorModel {
  constructor() {
    this.defaultSeparators = [",", ":"];
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
      separators.push(customSeparator);
      numbersString = input.slice(customSeparatorMatch[0].length);
    }

    // 커스텀 구분자가 .인 경우 처리
    if (separators.includes(".")) {
      const userchoice = await this.getUserChoice();

      if (userchoice === "1") {
        throw new Error(
          "[ERROR] 구분자가 '.'일 경우 소수를 입력할 수 없습니다."
        );
      }
      if (userchoice === "2") {
        return this.calculateInteger(numbersString, separators);
      }

      throw new Error("[ERROR] 잘못된 입력입니다."); // 예외 처리
    }

    // 입력의 끝단이 구분자인지 확인하는 에러 처리
    if (this.endWithSeparators(numbersString, separators)) {
      throw new Error("[ERROR] 입력의 마지막은 숫자여야 합니다.");
    }

    const regex = new RegExp(`[${separators.join("")}]+`);
    const numbers = numbersString.split(regex).map((num) => {
      const trimmedNum = num.trim();

      // 숫자가 아닌 값 포함 체크
      if (!/^(-?\d+(\.\d+)?)$/.test(trimmedNum)) {
        throw new Error(
          "[ERROR] 허용되지 않은 구분자 또는 숫자가 아닌 값이 포함되어 있습니다."
        );
      }

      const parsedNum = parseFloat(trimmedNum);
      if (parsedNum < 0) {
        throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
      }

      return parsedNum;
    });

    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    return sum;
  }

  calculateInteger(numbersString, separators) {
    const regex = new RegExp(`[${separators.join("")}]+`);
    const integerNumbers = numbersString
      .split(regex)
      .map((num) => {
        const trimmedNum = num.trim();
        return parseInt(trimmedNum, 10);
      })
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
