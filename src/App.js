import { Console } from "@woowacourse/mission-utils";

class App {
    constructor() {
        this.defaultSeparators = [",", ":"]; // 기본 구분자
    }

    async run() {
        const inputText = await this.getInputText();
        const parsedText = this.parseInputText(inputText);

        if (parsedText === "") Console.print("결과 : 0");

        const numbers = this.splitInputText(parsedText);
        this.validateNumbers(numbers);

        const result = this.sumNumbers(numbers);
        Console.print(`결과 : ${result}`);
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

    // 배열에서 구분자는 모두 + 로 바꾸고 +를 기준으로 쪼개기
    splitInputText(input) {
        for (const separator of this.defaultSeparators) {
            input = input.split(separator).join("+");
        }
        return input.split("+");
    }

    // 최종 배열 내에 음수가 아닌 숫자들만 들어있는지 확인하는 함수
    validateNumbers(numbers) {
        // 숫자가 아닌 값이 존재하는지 확인하고 경고 처리
        if (numbers.some(value => isNaN(+value))) {
            throw new Error("[ERROR] 숫자만 입력할 수 있습니다.");
        }

        // 음수 값이 존재하는지 확인하고 경고 처리
        if (numbers.some(value => +value < 0)) {
            throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
        }
    }

    sumNumbers(numbers) {
        return numbers.reduce((acc, cur) => +cur + acc, 0);
    }
}

export default App;
