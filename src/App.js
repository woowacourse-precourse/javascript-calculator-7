import { Console } from "@woowacourse/mission-utils";
import BASIC_REGEXP from "./regExp.js";
import { checkIsPositive } from "./utils/validation.js";
import { add } from "./utils/sum.js";

class App {
  async run() {
    // 입력 받는 메세지를 먼저 출력
    Console.print("덧셈할 문자열을 입력해 주세요.");

    // 다음 줄에서 입력을 받음 + 입력 받은 문자열의 양 끝 공백 제거
    const input = await Console.readLineAsync("").then((input) => input.trim());

    // "//"를 확인하기 위해 첫 두 글자 가져오기
    const startString = input.slice(0, 2);

    if (startString === "//") {
      const parts = input.indexOf("\\n");

      if (parts !== -1) {
        // "\n"이 있는 경우
        const newSeparator = input.slice(2, parts);
        const dynamicRegExp = new RegExp(`[,:]|${newSeparator}`);
        const array = input.slice(parts + 2).split(dynamicRegExp);

        // array에 음수나 양수가 있는지 검사하여 있으면 Error 출력 + 설정된 구분자를 제외한 구분자를 사용한 경우 에러 발생
        checkIsPositive(array);
        Console.print(add(array));
      } else {
        // "\n"이 없는 경우
        throw new Error(JSON.stringify("ERROR: //는 있는데 \n는 없습니다."));
      }
    } else {
      const array = input.split(BASIC_REGEXP);

      // array에 음수나 양수가 있는지 검사하여 있으면 Error 출력 + 설정된 구분자를 제외한 구분자를 사용한 경우 에러 발생
      checkIsPositive(array);
      Console.print(add(array));
    }
  }
}

export default App;
