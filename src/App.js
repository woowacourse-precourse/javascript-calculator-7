import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await this.getInput();
      const result = this.calculate(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      Console.print(error.message);
    }
  }

  async getInput() {
    return await Console.readLineAsync("덧셈할 문자열을 입력해 주세요:\n");
  }

  calculate(input) {
    // 1번 기능: 빈 문자열일 경우 0을 반환
    if (input === "") {
      return 0;
    }

    // 이후 추가 기능들을 여기에 구현할 예정입니다.
    return input;
  }
}

export default App;
