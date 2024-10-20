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
      throw error; // 여기도 에러를 다시 던져야 Promise가 reject 상태가 됨
    }
  }
  printResult(result) {
    Console.print("결과 : " + result);
  }
}

export default App;
