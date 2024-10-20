import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const USER_INPUT = await Console.readLineAsync("입력값을 입력해주세요.");
    // 구분자랑 숫자 분리 로직 -- (1)
    const { SEPERATORS, NUM_STRING } = this.ESTRACT_SEPERATORS(USER_INPUT);

    Console.print(`구분자: ${SEPERATORS.join(", ")}`);
    Console.print(`숫자 문자열: "${NUM_STRING}"`);
    // 합 출력 로직 -- (2)
    const TOTAL_SUM = this.calculateSum(NUM_STRING, SEPERATORS);
    Console.print(`결과: ${TOTAL_SUM}`);
  }

  // (1) 구분자랑 숫자 분리
  ESTRACT_SEPERATORS(input) {
    // 배열로 다 흩어버린 후에
    const CHAR_ARRAY = [...input];
    let SEPERATORS = [",", ":"]; // 얘는 기본 구분자
    let NUM_STRING = "";
    let IS_CUSTOM = false;

    // 커스텀 찾기 (모든 //와 \n사이에 있는 기호들은 커스텀으로 간주)
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
    // 정규 표현식
    const SEPERATE_MARK = new RegExp(`[${SEPERATORS.join("")}]`); // 구분자만 골라내서
    const NUMBERS = NUM_STRING.split(SEPERATE_MARK).filter(Boolean); // 구분자 기준 숫자분리

    // 합계
    return NUMBERS.reduce((sum, num) => {
      const PARSED_NUM = parseInt(num, 10); // 문자열을 숫자로 변환
      return isNaN(PARSED_NUM) ? sum : sum + PARSED_NUM; // 합 계산
    }, 0);
  }
}

export default App;
