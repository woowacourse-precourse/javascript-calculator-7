import {Console} from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await this.getUserInput();
    Console.print(input);
  }
  async getUserInput() {
    return await Console.readLineAsync("덧셈할 문자열을 입력해 주세요: ");
  }
}

export default App;
