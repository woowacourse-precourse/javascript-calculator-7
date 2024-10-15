import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const userInput = await getUserInput();
  }

  async read(input) {
    return MissionUtils.Console.readLineAsync(input);
  }

  print(input) {
    return MissionUtils.Console.print(input);
  }

  async getUserInput() {
    return await this.read("덧셈할 문자열을 입력해 주세요.");
  }
}

export default App;
