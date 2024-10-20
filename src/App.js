import { Console } from "@woowacourse/mission-utils";

class Calculator {
  add(input) {
    if (input === "") {
      return 0;
    }

    let delimiters = /[,:]|\n/;
    let numbers;
    console.log("Initial input:", input);

    if (input.startsWith("//")) {
      const customDelimiterSection = input.match(/^\/\/(.+)\\n(.*)/);
      console.log("Custom delimiter section:", customDelimiterSection);

      if (customDelimiterSection) {
        const customDelimiter = customDelimiterSection[1];
        const escapedDelimiter = customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        delimiters = new RegExp(escapedDelimiter);
        input = customDelimiterSection[2];
        console.log("Custom delimiter:", customDelimiter);
        console.log("Escaped delimiter:", escapedDelimiter);
        console.log("Updated input:", input);
      }
    }

    numbers = input.split(delimiters);
    console.log("Numbers:", numbers);

    const sum = numbers.reduce((total, current) => {
      const number = parseInt(current, 10);
      if (isNaN(number)) {
        throw new Error("[ERROR] 잘못된 입력값이 포함되어 있습니다.");
      }
      console.log("Current number:", number);
      return total + number;
    }, 0);
    console.log("Sum:", sum);
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
    }
  }
}

export default App;
