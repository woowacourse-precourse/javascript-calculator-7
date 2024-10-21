const PRINT_MESSAGES = {
  USER_GUIDE:
    '커스텀 구분자 지정은 입력의 앞부분에 위치해야 하고, 점(.) 기호, 영문, 한글 등은 사용할 수 없습니다.\nex) //>\\n1,2,3>4 or 2,3:5',
  ENTER_ADDITION_STRING: '덧셈할 문자열을 입력해 주세요.\n',
  FINAL_RESULT: '결과 : ',
};

const ERROR_MESSAGES = {
  WRONG_INPUT:
    '[ERROR] 잘못된 값이 포함되어 있습니다. 숫자 혹은 구분자만 입력해 주세요.',
  NEGATIVE_NUMBER: '[ERROR] 합을 구하는 숫자는 양수만 입력해 주세요.',
  WRONG_CUSTOM_SYMBOL:
    '[ERROR] 커스텀 구분자는 기본 구분자를 제외한 특수문자만 입력해 주세요.',
  WRONG_SYMBOL_LENGTH: '[ERROR] 커스텀 구분자는 한 글자만 입력해 주세요.',
  DUPLICATE_SYMBOL:
    '[ERROR] 커스텀 구분자는 기본 구분자와 겹치지 않아야 합니다.',
  WRONG_SYMBOL_TYPE:
    '[ERROR] 커스텀 구분자는 기본 구분자와 (.)점을 제외한 특수문자만 입력해 주세요.',
  WRONG_POSITION: '[ERROR] 커스텀 구분자의 위치가 올바르지 않습니다.',
};

export { PRINT_MESSAGES, ERROR_MESSAGES };
