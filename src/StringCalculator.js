import {Console} from "@woowacourse/mission-utils";
import {getInput} from "./utils/inputHandler.js";
import {isCustom, preprocessing, sliceString} from "./utils/stringProcessor.js";
import {checkForErrors} from "./utils/errorHandler.js";

class StringCalculator {
    sum = 0;
    customSeparator = null;

    async start() {
        const input = await getInput(Console)
        if (input === "") {
            return this.getOutput(); // 빈 문자열의 경우 결과 출력
        }
        const argument = isCustom(input) ? sliceString(input).slicedString : input;
        this.calculator(argument);
        this.getOutput();
    }

    getOutput() {
        Console.print(`결과 : ${this.sum}`);
    }

    calculator(param) {
        const numberArray = preprocessing(param, this.customSeparator);
        numberArray.forEach(elem => checkForErrors(elem)); // 에러 체크
        this.sum = numberArray.reduce((a, b) => a + b, 0);
    }
}

export default StringCalculator;
