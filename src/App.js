import { Console } from "@woowacourse/mission-utils";

class StrParts {
  async FirstParts(str, idx) {
    const FIRST_STR = str.substring(0, idx + 1);

    // 문자열에서 숫자와 영문자를 제외한 문자를 추출
    const SPLIT_STR = [...new Set(FIRST_STR.match(/[^a-zA-Z0-9\s]/g))];

    // 추출된 문자들을 이스케이프 처리하여 정규식으로 반환
    const ESCAPE_STR = SPLIT_STR.map((char) => `\\${char}`).join("");
    const REGEX = new RegExp(`(\\/\\/|[${ESCAPE_STR}]|\\n)`, "g"); // 동적 정규식 생성

    // 개행 문자를 실제 '\n'으로 바꾸기
    const REPLACED_STR = FIRST_STR.replace(/\\n/g, "\n");

    // 정규식을 사용하여 문자열을 분리
    return REPLACED_STR.split(REGEX).filter(Boolean);
  }

  async LastParts(str, idx) {
    const LAST_STR = str.substring(idx + 1);
    return LAST_STR.match(/\d+|[^a-zA-Z0-9\s]/g).map((item) =>
      item.match(/\d+/) ? Number(item) : item
    );
  }
}

class App {
  async run() {
    const ERROR = "[ERROR]";
    try {
      const CALCULATOR_STR = await Console.readLineAsync(
        "덧셈할 문자열을 입력해주세요.\n"
      );

      // 구분자, 숫자 배열
      const SEPARATOR_ARR = [",", ":"];
      const NUM_ARR = CALCULATOR_STR.match(/\d+/g).map(Number);

      // 'n' 기준 문자 인덱스 생성
      const LAST_SEPARATOR_INDEX = CALCULATOR_STR.lastIndexOf("n");

      // '\n'를 기준으로 배열 분리하기
      const STR_PARTS = new StrParts();
      let FIRST_PARTS = [];
      if (LAST_SEPARATOR_INDEX > 0) {
        FIRST_PARTS = await STR_PARTS.FirstParts(
          CALCULATOR_STR,
          LAST_SEPARATOR_INDEX
        );

        // '//'와 '\n' 사이에 있는 문자 추가하기
        for (let i = 0; i < FIRST_PARTS.length; i += 3) {
          if (
            FIRST_PARTS[i] === "//" &&
            isNaN(Number(FIRST_PARTS[i + 1])) &&
            FIRST_PARTS[i + 2] === "\n"
          )
            SEPARATOR_ARR.push(FIRST_PARTS[i + 1]);
          else throw ERROR;
        }
      }

      const LAST_PARTS = await STR_PARTS.LastParts(
        CALCULATOR_STR,
        LAST_SEPARATOR_INDEX
      );

      // 마지막 배열의 모든 문자 요소가 구분자 배열에 포함되있는 지 확인
      for (let PARTS = 0; PARTS < LAST_PARTS.length; PARTS++) {
        if (PARTS % 2 === 1 && !SEPARATOR_ARR.includes(LAST_PARTS[PARTS])) {
          throw ERROR;
        } else if (PARTS % 2 === 0 && typeof LAST_PARTS[PARTS] !== "number") {
          throw ERROR;
        }
      }

      // 모두 일치하면 배열의 모든 숫자의 합 출력
      const RESULT = NUM_ARR.reduce((acc, val) => acc + val);
      Console.print("결과 : " + RESULT);
    } catch (err) {
      // await expect(err).resolves.toBe();
      Console.print(err);
    }
  }
}

export default App;
