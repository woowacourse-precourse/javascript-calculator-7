export const MESSAGES = {
  inputNumber: "덧셈할 문자열을 입력해주세요.\n",
  result: "결과 : ",
};

const ERROR_PREFIX = "[ERROR]";

export const ERROR_MESSAGES = {
  negativeNotAllowed: `${ERROR_PREFIX}음수는 입력할 수 없습니다.`,
  shouldStartWithDelimiter: `${ERROR_PREFIX}커스텀 구분자는 가장 앞에 입력되어야 합니다.`,
  duplicatedDelimiterInput: `${ERROR_PREFIX}커스텀 구분자는 한번만 입력할 수 있습니다.`,
  numberNotAllowed: `${ERROR_PREFIX}커스텀 구분자로 숫자는 입력할 수 없습니다.`,
  invalidDelimiterLength: `${ERROR_PREFIX}커스텀 구분자의 길이는 1이어야 합니다.`,
  shouldBePositiveInteger: `${ERROR_PREFIX}숫자는 0이상의 정수만 입력 가능합니다.`,
};
