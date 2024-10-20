import {MissionUtils} from "@woowacourse/mission-utils";
import {ERROR_MESSAGES} from "./errorMessages.js";

class App {
    constructor() {
        this.separators = [",", ":"];
    }

    async run() {
        const input = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
        let inputString = input.toString();

        if (inputString === '') {
            return MissionUtils.Console.print(`결과 : 0`);
        }

        this.validate(inputString);
        const {value, separators} = this.parseInput(inputString);
        const result = this.calculate(value, separators);

        return MissionUtils.Console.print(`결과 : ${result}`);
    }

    parseInput(input) {
        if (input[0] === '/' && input[1] === '/') {
            const searchLastWordIndex = input.indexOf('\\n');
            const customSeparator = input.slice(2, searchLastWordIndex).trim();

            if (customSeparator.length !== 1) {
                throw Error(ERROR_MESSAGES.INVALID_CUSTOM_SEPARATOR);
            }
            if (this.isDigit(customSeparator)) {
                throw Error(ERROR_MESSAGES.INVALID_CUSTOM_SEPARATOR);
            }
            if (searchLastWordIndex > 0) {
                const newSeparator = [...this.separators, customSeparator];
                return {
                    value: input.substring(searchLastWordIndex + 2),
                    separators: newSeparator,
                }
            }
        }
        return {
            value: input,
            separators: this.separators,
        }
    }

    calculate(value, separators) {
        const valueArray = [...value];
        let currentNum = '';
        let isPrevSeparator = true;
        let numArrayIndex = 0;
        const numArray = [];

        valueArray.forEach((char, index) => {
            if (this.isDigit(char)) {
                isPrevSeparator = false;
                currentNum += char;
                numArrayIndex++;
                if (index === valueArray.length - 1) {
                    numArray.push(currentNum);
                }
            }
            if (separators.includes(char)) {
                if (isPrevSeparator) {
                    throw Error(ERROR_MESSAGES.INVALID_SEPARATOR_USAGE);
                }
                numArray.push(currentNum);
                currentNum = '';
                isPrevSeparator = true;
            } else if (!separators.includes(char) && isNaN(char)) {
                throw Error(ERROR_MESSAGES.INVALID_SEPARATOR_USAGE);
            }
        });

        return numArray
            .map((str) => parseInt(str, 10))
            .reduce((acc, curr) => acc + curr, 0);
    }

    validate(value) {
        if (value.length < 3) {
            throw Error(ERROR_MESSAGES.INVALID_EXPRESSION_RULE);
        }
        if (!isNaN(value)) { // 입력값이 양수만으로 구성된 경우
            throw Error(ERROR_MESSAGES.INVALID_EXPRESSION_RULE);
        }
        if (!this.isDigit(value.at(-1))) { // 마지막 문자가 양수가 아닌 경우
            throw Error(ERROR_MESSAGES.INVALID_EXPRESSION_RULE);
        }
    }

    isDigit(value) {
        return value >= '0' && value <= '9'
    }
}

export default App;
