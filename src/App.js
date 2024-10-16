import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    Console.print("문자열을 입력해 주세요");
    const input = await Console.readLineAsync("");

    let numbers;

    numbers = input.split(/,|:/);
    Console.print(arr);
  }
}

export default App;
