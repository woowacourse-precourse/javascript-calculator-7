export const PROMT_MESSAGE = Object.freeze({
  inputPrompt: '덧셈할 문자열을 입력해 주세요.',
  result: '결과 :',
});

export const ERROR_MESSAGE = Object.freeze({
  invalidInput:
    '[ERROR] 형식이 올바르지 않습니다. 숫자는 양수만 가능, 구분자는 쉼표(,) 또는 콜론(:)만 가능합니다.', // -1,2
  invalidCustomSeparator: '[ERROR] 커스텀 구분자의 형식이 올바르지 않습니다.', // //;\1,2, //\n1,2,3
  invalidCustomSeparatorLength:
    '[ERROR] 커스텀 구분자는 최대 1자만 허용합니다.',
  invalidCustomSeparatorDot:
    '[ERROR] 소수점(.)은 커스텀 구분자로 사용할 수 없습니다.', // //.\n1.2.3
  hasBoundarySeparator: '[ERROR] 구분자로 시작하거나 끝날 수 없습니다.', // 1,2, ,1,2
  consecutiveSeparators:
    '[ERROR] 구분자가 연속적으로 입력되었습니다. 올바른 형식을 사용해주세요.', // 1,,2
  consecutiveDots:
    '[ERROR] 잘못된 소수점 입력: 연속된 소수점이 포함되었습니다.', // 1..2
});
