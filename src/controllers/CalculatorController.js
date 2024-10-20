import calculateSum from "../models/CalculatorModel.js";
import handleError from "../utils/errorHandler.js";
import renderResult from "../views/CalculatorView.js";

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
    handleError(error.message);
  }
}

export default handleCalculation;
