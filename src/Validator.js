import CustomError from "./CustomError.js";
import CustomSepatator from "./CustomSeparator.js";

const validator = {
  /**
   * @public
   * @constant
   * @description
   * - isNumber: 해당 요소가 숫자인지 검증
   * - isPositive: 해당 요소가 양수인지 검증
   */
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

  /**
   * @public
   * @constant
   * @description
   * - noSeparator: 커스텀 구분자가 없을 때
   * - tooManySeparator: 커스텀 구분자가 2개 이상일 때
   */
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

  /**
   * @public
   * @param { Array<Number> } array - 검증할 숫자 배열
   * @throws { CustomError } - 검증 실패 시 에러 발생
   * @description
   * - 숫자 배열의 각 요소가 숫자인지 검증 (isNumber)
   * - 숫자 배열의 각 요소가 양수인지 검증 (isPositive)
   */
  validateNumberArray: (array) => {
    array.forEach((element) => {
      Object.values(validator.NUMBER_RULES).forEach(
        ({ errorMessage, isNotValid }) => {
          if (isNotValid(element)) throw new CustomError(errorMessage);
        }
      );
    });
  },

  /**
   * @public
   * @param { String } string - 검증할 문자열
   * @throws { CustomError } - 검증 실패 시 에러 발생
   * @description
   * - 커스텀 구분자가 없을 때 에러 (noSeparator)
   * - 커스텀 구분자가 2개 이상일 때 에러 (tooManySeparator)
   */
  validateCustomSeparator: (string) => {
    Object.values(validator.CUSTOM_SEPARATOR_RULES).forEach(
      ({ errorMessage, isNotValid }) => {
        if (isNotValid(string)) throw new CustomError(errorMessage);
      }
    );
  },
};

export default validator;
