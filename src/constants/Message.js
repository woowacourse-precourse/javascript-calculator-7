const MESSAGE = Object.freeze({
  START_MESSAGE: "덧셈할 문자열을 입력해 주세요.",
  RESULT_MESSAGE: "결과 : ",
});

const ERROR_MESSAGE = Object.freeze({
  INVALID_NUMBER: "[ERROR] 0이 아닌 양수를 입력해주세요.",
  INVALID_DELIMITER:
    "[ERROR] 커스텀 혹은 쉼표(,)와 콜론(:) 구분자를 사용해주세요",
});

export { MESSAGE, ERROR_MESSAGE };
