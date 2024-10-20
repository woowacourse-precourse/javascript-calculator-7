import parseInput from "../utils/parser.js";

function calculateSum(input) {
  const numbers = parseInput(input);
  return numbers.reduce((acc, cur) => acc + cur, 0);
}

export default calculateSum;
