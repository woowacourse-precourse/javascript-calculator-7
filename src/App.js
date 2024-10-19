import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await this.getUserInput(); //사용자 입력
      const result = this.calculateSum(input); //결과값 계산
      Console.print(`결과: ${result}`); //결과 출력
    } catch (error) {
      Console.print(error.message); //에러처리
      throw error;
    }
  }

  async getUserInput() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    return input;
  }
  calculateSum(input) {
    let numbers = input;
    let delimiter = /[,:]/;

    const parsedNumbers = numbers.split(delimiter).map((num) => {
      const trimmed = num.trim();
      if (trimmed === "") return 0;
      const parsed = parseInt(trimmed, 10);
      return parsed;
    });

    return parsedNumbers.reduce((sum, num) => sum + num, 0);
  }
}

export default App;
