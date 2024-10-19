import { MissionUtils } from "@woowacourse/mission-utils";
import validateInput from "./validateInput.js";
class App {
  async run() {
    let separator = ":,";
    let numbers=[];
    const ERRORMESSAGE = "[ERROR]";
    const TARGET_STRING = await MissionUtils.Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    if (validateInput(TARGET_STRING)) {
      MissionUtils.Console.print(ERRORMESSAGE);
    } else {
      // 커스텀한 구분자 저장
      if (TARGET_STRING.startsWith("//")) {
        separator = TARGET_STRING[2];
        numbers = TARGET_STRING.slice(5).split(separator);
      } else {
        // 커스텀한 구분자가 없을 경우(가장 basic한)
        numbers = TARGET_STRING.split(/[:\,]/);
      }
      const SUM = numbers.reduce((sum, n) => sum + parseInt(n), 0);
      MissionUtils.Console.print(`출력 : ${SUM}`);
    }
  }
}

export default App;
