import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const userInputString = await this.getUserInputString();
  }
  async getUserInputString() {
    return await Console.readLineAsync("문자열을 입력해주세요.");
  }
}

export default App;
