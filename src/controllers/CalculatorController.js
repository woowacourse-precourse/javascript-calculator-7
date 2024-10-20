import calculateSum from "../models/CalculatorModel.js";
import renderResult from "../views/CalculatorView.js";

/**
 *
 * @param {string} input 입력 문자열
 */
function handleCalculation(input) {
  const numbers = calculateSum(input);
  renderResult(numbers);
}

export default handleCalculation;
