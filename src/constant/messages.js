const BASIC_MESSAGES = Object.freeze({
  stringInputMessage: "덧셈할 문자열을 입력해 주세요.\n",
  calcOutputMessage: "결과 : ",
  exitMessage: "계산기를 종료합니다",
});

const ERROR_WORD = "[ERROR]";

const ERROR_MESSAGE = Object.freeze({
  invalidPositiveNumber: `${ERROR_WORD} 음수는 입력할 수 없습니다.`,
  invalidString: `${ERROR_WORD} 입력은 문자열이어야 합니다.`,
  invalidSeparator: `${ERROR_WORD} 구분자에 유효하지 않은 문자가 포함되어 있습니다.`,
  invalidCostom: `${ERROR_WORD} 잘못된 커스텀 구분자 형식입니다.`,
});

export { BASIC_MESSAGES, ERROR_MESSAGE };
