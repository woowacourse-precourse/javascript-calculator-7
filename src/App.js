import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      Console.print("문자열을 입력해 주세요");
      const input = await Console.readLineAsync("");

      let numbers;
      let sum = 0;

      numbers = input.split(/,|:|\/\/.\\n/);
      Console.print(numbers);

      numbers.map((n) => {
        if (Number(n) < 0) {
          throw new Error("[ERROR]");
        }
        sum += Number(n);
      });

      if (isNaN(sum)) {
        throw new Error("[ERROR]");
      } else {
        Console.print("결과 : " + sum);
      }
    } catch (e) {
      Console.print("[ERROR]");
      throw e;
    }
  }
}

export default App;
