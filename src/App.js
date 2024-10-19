import { Console } from "@woowacourse/mission-utils";

class App {
  getInputString() {
    const inputString =
      Console.readLineAsync("덧셈할 문자열을 입력해 주세요\n");
    return inputString;
  }

  async run() {
    const inputString = await this.getInputString();
  }
}

export default App;
