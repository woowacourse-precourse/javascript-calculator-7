import { MissionUtils } from "@woowacourse/mission-utils";

class InputParser {// 입력을 숫자 배열로 나누는 클래스
    constructor(input) {
        this.input = input;
        this.delimiter = /,|:/; // 기본 구분자
        this.numbers = String(input);
    }

    parse() { // 입력 문자열을 구분자로 나누기
        if (this.numbers.startsWith("//")) {
            this.extractCustomDelimiter();
        }
        return this.splitNumbers();
    }

    extractCustomDelimiter() {// 커스텀 구분자를 추출
        let customDelimiterEnd = this.numbers.search(/\\n/);

        if (customDelimiterEnd == -1 || customDelimiterEnd == 2) {//\n이 없거나 커스텀 구분자가 없는 경우 오류
            throw new Error("[ERROR] 입력 형식이 잘못되었습니다.");
        }

        let customDelimiter = this.numbers.substring(2, customDelimiterEnd);
        this.delimiter = new RegExp(`[${customDelimiter},:]`);
        const CUSTOM_DELIMITER_PREFIX_LENGTH = 2;
        this.numbers = this.numbers.substring(customDelimiterEnd + CUSTOM_DELIMITER_PREFIX_LENGTH);
    }

    splitNumbers() {//문자열을 구분자로 나누고 공백 제거
        return this.numbers.split(this.delimiter).map(part => part.trim());
    }
}

class SumCalculator {// 합계를 계산하는 클래스
    calculate(numberArray) {
        if (numberArray.some(part => !/^\d+$/.test(part))) {//숫자 외 문자 확인
            throw new Error("[ERROR] 양의 정수 외의 문자가 있습니다.");
        }

        return numberArray.reduce((acc, current) => {
            const num = parseInt(current, 10);
            if (isNaN(num)) {//형식 오류
                throw new Error("[ERROR] 입력 형식이 잘못되었습니다.");
            }
            if (num < 0) {//음수 오류
                throw new Error("[ERROR] 음수는 허용되지 않습니다.");
            }
            return acc + num;
        }, 0);
    }
}

class App {
    async run() {
        let input = await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
        let inputParser = new InputParser(input);
        let numbers = inputParser.parse();
        
        let sumCalculator = new SumCalculator();
        let result = sumCalculator.calculate(numbers);
        
        MissionUtils.Console.print(`결과 : ${result}`);
    }
}

export default App;
