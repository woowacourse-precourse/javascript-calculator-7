/**
 * @constant {Object} ERROR_MESSAGES
 * @description 문자열 덧셈 계산기에서 발생할 수 있는 다양한 오류 메시지를 정의
 *
 * @property {string} PREFIX - 모든 오류 메시지에 공통적으로 붙는 접두사
 * @property {string} NEGATIVE_NUMBER - 음수 입력이 불가능함을 알리는 메시지
 * @property {string} INVALID_CHARACTER - 기본/커스텀 구분자 이외의 유효하지 않은 문자가 포함된 경우 출력되는 메시지
 * @property {string} MIXED_DELIMITERS - 기본 구분자와 커스텀 구분자를 함께 사용할 수 없을 때 출력되는 메시지
 * @property {string} ONLY_DELIMITER - 구분자만 입력되고 숫자가 없는 경우 출력되는 메시지
 * @property {string} CUSTOM_DELIMITER_POSITION - 커스텀 구분자가 올바르지 않은 위치에 있을 때 출력되는 메시지
 */
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
