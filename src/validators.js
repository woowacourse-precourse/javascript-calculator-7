import { throwError } from './utils.js';

const validateEmptyInput = (input) => {
  if (input.trim() === '') {
    throwError("입력된 값이 없어요. 다시 한 번 덧셈할 숫자를 입력해 주세요!");
  }
};

const validateNegativeNumbers = (numbersArray) => {
  const hasNegative = numbersArray.some((number) => Number(number) < 0);
  
  if (hasNegative) {
    throwError("양수만 입력해 주세요.");
  }
};

const validateInvalidNumbers = (numbersArray) => {
  const hasInvalid = numbersArray.some((number) => isNaN(Number(number)) || number.trim() === '');
  
  if (hasInvalid) {
    throwError(
      `입력된 값에 지원하지 않는 문자가 있어요.
      기본 구분자: ':' 또는 ','
      커스텀 구분자 설정: //(구분자)\\n
      위 정보를 참고하여 다시 입력해 주세요!`
    );
  }
};

export {
  validateEmptyInput,
  validateNegativeNumbers,
  validateInvalidNumbers,
};