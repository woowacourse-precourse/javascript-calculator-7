/**
 * 숫자 배열의 합을 계산한다.
 *
 * @function sumCalculation
 * @param {number[]} numbers - 합을 계산할 숫자 배열
 * @returns {number} 숫자 배열의 합
 */
export default function sumCalculation(numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}
