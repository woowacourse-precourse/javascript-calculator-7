import { Console } from "@woowacourse/mission-utils";

class App {
    async run() {
        const input = await this.getUserInput();
    }

    async getUserInput() {
        try {
            const userInput = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
            return userInput;
        } catch (error) {
            throw new Error("[Error]");
        }
    }
}

export default App;
