import { Console } from "@woowacourse/mission-utils";

class Calculator {
  constructor() {}

  add(input) {
    if (input === "") {
      return 0;
    }

    let delimiter = /[,:]/;
    let numbersString = input;

    if (input.startsWith("//")) {
      const parts = input.split("\n");
      if (parts.length < 2) {
        throw new Error("[ERROR]");
      }
      const customDelimiter = parts[0].substring(2);
      delimiter = new RegExp(`[${customDelimiter}]`);
      numbersString = parts[1];
    }

    const numbers = numbersString.split(delimiter);
    const sum = numbers.reduce((total, current) => {
      const num = parseInt(current, 10);
      if (isNaN(num) || num < 0) {
        throw new Error("[ERROR]");
      }
      return total + num;
    }, 0);

    return sum;
  }

  async askForInput() {
    while (true) {
      try {
        const userInput = await Console.readLineAsync(
          "덧셈할 문자열을 입력해 주세요."
        );

        if (userInput.toLowerCase() === "종료") {
          Console.print("프로그램을 종료합니다.");
          return;
        }

        Console.print(`결과 : ${this.add(userInput)}`);
      } catch (error) {
        Console.print("[ERROR]");
        throw error;
      }
    }
  }
}

async function run() {
  const calculator = new Calculator();
  await calculator.askForInput();
}

export { run };
