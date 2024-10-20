export const INPUT_MESSAGE = '덧셈할 문자열을 입력해 주세요.\n';

export const ERROR_MESSAGES = Object.freeze({
  empty: '[ERROR] 입력이 비어 있습니다.\n',
  customForamt:
    '[ERROR] 커스텀 구분자를 사용할 경우, "//"과 "\\n" 사이에 구분자를 입력해야 합니다.',
  length: '[ERROR] 커스텀 구분자는 하나의 문자여야 합니다.',
  period: '[ERROR] 온점(.)은 구분자로 사용할 수 없습니다.',
});
