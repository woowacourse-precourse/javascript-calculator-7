import { MissionUtils } from "@woowacourse/mission-utils";

class App {
    async run() {
       
            let input = await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
            
            let result = this.calculate(input);
            MissionUtils.Console.print(`결과 : ${result}`);
    
    }

    calculate(input) {
        // 빈 문자열 입력 처리
        if (input === "") {
            return 0;
        }

        let delimiter = /,|:/; // 기본 구분자
        let numbers = String(input);
        
        // 커스텀 구분자가 있는 경우
        if (numbers.startsWith("//")) {
            let customDelimiterEnd = numbers.search(/\\n/);
            
            // 커스텀 구분자가 없으면 에러 발생
            if (customDelimiterEnd == -1||customDelimiterEnd == 2) {
                throw new Error("[ERROR] 입력 형식이 잘못되었습니다.");
            }

            // 커스텀 구분자를 정의
            let customDelimiter = numbers.substring(2, customDelimiterEnd);
            delimiter = new RegExp(`[${customDelimiter},:]`); // 정규 표현식으로 변환

            // 구분자 이후의 숫자 부분 추출
            const CUSTOM_DELIMITER_PREFIX_LENGTH = 2;
            numbers = numbers.substring(customDelimiterEnd + CUSTOM_DELIMITER_PREFIX_LENGTH);
        }

        // 숫자 문자열을 주어진 구분자로 나누기
        const numberArray = numbers.split(delimiter);
        if (numberArray.some(part => !/^\d+$/.test(part.trim()))) {
            throw new Error("[ERROR] 양수 외의 문자가 있습니다.");
        }
        // 숫자로 변환하고, 음수 확인
        const sum = numberArray.reduce((acc, current) => {
            const num = parseInt(current, 10);
            if (isNaN(num)) {
                throw new Error("[ERROR] 입력 형식이 잘못되었습니다.");
            }
            if (num < 0) {
                throw new Error("[ERROR] 음수는 허용되지 않습니다.");
            }
            return acc + num;
        }, 0);

        return sum;
    }
}

export default App;
