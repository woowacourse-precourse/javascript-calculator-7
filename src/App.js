import { Console } from "@woowacourse/mission-utils";

class App {
    constructor() {
        this.defaultSeparators = [",", ":"]; // 기본 구분자
    }

    async run() {
        const inputText = await this.getInputText();
        const parsedText = this.parseInputText(inputText);

        Console.print(parsedText.split(";")); // 확인
    }

    getInputText() {
        return Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    }

    // 커스텀 구분자 존재하는지 확인 후 배열 변경
    parseInputText(inputText) {
        if (inputText.startsWith("//")) {
            inputText = inputText.split(/\n|\\n/)[1]; // 커스텀 구분자 뺀 나머지
        }
        return inputText;
    }
}

export default App;
