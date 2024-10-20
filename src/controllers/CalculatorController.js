import calculateSum from "../models/CalculatorModel.js";
import handleError from "../utils/errorHandler.js";
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
