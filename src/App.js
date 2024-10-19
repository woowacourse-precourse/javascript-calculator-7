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

    // 커스텀 구분자 존재하면 배열 변경
    parseInputText(inputText) {
        if (inputText.startsWith("//")) {
            this.addSeparator(inputText);
            inputText = inputText.split(/\n|\\n/)[1]; // 커스텀 구분자 뺀 나머지
        }
        return inputText;
    }
    // 커스텀 구분자 존재하면 기본 구분자 배열에 커스텀 구분자 추가
    addSeparator(inputText) {
        const customSeparator = inputText.charAt(2);
        // 커스텀 구분자 자리에 숫자가 들어왔을 때 에러처리
        if (!isNaN(+customSeparator)) {
            throw new Error("[ERROR] 숫자는 구분자로 사용할 수 없습니다.");
        }
        this.defaultSeparators.push(customSeparator);
    }
}

export default App;
