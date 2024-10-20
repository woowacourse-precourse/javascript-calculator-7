import { Console } from "@woowacourse/mission-utils";
import { GuideMessage } from "../domain/Constants.js";

const OutputView = {
    async printResult(result) {
        await Console.print(`${GuideMessage.RESULT}${result}`);
    },

    printErrorMessage(message) {
        Console.print(message);
    }
}

export default OutputView;