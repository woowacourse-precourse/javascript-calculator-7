import {Console} from "@woowacourse/mission-utils";

class App {
  parseInput(input) {
    // '\\n'을 실제 줄바꿈 문자로 변환
    input = input.replace(/\\n/g, "\n");

    let numberString = input;
    let delimiter = /[,;]/; // 기본 구분자

    // 커스텀 구분자 패턴 매칭
    const customDelimiterMatch = input.match(/^\/\/(.+)\n([\s\S]*)$/);

    if (customDelimiterMatch) {
      // 커스텀 구분자가 있는 경우
      const [, customDelimiter, numbers] = customDelimiterMatch;
      delimiter = new RegExp(customDelimiter, "g");
      numberString = numbers;
    }

    return this.processNumbers(numberString, delimiter);
  }

  processNumbers(numberString, delimiter) {
    const numbers = numberString
      .split(delimiter)
      .filter((num) => num.trim() !== "") // 빈 문자열 제거
      .map((num) => {
        const parsedNum = parseInt(num.trim(), 10);
        if (isNaN(parsedNum)) {
          throw new Error(`'${num.trim()}'은(는) 유효한 숫자가 아닙니다.`);
        }
        if (parsedNum < 0) {
          throw new Error("음수는 입력할 수 없습니다.");
        }
        return parsedNum;
      });

    if (numbers.length === 0) {
      throw new Error("숫자가 입력되지 않았습니다.");
    }

    return numbers;
  }

  async run() {
    try {
      const input = await this.getUserInput();
      const numbers = this.parseInput(input);
      const sum = numbers.reduce((acc, curr) => acc + curr, 0);
      Console.print(`결과: ${sum}`);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }

  async getUserInput() {
    return await Console.readLineAsync("덧셈할 문자열을 입력해 주세요: ");
  }
}

export default App;
