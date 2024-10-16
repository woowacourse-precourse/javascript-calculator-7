const BASIC_MESSAGES = Object.freeze({
  stringInputMessage: "덧셈할 문자열을 입력해 주세요.\n",
  calcOutputMessage: "결과 : ",
  exitMessage: "계산기를 종료합니다",
});

const ERROR_WORD = "[ERROR]";

const ERROR_MESSAGE = Object.freeze({
  invalidPositiveNumber: `${ERROR_WORD} 음수는 입력할 수 없습니다.`,
  invalidString: `${ERROR_WORD} 문자는 입력할 수 없습니다.`,
});

export { BASIC_MESSAGES, ERROR_MESSAGE };
