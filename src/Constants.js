export default class Constants {
  static ERROR_MESSAGE = {
    INVALID_INPUT: '[ERROR] 입력값을 받아오는데 실패했습니다.',
    INVALID_INPUT_TYPE: '[ERROR] 입력값은 양의 정수여야 합니다.',
    INVALID_CUSTOM_DELIMITER: '[ERROR] 커스텀 구분자 선언이 올바르지 않습니다.',
  };

  static DELIMITER = [',', ':'];

  static addDelimiter(newDelimiter) {
    this.DELIMITER.push(newDelimiter);
  }
}
