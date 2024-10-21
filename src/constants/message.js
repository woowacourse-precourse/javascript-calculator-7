const MESSAGE = {
  INPUT: {
    STRING: "덧셈할 문자열을 입력해 주세요: ",
  },
  OUTPUT: {
    RESULT: (sum) => `결과 : ${sum}`,
    ERROR: "[ERROR] ",
  },
  ERROR: {
    INVALID_NUMBER: "숫자 형식이 아닙니다.",
    NEGATIVE_NUMBER: "음수는 허용되지 않습니다.",
    INVALID_DELIMITER: "잘못된 구분자가 사용되었습니다.",
  },
};

export default Object.freeze(MESSAGE);
