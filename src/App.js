import { Console } from "@woowacourse/mission-utils";

class StrParts {
  // 첫 번째 배열 분리
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

  // 마지막 배열 분리
  async LastParts(str, idx) {
    const LAST_STR = str.substring(idx + 1);
    return LAST_STR.match(/\d+|[^a-zA-Z0-9\s]/g);
  }
}

class App {
  async run() {
    // 1. 사용자로부터 덧셈을 연산할 문자열을 입력한다.
    const CALCULATOR_STR = await Console.readLineAsync(
      "덧셈할 문자열을 입력해주세요.\n"
    );

    // 2. 구분자 배열과 숫자 배열을 각각 따로 사용하여 처리한다.
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
        if (FIRST_PARTS[i] === "//" && FIRST_PARTS[i + 2] === "\n")
          SEPARATOR_ARR.push(FIRST_PARTS[i + 1]);
        // 에러 예외 처리 해아 함
      }
    }

    const LAST_PARTS = await STR_PARTS.LastParts(
      CALCULATOR_STR,
      LAST_SEPARATOR_INDEX
    );

    console.log(LAST_PARTS);
    console.log(SEPARATOR_ARR);
    console.log(NUM_ARR);
  }
}

export default App;
