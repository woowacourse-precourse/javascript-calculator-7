import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요\n");
      const inputNumbers = this.splitInput(input);
      const sum = this.sumNumbers(inputNumbers);
      this.printResult(sum);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  splitInput(input) {
    let inputNumbers;

    if (input.length <= 1 && !isNaN(input)) {
      return [Number(input)];
    }

    const customSeparator = input.match(/\/\/(.)\\n/);

    if (customSeparator) {
      inputNumbers = input.split(customSeparator[1]);
      inputNumbers.splice(0, 1);
      inputNumbers[0] = inputNumbers[0].substring(2);
    } else if (input.match(/[,|:]/)) {
      inputNumbers = input.split(/[,|:]/);
    } else {
      throw new Error("[ERROR]");
    }

    return inputNumbers.map((value) => {
      const number = Number(value);
      if (isNaN(number) || number < 0) {
        throw new Error("[ERROR]");
      }
      return number;
    });
  }

  sumNumbers(inputNumbers) {
    return inputNumbers.reduce((sum, currentNumber) => sum + currentNumber, 0);
  }

  printResult(result) {
    Console.print("결과 : " + result);
  }
}

export default App;
