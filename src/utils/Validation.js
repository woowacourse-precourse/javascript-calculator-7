import Errors from "../constants/Errors.js";

/**
 * 숫자 배열을 확인
 */
const checkErrors = (numbersArray) => {
  if (numbersArray.some((number) => isNaN(Number(number)))) {
    throw new Error(Errors.NOT_NUMBER);
  }

  if (numbersArray.some((number) => number < 0)) {
    throw new Error(Errors.HAS_NEGATIVE);
  }
};

export default checkErrors;
