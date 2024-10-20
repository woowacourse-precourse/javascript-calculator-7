import CustomError from "./CustomError.js";
import CustomSepatator from "./CustomSeparator.js";

const validator = {
  NUMBER_RULES: Object.freeze({
    isNumber: Object.freeze({
      errorMessage:
        "구분자를 제외하면 0 또는 양수인 숫자만 입력할 수 있습니다.",
      isNotValid: (element) => Number.isNaN(element),
    }),
    isPositive: Object.freeze({
      errorMessage: "양수인 정수의 합만 구할 수 있습니다.",
      isNotValid: (element) =>
        Math.sign(element) === -1 || Object.is(Math.sign(element), -0),
    }),
  }),

  CUSTOM_SEPARATOR_RULES: Object.freeze({
    noSeparator: Object.freeze({
      errorMessage: "//와 \\n 사이에 커스텀 문자 1개를 지정해주세요.",
      isNotValid: (string) =>
        CustomSepatator.extractSeparator(string).length < 1,
    }),
    tooManySeparator: Object.freeze({
      errorMessage: "커스텀 구분자는 1개의 문자만 지정할 수 있습니다.",
      isNotValid: (string) =>
        CustomSepatator.extractSeparator(string).length > 1,
    }),
  }),

  validateNumberArray: (array) => {
    array.forEach((element) => {
      Object.values(validator.NUMBER_RULES).forEach(
        ({ errorMessage, isNotValid }) => {
          if (isNotValid(element)) throw new CustomError(errorMessage);
        }
      );
    });
  },

  validateCustomSeparator: (string) => {
    Object.values(validator.CUSTOM_SEPARATOR_RULES).forEach(
      ({ errorMessage, isNotValid }) => {
        if (isNotValid(string)) throw new CustomError(errorMessage);
      }
    );
  },
};

export default validator;
