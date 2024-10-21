import { ERROR_MESSAGE } from "../constants/errorMessage";

/**
 * 숫자 배열 아이템을 합산하는 함수입니다.
 * @param {number[]} numbers - 숫자 배열을 매개변수로 받습니다.
 * @returns {number} - 배열 아이템을 전부 합산한 숫자를 반환합니다.
 */
export const additionCalculator = (numbers) => {
  let sum = 0;
  if (!Array.isArray(numbers)) {
    throw new Error(ERROR_MESSAGE.CALCULATOR_TYPE_ERROR);
  }
  numbers.forEach((number) => (sum += number));

  return sum;
};
