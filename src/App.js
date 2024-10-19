import { MissionUtils } from "@woowacourse/mission-utils";
import validateInput from "./validateInput.js";

class App {
  async run() {
    let separator = ":,";
    let numbers = [];
    const ERRORMESSAGE = "[ERROR]";
    const TARGET_STRING = await MissionUtils.Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );

    if (!validateInput(TARGET_STRING)) {
      throw new Error(ERRORMESSAGE);
      // MissionUtils.Console.print(`${ERRORMESSAGE}`);
    } else {
      // 커스텀한 구분자 저장
      if (TARGET_STRING.startsWith("//")) {
        const NINDEX = TARGET_STRING.indexOf("\n");
        separator = TARGET_STRING.slice(2, NINDEX);
        
        // 특수 문자를 이스케이프 처리
        const escapedSeparator = separator.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

        const regexSeparator =
          escapedSeparator.length > 1 ? `[${escapedSeparator}]` : escapedSeparator; // 여러 개일 경우 정규 표현식 생성
        
        numbers = TARGET_STRING.slice(NINDEX + 1).split(
          new RegExp(regexSeparator)
        );
      } else {
        // 커스텀한 구분자가 없을 경우(가장 basic한)
        numbers = TARGET_STRING.split(/[:\,]/);
      }

      const SUM = numbers.reduce((sum, n) => {
        const parsedNum = parseInt(n); // 문자열을 숫자로 변환
        return isNaN(parsedNum) ? sum : sum + parsedNum; // NaN일 경우 현재 sum을 반환
      }, 0);
      
      MissionUtils.Console.print(`결과 : ${SUM}`);
    }
  }
}

export default App;
