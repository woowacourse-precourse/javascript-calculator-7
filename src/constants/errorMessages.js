const ERROR_MESSAGES = {
  PREFIX: '[ERROR]',
  NEGATIVE_NUMBER: '음수는 입력할 수 없습니다.',
  INVALID_CHARACTER: '구분자 이외의 문자열이 포함되어 있습니다.',
  MIXED_DELIMITERS: '기본 구분자와 커스텀 구분자를 함께 사용할 수 없습니다.',
  ONLY_DELIMITER: '구분자만 입력할 수 없습니다. 숫자와 함께 입력해주세요.',
  CUSTOM_DELIMITER_POSITION:
    '커스텀 구분자는 "//[구분자]\\n" 형식으로 맨 앞에 위치해야 합니다.',
};

export default ERROR_MESSAGES;
