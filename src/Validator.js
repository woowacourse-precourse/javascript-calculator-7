import CustomError from "./CustomError.js";

class Validator {
  static VALIDATION_NUMBER_ARRAY = {
    isNumber: {
      errorMessage: "구분자를 제외하면 0 또는 양수인 숫자만 입력할 수 있습니다.",
      isNotValid: (element) => Number.isNaN(element),
    },
    isPositive: {
      errorMessage: "양수인 정수의 합만 구할 수 있습니다.",
      isNotValid: (element) => Math.sign(element) === -1 || Object.is(Math.sign(element), -0),
    },
  };

  static validateNumberArray(array) {
    array.forEach((element) => {
      Object.values(Validator.VALIDATION_NUMBER_ARRAY).forEach(({ errorMessage, isNotValid }) => {
        if (isNotValid(element)) throw new CustomError(errorMessage);
      });
    });
  }
}

export default Validator;
