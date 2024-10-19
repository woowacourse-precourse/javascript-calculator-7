import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const userString = await this.getUserString();
    // MissionUtils.Console.print(userString);
  }

  //문자열 입력 받기
  async getUserString() {
    try {
      const userString = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요 \n"
      );
      return userString;
    } catch (error) {}
  }
}

export default App;
