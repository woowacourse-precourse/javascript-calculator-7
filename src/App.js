import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      var inputNumbers;

      const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요\n");

      if (input.length <= 1 && !isNaN(input)) {
        const inputNumbers = Number(input);
        Console.print("결과 : " + inputNumbers);
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
        throw new Error("잘못된 구분자 형식입니다.");
      }

      inputNumbers = inputNumbers.map((num) => {
        const number = Number(num);
        if (isNaN(number)) {
          throw new Error("숫자가 아닌 값이 포함되어 있습니다.");
        }
        return number;
      });

      const sum = inputNumbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      });

      Console.print("결과 : " + sum);
    } catch (error) {
      Console.print("[ERROR] " + error.message);
    }
  }
}

export default App;
