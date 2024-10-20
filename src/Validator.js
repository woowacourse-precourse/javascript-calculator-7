import { checkForNaN, hasNegative, throwError } from './utils';

class Validator {
  static checkNegativeInput(input) {
    if (hasNegative(input)) {
      throwError('[ERROR] : 양수만 입력할 수 있어요. (-)는 커스텀 구분자로 사용할 수 없어요.');
    }
  }

  static checkSplitResult(input, result) {
    const isNotSplit = result[0] === input;
    if (isNotSplit) {
      throwError('[ERROR] : 구분자와 양수로 이루어진 값을 입력해주세요.');
    }
    if (checkForNaN(result)) {
      throwError('[ERROR] : 입력값에 숫자 이외의 값이 포함되어 있어요.');
    }
  }

  static checkResultNull(result) {
    if (typeof result === 'string') {
      throwError(`[ERROR] : ${result}`);
    }
  }
}

export default Validator;
