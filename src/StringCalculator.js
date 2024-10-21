import {Console} from "@woowacourse/mission-utils";
import {getInput} from "./utils/inputHandler.js";
import {isCustom, preprocessing, sliceString} from "./utils/stringProcessor.js";

class StringCalculator {
    sum = 0;
    customSeparator = null;

    async start() {
        const input = await getInput(Console)
        if (input === "") {
            return this.resultOutput(); // 빈 문자열의 경우 결과 출력
        }
        const argument = isCustom(input) ? sliceString(input).slicedString : input;
        this.calculator(argument);
        this.resultOutput();
    }

    isCustomSeparatorError(param) {
        if (!isNaN(param)) {
            throw new Error("[ERROR]: 에러발생");
        }
    }

    isError(param) {
        if (Number(param) < 0 || param === "" || isNaN(param.trim())) {
            throw new Error("[ERROR]: 에러발생");
        }
    }

    resultOutput() {
        Console.print(`결과 : ${this.sum}`);
    }

    calculator(param) {
        const numberArray = preprocessing(param, this.customSeparator);
        this.sum = numberArray.reduce((a, b) => a + b, 0);
    }
}

export default StringCalculator;
