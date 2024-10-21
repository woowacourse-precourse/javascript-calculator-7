export const UI = Object.freeze({
  INPUT_QUERY: "덧셈할 문자열을 입력해 주세요.\n",
  OUTPUT: (result)=> `결과 : ${result}`,
});

export const ERROR = Object.freeze({
  HEADER: "[ERROR]",
  EXPRESSION_HAS_INVALID_CHARARACTER: "식에 유효하지 않은 문자가 있습니다.",
  MISSING_CUSTOM_DELIMITER: "커스텀 구분자 형식이 들어왔지만, 커스텀 구분자가 없습니다.",
  INCORRECT_CUSTOM_DELIMITER_FORMAT: "커스텀 구분자의 형식이 바르지 않습니다",
  INCORRECT_EXPRESSION: "들어온 식에 문제가 있습니다.",
  INCOREECT_NUMBER: "은 양수가 아닙니다."

})

export const CUSTOM_DELIMITER = Object.freeze({
  START: '//',
  end: '\\n'
})

export const GROUPING_REGEX = /^(\/\/(?<customDelimiters>.*)\\n)?(?<expression>.*)$/;
export const NEED_ESCAPE_CHARS = [
  "[",
  "]",
  "{",
  "}",
  "*",
  "+",
  "-",
  "?",
  "|",
  "^",
  "$",
  ".",
  "\\",
];
