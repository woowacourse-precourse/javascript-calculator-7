import { Console } from "@woowacourse/mission-utils";
import { GuideMessage } from "../domain/Constants"
    ;
const View = {

    async readInputStirng() {
        const input = await Console.readLineAsync(GuideMessage.START_CALCULATION);
        return input;
    },

    async printResult(result) {
        await Console.print(`${GuideMessage.RESULT}${result}`);
    },

    printErrorMessage(message) {
        Console.print(message);
    }

}

export default View;