import {Console} from "@woowacourse/mission-utils";
import {getInput} from "./utils/inputHandler.js";
import {parseInput, preprocessing} from "./utils/stringProcessor.js";
import {checkForErrors} from "./utils/errorHandler.js";
import {RESULT_MESSAGE} from "./constants/message.js";

class StringCalculator {
    #sum = 0;
    #customSeparator = null;

    async start() {
        const input = await getInput(Console)
        if (this.#isEmptyInput(input)) {
            return this.#getOutput(); // 빈 문자열의 경우 결과 출력
        }
        const {customSeparator, slicedString} = parseInput(input);
        this.#customSeparator = customSeparator;
        this.#calculator(slicedString);
        this.#getOutput();
    }

    #isEmptyInput(input) {
        return input === ""
    }

    #getOutput() {
        Console.print(RESULT_MESSAGE + this.#sum);
    }

    #calculator(param) {
        const numberArray = preprocessing(param, this.#customSeparator);
        numberArray.forEach(elem => checkForErrors(elem)); // 에러 체크
        this.#sum = numberArray.reduce((a, b) => Number(a) + Number(b), 0);
    }
}

export default StringCalculator;
