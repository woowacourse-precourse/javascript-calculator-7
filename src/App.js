import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      let input = await MissionUtils.Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );

      let customSeparator = "";

      if (input.includes("//") && input.includes("\\n")) {
        const CUSTOM_START_INDEX = input.indexOf("//") + 2;
        const CUSTOM_END_INDEX = input.indexOf("\\n");

        if (CUSTOM_START_INDEX < CUSTOM_END_INDEX) {
          customSeparator = input.substring(
            CUSTOM_START_INDEX,
            CUSTOM_END_INDEX
          );
          input = input.replace("//", "");
          input = input.replace("\\n", "");
        }
      }
      const regex = new RegExp(`[,:${customSeparator}]`);
      let splitInput = input.split(regex);

      if (splitInput[0] === "") splitInput.shift();
      splitInput = splitInput.map((stringNumber) => {
        if (!Number(stringNumber)) {
          throw new Error("[ERROR] 지정되지 않은 구분자를 입력했습니다.");
        }
        if (Number(stringNumber) < 0) {
          throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
        }
        return Number(stringNumber);
      });

      const SUM = splitInput.reduce((acc, cur) => acc + cur, 0);
      MissionUtils.Console.print(`결과 : ${SUM}`);
    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error.message}`);
      throw error;
    }
  }
}

export default App;
