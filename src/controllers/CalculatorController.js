import calculateSum from "../models/CalculatorModel.js";
import { Console } from "@woowacourse/mission-utils";
import renderResult from "../views/CalculatorView.js";
/**
 *
 * @todo 입력값 유효성 검사 필요
 * @todo 에러 종류에 따른 핸들링 필요
 * @todo 에러 메시지 출력 view 생성 필요 - 에러 핸들링 진행할때 수정
 */
function handleCalculation(input) {
  try {
    const numbers = calculateSum(input);
    renderResult(numbers);
  } catch (error) {
    Console.print(`[ERROR] ${error.message}`);
  }
}

export default handleCalculation;
