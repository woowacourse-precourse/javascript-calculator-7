import { Console } from "@woowacourse/mission-utils";

class App {
  async run(input = "") {
    try {
      const result = this.calculate(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message);
    }
  }

  async readInput() {
    return await Console.readLineAsync("덧셈할 문자열을 입력해 주세요:\n");
  }

  calculate(input) {
    // 1번 기능: 빈 문자열일 경우 0을 반환
    if (input === "") {
      return 0;
    }
    // 2번 기능: 쉼표(,) 또는 콜론(:) 구분자로 숫자 더하기
    cnumbers = input.split(/[,|:]/).map(Number);
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}

export default App;
