export const REGEX = {
  DEFAULT_DELIMITER: /^\d+(\.\d+)?([,:]\d+(\.\d+)?)*$/,
  CUSTOM_DELIMITER: /^\/\/(.)\\n(.*)$/,
  ESCAPE_SPECIAL_CHARS: /[.*+?^${}()|[\]\\]/g,
};

export const ERROR_MESSAGES = {
  INVALID_CALCULATION_STRING:
    '[ERROR] 계산을 위한 문자열의 형식이 잘못 되었습니다.',
  INVALID_CUSTOM_DELIMITER:
    '[ERROR] 커스텀 구분자 할당 형식이 잘못 되었습니다.',
};

export const VIEW_MESSAGES = {
  QUERY: '덧셈할 문자열을 입력해 주세요.\n',
  PREFIX_RESULT: '결과 : ',
};
