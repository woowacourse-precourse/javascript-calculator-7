import CustomError from "./CustomError.js";
import CustomSepatator from "./CustomSeparator.js";

class Validator {
  static VALIDATION_NUMBER_ARRAY = {
    isNumber: {
      errorMessage:
        "구분자를 제외하면 0 또는 양수인 숫자만 입력할 수 있습니다.",
      isNotValid: (element) => Number.isNaN(element),
    },
    isPositive: {
      errorMessage: "양수인 정수의 합만 구할 수 있습니다.",
      isNotValid: (element) =>
        Math.sign(element) === -1 || Object.is(Math.sign(element), -0),
    },
  };

  static VALIDATION_CUSTOM_SEPARATOR = {
    noSeparator: {
      errorMessage: "//와 \\n 사이에 커스텀 문자 1개를 지정해주세요.",
      isNotValid: (string) =>
        CustomSepatator.extractSeparator(string).length < 1,
    },
    tooManySeparator: {
      errorMessage: "커스텀 구분자는 1개의 문자만 지정할 수 있습니다.",
      isNotValid: (string) =>
        CustomSepatator.extractSeparator(string).length > 1,
    },
  };

  static validateNumberArray(array) {
    array.forEach((element) => {
      Object.values(Validator.VALIDATION_NUMBER_ARRAY).forEach(
        ({ errorMessage, isNotValid }) => {
          if (isNotValid(element)) throw new CustomError(errorMessage);
        }
      );
    });
  }

  static validateCustomSeparator(string) {
    Object.values(Validator.VALIDATION_CUSTOM_SEPARATOR).forEach(
      ({ errorMessage, isNotValid }) => {
        if (isNotValid(string)) throw new CustomError(errorMessage);
      }
    );
  }
}

export default Validator;
