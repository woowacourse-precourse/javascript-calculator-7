export const INPUT_MESSAGE = '덧셈할 문자열을 입력해 주세요.\n';

export const ERROR_MESSAGES = Object.freeze({
  empty: '[ERROR] 입력이 비어 있습니다.\n',
  negativeNumber: '[ERROR] 숫자는 양수만 허용됩니다.',
  missingNumber: '[ERROR] 구분자 뒤에 숫자가 입력되지 않았습니다.',
  invalidDelimiter: '[ERROR] 유효하지 않은 구분자가 존재합니다.',
  defaultStart:
    '[ERROR] 기본 구분자를 사용할 경우, 입력은 양수로 시작해야 합니다.',
  customForamt:
    '[ERROR] 커스텀 구분자를 사용할 경우, "//"과 "\\n" 사이에 구분자를 입력해야 합니다.',
  period: '[ERROR] 온점(.)은 구분자로 사용할 수 없습니다.',
});
