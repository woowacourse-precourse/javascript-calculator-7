import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      let input = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );

      const splitInput = input.split(/[,:]/);

      splitInput.forEach((stringNumber) => {
        if (!Number(stringNumber)) {
          throw new Error("[ERROR] 지정되지 않은 구분자를 입력했습니다.");
        }
        if (Number(stringNumber) < 0) {
          throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
        }
      });

      MissionUtils.Console.print(`결과 : ${splitInput}`);
    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error.message}`);
      throw error;
    }
  }
}

export default App;
