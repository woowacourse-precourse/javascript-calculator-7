export const INPUT_MESSAGE = Object.freeze({
  INPUT_GUIDE: '덧셈할 문자열을 입력해 주세요.\n',
});

export const OUTPUT_MESSAGE = Object.freeze({
  result(result) {
    return `결과 : ${result}`;
  },
});

export const ERROR_MESSAGE = Object.freeze({
  INVALID_INPUT: '[ERROR] : 입력값은 띄어쓰기를 포함하지 않은 다음과 같은 형식이어야 합니다.',
  INVALID_EXAMPLE: '\n\t\t "//[커스텀구분자]\\n[숫자 및 구분자]"\n\t\t "[숫자 및 구분자]"',
  INVALID_NUMBER_DELIMITER: '[ERROR] : 구분자는 숫자가 될 수 없습니다.',
  INVALID_DEFAULT_DELIMITER: '[ERROR] : 기본 구분자는 커스텀 구분자로 사용할 수 없습니다.',
  IMPLEMETED: 'must be implemented',
});
