import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      let inputNumbers;

      const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요\n");

      if (input.length <= 1 && !isNaN(input)) {
        this.printResult(Number(input));
        return;
      }

      const customSeparator = input.match(/\/\/(.)\n/);

      if (customSeparator) {
        inputNumbers = input.split('\n')[1].split(customSeparator[1]); // 구분자 기준으로 분리
      } else if (input.match(/[,|:]/)) {
        inputNumbers = input.split(/[,|:]/);
      } else {
        throw new Error("[ERROR]");
      }

      inputNumbers = inputNumbers.map((num) => {
        const number = Number(num);
        if (isNaN(number)) {
          throw new Error("[ERROR]");
        }
        if (number < 0) {
          throw new Error("[ERROR]");
        }
        return number;
      });

      const sum = inputNumbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      });

      this.printResult(sum);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  printResult(result) {
    Console.print("결과 : " + result);
  }
}

export default App;
