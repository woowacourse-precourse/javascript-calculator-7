export const IO_MESSAGES = {
  INPUT_MESSAGE : "덧셈할 문자열을 입력해 주세요.\n",
  OUTPUT_MESSAGE : "결과 : "
};

export const ERROR_MESSAGES = {
    INVALID_SEPARATOR: "공백과 .은 구분자로 사용할 수 없습니다.",
    NUMERIC_SEPARATOR: "숫자는 구분자로 사용할 수 없습니다.",
    INVALID_START: "입력은 숫자가 먼저 와야합니다.",
    INVALID_END: "입력은 숫자가 마지막으로 와야합니다.",
    MULTIPLE_SEPARATORS: "숫자 사이에는 한 개의 구분자만 존재해야 합니다.",
    NEGATIVE_NUMBER: "입력은 양수만 가능합니다.",
    INVALID_RESULT: "결과가 숫자가 아닙니다."
  };
  
  export function throwError(message) {
    throw new Error(`[ERROR]: ${message}`);
  }