export const PROMT_MESSAGE = Object.freeze({
  inputPrompt: "덧셈할 문자열을 입력해 주세요.",
  result: "결과 :",
});

export const ERROR_MESSAGE = Object.freeze({
  invalidInput:
    "[ERROR] 형식이 올바르지 않습니다. 숫자는 양수만 가능, 구분자는 쉼표(,) 또는 콜론(:)만 가능합니다.",
  invalidCustomSeparator: "[ERROR] 커스텀 구분자의 형식이 올바르지 않습니다.",
  endsWithSeparator: "[ERROR] 구분자 다음에 숫자를 입력해주세요.",
  consecutiveSeparators:
    "[ERROR] 구분자가 연속적으로 입력되었습니다. 올바른 형식을 사용해주세요.",
});
