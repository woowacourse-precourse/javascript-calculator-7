import { Console } from "@woowacourse/mission-utils";

class App {
    async run() {
        const input = await this.getUserInput();
        const [customDelimiter, inputBody] = this.splitCustomDelimiter(input);
        const delimiters = customDelimiter ? `,:${customDelimiter}` : ",:";

        this.validateInput(inputBody, delimiters);
        const numbers = this.splitInputByDelimiter(inputBody, delimiters);
        const sum = this.sumNumbers(numbers);

        Console.print(`결과 : ${sum}`);
    }

    async getUserInput() {
        try {
            const userInput = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
            return userInput;
        } catch (error) {
            this.throwError("입력값을 받아오는 데 실패했습니다.");
        }
    }

    validateInput(inputBody, delimiters) {
        const regex = new RegExp(`^^(0|[1-9][0-9]*)([${delimiters}](0|[1-9][0-9]*))*$`);
        if (inputBody && !regex.test(inputBody)) {
            this.throwError("입력값이 유효하지 않습니다.");
        }
    }

    checkCustomDelimiter(input) {
        const regex = /^\/\/([^0-9])\\n/;
        return regex.test(input);
    }

    splitCustomDelimiter(input) {
        if (!this.checkCustomDelimiter(input)) {
            return [undefined, input];
        } else {
            return [input[2], input.slice(5)];
        }
    }

    splitInputByDelimiter(inputBody, delimiters) {
        if (!inputBody) return [0];
        const numbers = inputBody.split(new RegExp(`[${delimiters}]`));
        return numbers.map((number) => Number(number));
    }

    sumNumbers(numbers) {
        return numbers.reduce((acc, cur) => acc + cur, 0);
    }

    throwError(message) {
        throw new Error(`[ERROR] ${message}`);
    }
}

export default App;
