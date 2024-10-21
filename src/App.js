import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await this.readInput();
      const result = this.calculate(input);
      this.printResult(result);
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

    const normalizedInput = input.replaceAll(":", ",");
    const numbers = normalizedInput.split(",").map((num) => {
      const parsed = parseInt(num, 10);
      if (isNaN(parsed)) {
        throw new Error("[ERROR] 유효하지 않은 입력값입니다.");
      }
      if (parsed < 0) {
        throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
      }
      return parsed;
    });
    return numbers.reduce((sum, num) => sum + num, 0);
  }

  printResult(result) {
    Console.print(`결과 : ${result}`);
  }
}

export default App;
