export const GAME_MESSAGE = Object.freeze({
  inputPrompt: "덧셈할 문자열을 입력해 주세요.",
  result: "결과: ",
});

export const ERROR_MESSAGE = Object.freeze({
  negativeValue: "[ERROR] 숫자는 양수만 입력 가능합니다.",
  invalidSeparator:
    "[ERROR] 구분자는 쉼표(,) 또는 콜론(:)만 가능합니다. 또는 커스텀 구분자를 지정해주세요.",
  invalidCustomSeparator: "[ERROR] 커스텀 구분자의 형식이 올바르지 않습니다.",
});
