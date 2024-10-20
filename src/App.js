import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const USER_INPUT = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요."
      );
      // 구분자랑 숫자 분리 로직 -- (1)
      const { SEPERATORS, NUM_STRING } = this.ESTRACT_SEPERATORS(USER_INPUT);
      // 합 출력 로직 -- (2)
      const TOTAL_SUM = this.calculateSum(NUM_STRING, SEPERATORS);
      Console.print(`결과 : ${TOTAL_SUM}`);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }

  // (1) 구분자랑 숫자 분리
  ESTRACT_SEPERATORS(input) {
    // 배열로 다 흩어버린 후에
    const CHAR_ARRAY = [...input];
    let SEPERATORS = [",", ":"]; // 얘는 기본 구분자
    let NUM_STRING = "";
    let IS_CUSTOM = false;

    // 커스텀 찾기 (모든 //와 \n사이에 있는 기호들은 커스텀으로 간주)
    // 커스텀 지정은 여러번 가능하도록 인식 (//와 \n사이에만 있다면 어디든)
    for (let i = 0; i < CHAR_ARRAY.length; i++) {
      // '/' 찾기
      if (CHAR_ARRAY[i] === "/" && CHAR_ARRAY[i + 1] === "/") {
        IS_CUSTOM = true; // 커스텀 시작점 파악
        i++;
        continue;
      }

      // '\n' 찾기
      if (IS_CUSTOM && CHAR_ARRAY[i] === "\\" && CHAR_ARRAY[i + 1] === "n") {
        IS_CUSTOM = false; // 커스텀 끝점 파악
        i++;
        continue;
      }

      if (IS_CUSTOM) {
        if (!isNaN(CHAR_ARRAY[i])) {
          throw new Error(
            `구분자로 숫자는 사용할 수 없습니다: "${CHAR_ARRAY[i]}"`
          );
        }
        // 커스텀 구간 내의 구분자 추가!
        if (!SEPERATORS.includes(CHAR_ARRAY[i])) {
          SEPERATORS.push(CHAR_ARRAY[i]); // 기존 구분자 배열에 추가
        }
      } else {
        // 커스텀 뒤에 숫자쪽
        NUM_STRING += CHAR_ARRAY[i];
      }
    }

    return { SEPERATORS, NUM_STRING };
  }

  calculateSum(NUM_STRING, SEPERATORS) {
    const INVALID_CHAR_REGEX = new RegExp(`[^0-9${SEPERATORS.join("")}]`);

    // 에러 처리 (1): 구분자나 숫자가 아닌 이외 문자 있을 때
    if (INVALID_CHAR_REGEX.test(NUM_STRING)) {
      throw new Error(`구분자나 숫자가 아닌 문자가 포함되어 있습니다.`);
    }
    // 정규 표현식
    const SEPERATE_MARK = new RegExp(`[${SEPERATORS.join("")}]`); // 구분자만 골라내서
    const NUMBERS = NUM_STRING.split(SEPERATE_MARK).filter(Boolean); // 구분자 기준 숫자분리

    // 합계
    return NUMBERS.reduce((sum, num) => {
      const PARSED_NUM = parseInt(num, 10); //숫자로 변환
      // 에러 처리 (2): 양수가 아닐 때
      if (PARSED_NUM < 0) {
        throw new Error(`${PARSED_NUM}과 같은 음수는 허용되지 않습니다`);
      }
      // 합 계산
      return sum + PARSED_NUM;
    }, 0);
  }
}

export default App;
