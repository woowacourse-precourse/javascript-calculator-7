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
    Console.print("문자열을 입력해 주세요.");
    return await Console.readLineAsync();
  }

  calculate(input) {
    if (input === "") return 0;

    const number = parseInt(input, 10);
    if (isNaN(number)) {
      throw new Error("[ERROR] 유효하지 않은 입력값입니다.");
    }
    if (number < 0) {
      throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
    }
    return number;
  }

  printResult(result) {
    Console.print(`결과 : ${result}`);
  }
}

export default App;
