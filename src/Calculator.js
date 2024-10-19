import { MissionUtils } from "@woowacourse/mission-utils";

class Calculator {
  async start() {
    await this.getInput();
  }

  async getInput() {
    const input = await MissionUtils.Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
  }
}

export default Calculator;
