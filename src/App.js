import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const getInput = async () => {
      Console.print("문자열을 입력해 주세요");
      return await Console.readLineAsync("");
    };

    const getNumbers = (input) => {
      return input.split(/,|:|\/\/.\\n/);
    };

    const getSum = (numbers) => {
      let sum = 0;
      numbers.map((n) => {
        const number = Number(n);
        if (isNaN(number) || number < 0) {
          throw new Error("[ERROR] 유효하지 않은 숫자가 입력되었습니다: " + n);
        }
        sum += number;
      });
      return sum;
    };

    try {
      const input = await getInput();
      let numbers = getNumbers(input);
      let sum = getSum(numbers);

      Console.print("결과 : " + sum);
    } catch (e) {
      throw new Error("[ERROR]" + e.message);
    }
  }
}

export default App;
