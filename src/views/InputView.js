import { Console } from "@woowacourse/mission-utils" 
import { CALCULATOR_MESSAGES } from "../constants/calculatorMessages.js";

/**
 * 사용자 입력을 위한 js
 */
export const InputView = {
    
    // 문자열 입력 함수
    async getNumbersFromInput() {
        return await Console.readLineAsync(CALCULATOR_MESSAGES.input_number_msg);
    }
}