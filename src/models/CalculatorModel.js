import parseInput from "../utils/parser.js";
import validateNumbers from "../models/ValidatorModel.js";

function calculateSum(input) {
  const numbers = parseInput(input);
  validateNumbers(numbers);
  return numbers.reduce((acc, cur) => acc + cur, 0);
}

export default calculateSum;
