import { Console } from "@woowacourse/mission-utils";
const ERR_MESSAGE = "[ERROR]";

class stringCalculate {
  // "//"와 "\n" 사이에 위치하는 문자열끼리 배열로 분리하는 함수
  seperatorAddPart(plus_op_str, n_idx) {
    const SEPERATOR_ADD_STR = plus_op_str.substring(0, n_idx + 1);

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

  // 실제 연산을 진행하는 문자열을 배열로 분리하는 함수
  calculateParts(plus_op_str, n_idx) {
    const CALCULATE_STR = plus_op_str.substring(n_idx + 1);
    return CALCULATE_STR.match(/\d+|[^\w\s]+/g) === null
      ? [0]
      : CALCULATE_STR.match(/\d+|[^\w\s]+/g).map((item) =>
          item.match(/\d+/) ? Number(item) : item
        );
  }

  // 커스텀 구분자를 추가하는 함수
  addSeperatorChar(added_sep, seperator_arr) {
    for (let i = 0; i < added_sep.length; i += 3) {
      if (
        added_sep[i] === "//" &&
        isNaN(Number(added_sep[i + 1])) &&
        added_sep[i + 2] === "\n"
      )
        seperator_arr.push(added_sep[i + 1]);
      else throw new Error(ERR_MESSAGE);
    }
  }

  // 모든 문자 요소가 구분자 배열에 포함되있는 지 확인하는 함수
  seperateCheck(calculate_part, seperator_arr) {
    for (let PART = 0; PART < calculate_part.length; PART++) {
      if (PART % 2 === 1 && !seperator_arr.includes(calculate_part[PART])) {
        throw new Error(ERR_MESSAGE);
      } else if (PART % 2 === 0 && typeof calculate_part[PART] !== "number") {
        throw new Error(ERR_MESSAGE);
      }
    }
  }
}

class App {
  async run() {
    try {
      const PLUS_OP_STR = await Console.readLineAsync(
        "덧셈할 문자열을 입력해주세요.\n"
      );

      // 문자열에 숫자나 기호가 없으면 예외 처리
      if (/^[a-zA-Z가-힣]+$/g.test(PLUS_OP_STR)) throw new Error(ERR_MESSAGE);

      // 구분자, 숫자 배열
      const SEPARATOR_ARR = [",", ":"];
      const NUM_MATCH = PLUS_OP_STR.match(/\d+/g);
      const NUM_ARR = NUM_MATCH === null ? [0] : NUM_MATCH.map(Number);

      // 'n' 기준 문자 인덱스 생성
      const LAST_N_CHAR_INDEX = PLUS_OP_STR.lastIndexOf("n");

      // '\n'를 기준으로 문자열을 나눠서 배열로 분리하기
      const strCalculate = new stringCalculate();
      let ADDED_SEPERATORS = [];
      if (LAST_N_CHAR_INDEX > 0) {
        ADDED_SEPERATORS = await strCalculate.seperatorAddPart(
          PLUS_OP_STR,
          LAST_N_CHAR_INDEX
        );

        strCalculate.addSeperatorChar(ADDED_SEPERATORS, SEPARATOR_ARR);
      }

      const CALCULATE_PART = await strCalculate.calculateParts(
        PLUS_OP_STR,
        LAST_N_CHAR_INDEX
      );

      // 모든 문자가 구분자 배열에 포함되있는지 확인
      strCalculate.seperateCheck(CALCULATE_PART, SEPARATOR_ARR);

      // 모두 일치하면 문자열에서 추출한 모든 숫자의 합 출력
      const OP_RESULT = NUM_ARR.reduce((acc, val) => acc + val);
      Console.print("결과 : " + OP_RESULT);
    } catch (error) {
      throw error;
    }
  }
}

export default App;
