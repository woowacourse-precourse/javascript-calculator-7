import {Console} from "@woowacourse/mission-utils";

class StringCalculator {
  static calculate(input) {
    const numbers = this.parseInput(input);
    return this.sum(numbers);
  }

  static parseInput(input) {
    // '\\n'을 실제 줄바꿈 문자로 변환
    input = input.replace(/\\n/g, "\n");
    // 커스텀 구분자 패턴 매칭
    const customDelimiterMatch = input.match(/^\/\/(.+)\n([\s\S]*)$/);

    let numberString = input;
    let delimiter = /[,:]/; // 기본 구분자

    if (customDelimiterMatch) {
      // 커스텀 구분자가 있는 경우
      delimiter = new RegExp(customDelimiterMatch[1], "g");
      numberString = customDelimiterMatch[2];
    }
    return numberString
      .split(delimiter)
      .map((num) => this.parseNumber(num.trim()));
  }

  static parseNumber(numStr) {
    if (numStr === "") {
      throw new ValidationError("빈 문자열은 숫자로 변환할 수 없습니다.");
    }
    const num = Number(numStr);
    if (isNaN(num)) {
      throw new ValidationError(`'${numStr}'은(는) 유효한 숫자가 아닙니다.`);
    }
    if (num < 0) {
      throw new ValidationError("음수는 입력할 수 없습니다.");
    }
    return num;
  }

  static sum(numbers) {
    if (numbers.length === 0) {
      throw new ValidationError("숫자가 입력되지 않았습니다.");
    }
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

class App {
  async run() {
    try {
      const input = await this.getUserInput();
      const result = StringCalculator.calculate(input);
      this.printResult(result);
    } catch (error) {
      this.handleError(error);
    }
  }

  async getUserInput() {
    return await Console.readLineAsync("덧셈할 문자열을 입력해 주세요: ");
  }

  printResult(result) {
    Console.print(`결과: ${result}`);
  }

  handleError(error) {
    if (error instanceof ValidationError) {
      Console.print(`[ERROR] ${error.message}`);
    } else {
      Console.print("[ERROR] 예기치 못한 에러가 발생했습니다.");
      console.error(error);
    }
  }
}

export default App;
