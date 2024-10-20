import { Console } from "@woowacourse/mission-utils";

// 요구 사항에 기재되지 않은 내용 판단
// 1. 구분자로 시작하거나 끝나는 경우 -> False
// 2. 앞에 무의미한 0이 붙는 경우 -> 일단.. True

class App {
    async run() {
        try {
            const input = await this.getUserInput();
            this.validateInput(input);
            const numbers = this.splitInput(input);
            const sum = this.sumNumbers(numbers);
            Console.print(`결과: ${sum}`);
        } catch (error) {
            Console.print(error.message);
        }
    }

    async getUserInput() {
        try {
            const userInput = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
            return userInput;
        } catch (error) {
            this.throwError("입력값을 받아오는 데 실패했습니다.");
        }
    }

    validateInput(input) {
        // 구분자와 양수로 구성된 문자열인지 검증하는 정규표현식
        const regex = /^[0-9]+([,:][0-9]+)*$/;
        if (input !== "" && !regex.test(input)) {
            this.throwError("입력값이 유효하지 않습니다.");
        }
    }

    splitInputByDelimiter(input) {
        if (!input) return [0];
        const numbers = input.split(/[,:]/);
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
