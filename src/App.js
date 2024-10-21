import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const userInput = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요\n");
      const parsedNumbers = this.splitInput(userInput);
      const totalSum = this.sumNumbers(parsedNumbers);
      this.printResult(totalSum);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  splitInput(userInput) {
    let parsedNumbers;

    if (userInput.length <= 1 && !isNaN(userInput)) {
      return [Number(userInput)];
    }

    const customSeparator = userInput.match(/\/\/(.)\\n/);

    if (customSeparator) {
      parsedNumbers = userInput.split(customSeparator[1]);
      parsedNumbers.splice(0, 1);
      parsedNumbers[0] = parsedNumbers[0].substring(2);
    } else if (userInput.match(/[,|:]/)) {
      parsedNumbers = userInput.split(/[,|:]/);
    } else {
      throw new Error("[ERROR]");
    }

    return parsedNumbers.map((value) => {
      const parsedNumber = Number(value);
      if (isNaN(parsedNumber) || parsedNumber < 0) {
        throw new Error("[ERROR]");
      }
      return parsedNumber;
    });
  }

  sumNumbers(parsedNumbers) {
    return parsedNumbers.reduce((totalSum, number) => totalSum + number, 0);
  }

  printResult(result) {
    Console.print("결과 : " + result);
  }
}

export default App;
