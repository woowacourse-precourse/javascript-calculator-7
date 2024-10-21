import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await this.readInput();
      this.printResult(0);
    } catch (error) {
      Console.print(error.message);
    }
  }

  async readInput() {
    Console.print("덧셈할 문자열을 입력해 주세요.");
    return await Console.readLineAsync();
  }

  printResult(result) {
    Console.print(`결과 : ${result}`);
  }
}

export default App;
