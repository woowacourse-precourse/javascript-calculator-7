import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    Console.print("문자열을 입력해 주세요");
    const input = await Console.readLineAsync("");

    let numbers;
    let sum = 0;

    numbers = input.split(/,|:|\/\/.\\n/);
    Console.print(numbers);

    numbers.map((n) => {
      sum += Number(n);
    });

    Console.print(sum);
  }
}

export default App;
