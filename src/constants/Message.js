export const CALCULATER = Object.freeze({
  input_prompt: '덧셈할 문자열을 입력해 주세요.\n',
  result: calculatedResult => `결과 : ${calculatedResult}`,
  empty_result: '결과 : 0',
});

export const ERROR_MESSAGES = Object.freeze({
  invalid_custom_delimiter: '[ERROR] 커스텀 구분자가 잘못 입력되었습니다.',
  empty_custom_delimiter: '[ERROR] 커스텀 구분자가 입력되지 않았습니다.',
  invalid_custom_delimiter_length:
    '[ERROR] 커스텀 구분자는 한 글자여야 합니다.',
  empty_value_between_delimiter: '[ERROR] 구분자 사이에 값이 없습니다.',
  not_number: '[ERROR] 숫자가 아닌 값을 입력하시면 안됩니다.',
  not_positive_number: '[ERROR] 양수만 입력할 수 있습니다.',
});
