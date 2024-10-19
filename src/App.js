import { Console } from "@woowacourse/mission-utils";

class App {
    async run() {
        const input = await this.getUserInput();
        Console.print(this.isValidInput(input));
    }

    async getUserInput() {
        try {
            const userInput = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
            return userInput;
        } catch (error) {
            throw new Error("[Error]");
        }
    }

    isValidInput(input) {
        if (input === null || input === undefined || input === "") {
            return "0";
        }
        // 구분자와 양수로 구성된 문자열인지 검증하는 정규표현식
        const regex = /^[0-9]+([,:][0-9]+)*$/;
        return regex.test(input);
    }
}

export default App;
