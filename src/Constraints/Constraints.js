export const ERROR_PREFIX = '[ERROR]: ';

export const ERROR_MESSAGES = {
  INVALID_INPUT_FORMAT:
    '입력은 반드시 "//"로 시작하고, "\\n"이 포함되어야 합니다.',
  INVALID_CUSTOM_INPUT:
    'delimiter와 숫자 이외의 문자가 포함되었거나, 입력 순서가 잘못되었습니다.',
  INVALID_NUMBER_INPUT: '문자열에 포멧이 올바르지 않거나, 음수를 입력했습니다.',
  DUPLICATE_DELIMITERS: '숫자 사이에 중복된 delimiter가 있습니다.',
  MISSING_DELIMITER: 'Delimiter를 입력받지 못했습니다.',
  EMPTY_STRING: '빈 문자열입니다.',
  EMPTY_DELIMITER: 'delimiter가 비어있습니다.', // 추가된 에러 메시지
};
