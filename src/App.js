import { Console } from "@woowacourse/mission-utils";

class Calculator {
  add(input) {
    if (input === "") {
      return 0;
    }

    let delimiters = /[,:]|\n/;
    let numbers;

    if (input.startsWith("//")) {
      const customDelimiterSection = input.match(/^\/\/(.+)\\n(.*)/);

      if (customDelimiterSection) {
        const customDelimiter = customDelimiterSection[1];
        const escapedDelimiter = customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        delimiters = new RegExp(escapedDelimiter);
        input = customDelimiterSection[2];
      }
    }

    numbers = input.split(delimiters);

    const negatives = numbers.filter(n => parseInt(n, 10) < 0);
    if (negatives.length > 0) {
      throw new Error(`[ERROR] 음수는 허용되지 않습니다: ${negatives.join(', ')}`);
    }

    const sum = numbers.reduce((total, current) => {
      const number = parseInt(current, 10);
      if (isNaN(number)) {
        throw new Error("[ERROR] 잘못된 입력값이 포함되어 있습니다.");
      }
      return total + number;
    }, 0);
    return sum;
  }
}

class App {
  constructor() {
    this.calculator = new Calculator();
  }

  async run() {
    try {
      const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
      const result = this.calculator.add(input);
      Console.print(`결과 : ${result}`);

    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
