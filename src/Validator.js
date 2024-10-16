import { ERROR_MESSAGE } from './constant';

class Validator {
  // 커스텀 구분자 배열에 대한 유효성 검사 메서드
  static customSeperator(seperators) {
    seperators.forEach((item) => {
      if (Number.isInteger(item)) {
        throw new Error(ERROR_MESSAGE);
      }
    });
  }

  // 계산될 배열에 대한 유효성 검사 메서드
  static parseNumber(arr) {
    arr.forEach((item) => {
      if (Number.isNaN(item)) {
        throw new Error(ERROR_MESSAGE);
      }
      if (item < 0) {
        throw new Error(ERROR_MESSAGE);
      }
    });
  }
}

export default Validator;
