import { MissionUtils } from "@woowacourse/mission-utils";
import validateInput from "./validateInput.js";
class App {
  async run() {
    let separator = ":,";
    const ERRORMESSAGE = "[ERROR]";
    const TARGET_STRING = await MissionUtils.Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    if (validateInput(TARGET_STRING)) {
      MissionUtils.Console.print(ERRORMESSAGE);
    } else {
      // 커스텀한 구분자 저장
      if(TARGET_STRING.startsWith("/")){
        separator = separator + TARGET_STRING[2]
      } 
    }
    MissionUtils.Console.print(validateInput(TARGET_STRING));
  }
}

export default App;
