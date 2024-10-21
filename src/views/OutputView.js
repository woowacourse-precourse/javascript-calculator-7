import { Console } from "@woowacourse/mission-utils";
import { CALCULATOR_MESSAGES } from "../constants/calculatorMessages.js";

/**
 * 사용자에게 출력값 및 메세지를 보여주기 위한 js
 */

export const OutputView = {
    outputResult(sum) {
        if(Number(sum) === 0) {
            return Console.print(CALCULATOR_MESSAGES.empty_result_msg(sum));
        }
        return Console.print(CALCULATOR_MESSAGES.result_msg(sum));
    },
}