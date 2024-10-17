import { Console } from "@woowacourse/mission-utils";
import Messages from "./constants/Messages.js";
import Errors from "./constants/Errors.js";

class App {
  async run() {
    // 입력 메세지 출력 및 입력 받기
    const INPUT = await Console.readLineAsync(Messages.INPUT_MESSAGE);

    // 커스텀 구분자가 있는지 확인
    const CUSTOM_DELIMITER = this.checkCustomDelimiter(INPUT);

    // 커스텀 구분자가 있다면 커스텀 구분자 이후로 문자열을 자름
    const PROCESSED_INPUT = CUSTOM_DELIMITER
      ? INPUT.slice(INPUT.indexOf("\\n") + 2)
      : INPUT;

    // 정규식을 동적으로 생성
    const DELIMITER_REGEX = new RegExp(`[,:${CUSTOM_DELIMITER}]`);

    // 구분자에 따라 입력 받은 문자열을 숫자로 변환
    const NUMBERS_ARRAY = PROCESSED_INPUT.split(DELIMITER_REGEX).map(Number);

    // 에러처리
    // 숫자가 아닌 문자열이 포함되어 있는 경우
    if (NUMBERS_ARRAY.some((number) => isNaN(Number(number)))) {
      throw new Error(Errors.NOT_NUMBER);
    }

    // 음수가 포함되어 있는 경우
    if (NUMBERS_ARRAY.some((number) => number < 0)) {
      throw new Error(Errors.HAS_NEGATIVE);
    }

    // 숫자의 합 계산
    const SUM = NUMBERS_ARRAY.reduce((acc, cur) => acc + cur, 0);
    Console.print(`${Messages.OUTPUT_MESSAGE}${SUM}`);
  }

  // 커스텀 구분자가 있는지 확인하는 함수
  checkCustomDelimiter(input) {
    // 커스텀 구분자가 있는지 확인
    if (input.startsWith("//")) {
      if (input.includes("\\n")) {
        // //와 \n 사이의 문자열을 구분자로 사용
        const CUSTOMDELIMITER = input.slice(2, input.indexOf("\\n"));
        return CUSTOMDELIMITER;
      }
      // 커스텀 구분자가 잘못된 경우
      throw new Error(Errors.WRONG_CUSTOM_DELIMITER);
    }

    return false;
  }
}

export default App;
