import { MissionUtils } from "@woowacourse/mission-utils";

const getNumberString = async () => {
  try {
    const numberString = await MissionUtils.Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
  } catch (error) {
    MissionUtils.Console.print(`[ERROR] ${error}`);
  }
};

class App {
  async run() {
    getNumberString();
  }
}

export default App;
