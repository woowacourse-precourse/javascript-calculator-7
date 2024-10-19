import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const userString = await this.getUserString();
    const customDelimiter = this.getCustomDelimiter(userString);
    //MissionUtils.Console.print(customDelimiter);
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

  //커스텀 구분자 추출
  getCustomDelimiter(string) {
    const customDelimiter = string.match(/\/\/(.+)\\n/);
    if (customDelimiter) {
      return customDelimiter[1];
    } else {
      return false;
    }
  }
}

export default App;
