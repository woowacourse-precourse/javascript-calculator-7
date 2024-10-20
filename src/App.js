import { Console } from "@woowacourse/mission-utils";

// 요구 사항에 기재되지 않은 내용 판단
// 1. 구분자로 시작하거나 끝나는 경우 -> False
// 2. 앞에 무의미한 0이 붙는 경우 -> False
// 3. 커스텀 구분자가 숫자인 경우 -> False
// 4. 커스텀 구분자가 문자 하나가 아닌 경우 -> False

class App {
    async run() {
        const input = await this.getUserInput();
        const [customDelimiter, inputWithoutDelimiter] = this.splitCustomDelimiter(input);
        const delimiters = customDelimiter ? `,:${customDelimiter}` : ",:";

        this.validateInput(inputWithoutDelimiter, delimiters);
        const numbers = this.splitInputByDelimiter(inputWithoutDelimiter, delimiters);
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

    validateInput(inputWithoutDelimiter, delimiters) {
        const regex = new RegExp(`^^(0|[1-9][0-9]*)([${delimiters}](0|[1-9][0-9]*))*$`);
        if (inputWithoutDelimiter && !regex.test(inputWithoutDelimiter)) {
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

    splitInputByDelimiter(inputWithoutDelimiter, delimiters) {
        if (!inputWithoutDelimiter) return [0];
        const numbers = inputWithoutDelimiter.split(new RegExp(`[${delimiters}]`));
        return numbers.map((number) => Number(number));
    }

    sumNumbers(numbers) {
        return numbers.reduce((acc, cur) => acc + cur, 0);
    }

    throwError(message) {
        // 굳이 함수화가 필요할까?
        throw new Error(`[ERROR] ${message}`);
    }
}

export default App;
