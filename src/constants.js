const ERROR_MESSAGE = Object.freeze({
  EMPTY_INPUT: "입력된 값이 없어요. 다시 한 번 덧셈할 숫자를 입력해 주세요!",
  NEGATIVE_INPUT: "양수만 입력해 주세요.",
  INVALID_INPUT: `입력된 값에 지원하지 않는 문자가 있어요.
  기본 구분자: ':' 또는 ','
  커스텀 구분자 설정: //(구분자)\\n
  위 정보를 참고하여 다시 입력해 주세요!`
});

const LOG_MESSAGE = Object.freeze({
  START_MESSAGE: "덧셈할 문자열을 입력해 주세요.",
  RESULT_MESSAGE: "결과 : ",
})

export {
  ERROR_MESSAGE, 
  LOG_MESSAGE
};