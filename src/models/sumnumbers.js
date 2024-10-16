import extractNumbers from "./extractnumber.js";

function calculateSum(numbers) {
  return numbers.reduce((acc, curr) => acc + (isNaN(curr) ? 0 : curr), 0);
}

export default calculateSum;
