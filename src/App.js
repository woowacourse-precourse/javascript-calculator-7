import { Console } from "@woowacourse/mission-utils";

class App {
    async run() {
        const inputText = await this.getInputText();

        Console.print(inputText); // input 값 확인
    }

    getInputText() {
        return Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    }
}

export default App;
