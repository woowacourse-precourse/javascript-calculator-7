import calculateSum from "../models/CalculatorModel.js";
import { Console } from "@woowacourse/mission-utils";
/**
 *
 * @todo 입력값 유효성 검사 필요
 * @todo 에러 종류에 따른 핸들링 필요
 */
function handleCalculation(input) {
  try {
    const numbers = calculateSum(input);
    Console.print(`결과 : ${numbers}`);
  } catch (error) {
    Console.print(`[ERROR] ${error.message}`);
  }
}

export default handleCalculation;
