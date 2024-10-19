import { Console } from "@woowacourse/mission-utils";
import { GuideMessage } from "../domain/Constants.js";
    
const InputView = {
    async readInputStirng() {
        const input = await Console.readLineAsync(GuideMessage.START_CALCULATION);
        return input;
    },
}

export default InputView;