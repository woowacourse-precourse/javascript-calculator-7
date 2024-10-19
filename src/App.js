import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await this.getInput();
    const { inputString, delimiters } = this.splitInput(input);
    if (inputString === "0") {
      MissionUtils.Console.print("결과 : 0");
      return;
    }
  }

  async getInput() {
    return await MissionUtils.Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요."
    );
  }

  splitInput(inputString) {
    if (!inputString) return { inputString: "0", delimiters: [] };
    return { inputString, delimiters };
  }
}

export default App;
