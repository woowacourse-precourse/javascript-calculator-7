import calculateSum from "../models/CalculatorModel.js";
import renderResult from "../views/CalculatorView.js";
import renderError from "../views/ErrorView.js";
/**
 *
 * @todo 입력값 유효성 검사 필요
 * @todo 에러 종류에 따른 핸들링 필요
 */
function handleCalculation(input) {
  try {
    const numbers = calculateSum(input);
    renderResult(numbers);
  } catch (error) {
    renderError(error.message);
  }
}

export default handleCalculation;
