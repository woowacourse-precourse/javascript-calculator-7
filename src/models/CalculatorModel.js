import parseInput from "../utils/parser.js";
import validateNumbers from "../models/ValidatorModel.js";
/**
 *
 * @param {string} input 입력문자열
 * @returns {number} 덧셈결과
 */
function calculateSum(input) {
  const numbers = parseInput(input);
  validateNumbers(numbers);
  return numbers.reduce((acc, cur) => acc + cur, 0);
}

export default calculateSum;
