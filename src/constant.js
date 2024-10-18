export const DEFAULT_SEPARATOR = [',', ':'];

export const SPECIAL_CHARACTERS = [
  '*',
  '+',
  '?',
  '.',
  '^',
  '$',
  '(',
  ')',
  '[',
  ']',
  '{',
  '}',
  '|',
  '\\',
];

export const CONSOLE_MESSAGE = {
  INPUT: '덧셈할 문자열을 입력해 주세요.\n',
  NUMBER_ERROR: '숫자가 아닌 문자열이 포함되어 있습니다.',
  NUMBER_POSITIVE_ERROR: '음수가 포함되어 있습니다.',
  SEPARATOR_FORM_ERROR:
    "구분자 형식이 잘못되었습니다. '//'로 시작하는 커스텀 구분자를 사용해 주세요.",
  SEPARATOR_LENGTH_ERROR: '구분자는 한 글자여야 합니다.',
  SEPARATOR_EMPTY_ERROR: '구분자가 비어 있습니다.',
};
