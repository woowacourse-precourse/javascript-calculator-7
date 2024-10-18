import { Console } from "@woowacourse/mission-utils";

class strToArr {
  async seperatorAddPart(str, idx) {
    const SEPERATOR_ADD_STR = str.substring(0, idx + 1);

    // 문자열에서 숫자와 영문자를 제외한 문자를 분리하고 추출
    const SPLIT_STR = [SEPERATOR_ADD_STR, "\n"];

    // 추출된 문자들을 이스케이프 처리하여 정규식으로 반환
    const ESCAPE_STR = SPLIT_STR.map((char) =>
      char.replace(/[^a-zA-Z0-9가-힣]/g, "\\$&")
    ).join("|");
    const DYNAMIC_REGEX = new RegExp(`(\\/\\/|${ESCAPE_STR})`, "g");

    // 개행 문자를 실제 '\n'으로 바꾸기
    const REPLACED_STR = SEPERATOR_ADD_STR.replace(/\\n/g, "\n");

    // 정규식을 사용하여 문자열을 분리
    return REPLACED_STR.split(DYNAMIC_REGEX).filter(Boolean);
  }

  async calculateParts(str, idx) {
    const CALCULATE_STR = str.substring(idx + 1);
    return CALCULATE_STR.match(/\d+|[^\w\s]+/g).map((item) =>
      item.match(/\d+/) ? Number(item) : item
    );
  }
}

class App {
  async run() {
    const ERROR = "[ERROR]";
    try {
      const PLUS_OP_STR = await Console.readLineAsync(
        "덧셈할 문자열을 입력해주세요.\n"
      );

      // 구분자, 숫자 배열
      const SEPARATOR_ARR = [",", ":"];
      const NUM_ARR = PLUS_OP_STR.match(/\d+/g).map(Number);

      // 'n' 기준 문자 인덱스 생성
      const LAST_N_CHAR_INDEX = PLUS_OP_STR.lastIndexOf("n");

      // '\n'를 기준으로 문자열을 나눠서 배열로 분리하기
      const strDivisionParts = new strToArr();
      let SEPERATOR_ADD_PART = [];
      if (LAST_N_CHAR_INDEX > 0) {
        SEPERATOR_ADD_PART = await strDivisionParts.seperatorAddPart(
          PLUS_OP_STR,
          LAST_N_CHAR_INDEX
        );

        // '//'와 '\n' 사이에 있는 문자 추가하기
        for (let i = 0; i < SEPERATOR_ADD_PART.length; i += 3) {
          if (
            SEPERATOR_ADD_PART[i] === "//" &&
            isNaN(Number(SEPERATOR_ADD_PART[i + 1])) &&
            SEPERATOR_ADD_PART[i + 2] === "\n"
          )
            SEPARATOR_ARR.push(SEPERATOR_ADD_PART[i + 1]);
          else throw ERROR;
        }
      }

      const CALCULATE_PART = await strDivisionParts.calculateParts(
        PLUS_OP_STR,
        LAST_N_CHAR_INDEX
      );

      // 마지막 배열의 모든 문자 요소가 구분자 배열에 포함되있는 지 확인
      for (let PARTS = 0; PARTS < CALCULATE_PART.length; PARTS++) {
        if (PARTS % 2 === 1 && !SEPARATOR_ARR.includes(CALCULATE_PART[PARTS])) {
          throw ERROR;
        } else if (
          PARTS % 2 === 0 &&
          typeof CALCULATE_PART[PARTS] !== "number"
        ) {
          throw ERROR;
        }
      }

      // 모두 일치하면 문자열에서 추출한 모든 숫자의 합 출력
      const RESULT = NUM_ARR.reduce((acc, val) => acc + val);
      Console.print("결과 : " + RESULT);
    } catch (err) {
      // await expect(err).resolves.toBe();
      Console.print(err);
    }
  }
}

export default App;
