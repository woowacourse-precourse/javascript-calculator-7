export const INTRO = '덧셈할 문자열을 입력해 주세요.\n';
export const RESULT_PREFIX = '결과 : ';
export const ERROR_MESSAGE = Object.freeze({
  SEPERATOR_TYPE_ERROR: '[ERROR] 숫자 구분자는 사용할 수 없습니다.',
  SEPERATOR_BLANK_ERROR: '[ERROR] 커스텀 구분자로 빈 값은 입력할 수 없습니다.',
  CHAR_NOT_ALLOWED: '[ERROR] 등록되지 않은 문자가 포함되어 있습니다.',
  NEGATIVE_NOT_ALLOWED: '[ERROR] 음수는 허용되지 않습니다.',
});
export const PATTERN = /\/\/(.*?)\\n/g;
