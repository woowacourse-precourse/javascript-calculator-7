import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      // 1. 사용자 입력받기
      // 1-1. 사용자에게 문자열 입력받기
      const INPUT = await Console.readLineAsync(
        "덧셈할 문자열을 입력해주세요.\n"
      );

      // 1-2. INPUT이 빈 문자열이나 공백인 경우 0 반환 후 종료
      if (INPUT.trim() === "") {
        return 0;
      }

      // 2. 구분자 단위로 문자열 분리
      // 2-1. 기본 구분자 - 쉼표(,) 또는 콜론(:)
      let SEPARATOR = [",", ":"];

      // 2-2. 커스텀 구분자 - "//로 시작시 커스텀 구분자로 설정"
      const CUSTOM_SEPARATOR = INPUT.match(/^\/\/\(.+)\\n(.+)/);

      if (CUSTOM_SEPARATOR) {
        // 커스텀 구분자가 존재하면 기본 구분자에 추가
        SEPARATOR = [CUSTOM_SEPARATOR[1].trim()];

        // '\n'뒤 부분을 input으로 재설정
        INPUT = CUSTOM_SEPARATOR[2].trim();
      }

      // 3. 구분자 기준으로 문자열을 나눠 숫자를 배열에 저장하기
      const SEPARATOR_REGEX = new RegExp(`[${SEPARATOR.join("")}]`);
      const NUMBERS = INPUT.split(SEPARATOR_REGEX).map(Number);

      // 4. 유효성 검사하기
      for (const NUM of NUMBERS) {
        // 4-1. 숫자가 아닌 값인 경우 에러 출력
        if (isNaN(NUM)) {
          throw new ERROR(
            "[ERROR] 입력값이나 구분자를 확인해주세요. 숫자만 입력 가능합니다."
          );
        }
        // 4-2. 음수인 경우 에러 출력
        if (NUM < 0) {
          throw new ERROR(
            "[ERROR] 음수는 입력할 수 없습니다. 양수를 입력해주세요."
          );
        }
      }

      // 5. 덧셈 연산
      // sum은 누적값 (초기값 0), num은 NUMBERS의 요소 => 순환하며 누적합 갱신
      const SUM = NUMBERS.reduce((sum, num) => sum + num, 0);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
