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

        this.validateExpressionRule(inputString);

        const {value, separators} = this.parseInput(inputString);
        const result = this.calculate(value, separators);

        return MissionUtils.Console.print(`결과 : ${result}`);
    }

    parseInput(input) {
        if (input[0] === '/' && input[1] === '/') {
            const searchLastWordIndex = input.indexOf('\\n');
            const customSeparator = input.slice(2, searchLastWordIndex).trim();

            this.validateCustomSeparatorIsNotEmpty(customSeparator);
            this.validateCustomSeparatorIsNotNumber(customSeparator);

            if (searchLastWordIndex !== -1) {
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
                this.validateSeparatorIsNotRepeat(isPrevSeparator);
                numArray.push(currentNum);
                currentNum = '';
                isPrevSeparator = true;
            } else {
                this.validateAllowedSeparator(separators, char);
            }
        });

        return numArray
            .map((str) => parseInt(str, 10))
            .reduce((acc, curr) => acc + curr, 0);
    }

    isDigit(value) {
        return value >= '0' && value <= '9'
    }

    validateMinimumLength(value) {
        if (value.length < 3) {
            throw Error(ERROR_MESSAGES.INVALID_EXPRESSION_RULE);
        }
    }

    validateNotAllNumbers(value) {
        if (!isNaN(value)) {
            throw Error(ERROR_MESSAGES.INVALID_EXPRESSION_RULE);
        }
    }

    validateLastCharIsNumber(value) {
        if (!this.isDigit(value.at(-1))) {
            throw Error(ERROR_MESSAGES.INVALID_EXPRESSION_RULE);
        }
    }

    validateCustomSeparatorIsNotEmpty(num) {
        if (num.length === 0) {
            throw Error(ERROR_MESSAGES.INVALID_CUSTOM_SEPARATOR);
        }
    }

    validateCustomSeparatorIsNotNumber(value) {
        if (this.isDigit(value)) {
            throw Error(ERROR_MESSAGES.INVALID_CUSTOM_SEPARATOR);
        }
    }

    validateSeparatorIsNotRepeat(value) {
        if (value) {
            throw Error(ERROR_MESSAGES.INVALID_SEPARATOR_USAGE);
        }
    }

    validateAllowedSeparator(separators, char) {
        if (!separators.includes(char) && isNaN(char)) {
            throw Error(ERROR_MESSAGES.INVALID_SEPARATOR_USAGE);
        }
    }

    validateExpressionRule(value) {
        this.validateMinimumLength(value);
        this.validateNotAllNumbers(value);
        this.validateLastCharIsNumber(value)
    }
}

export default App;
