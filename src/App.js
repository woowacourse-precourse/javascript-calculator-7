import {Console} from "@woowacourse/mission-utils";

class App {
  parseInput(input) {
    // 쉼표나 콜론으로 문자열 분리(split)
    const numbers = input.split(/[,;]/).map((num) => {
      // 문자열 숫자로 변환
      const parsedNum = parseInt(num.trim(), 10);
      if (isNaN(parsedNum) || parsedNum < 0) {
        throw new Error("유효하지 않은 입력입니다.");
      }
      return parsedNum;
    });
    return numbers;
  }

  async run() {
    try {
      const input = await this.getUserInput();
      const numbers = this.parseInput(input);
      Console.print(numbers);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }

  async getUserInput() {
    return await Console.readLineAsync("덧셈할 문자열을 입력해 주세요: ");
  }
}

export default App;
