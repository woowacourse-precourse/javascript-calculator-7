import { Console } from '@woowacourse/mission-utils';

class App {
    async run() {
        try {
            const input = await Console.readLineAsync("숫자를 입력해주세요:");
            const result = this.calculateSum(input);
            Console.print("결과: " + result);
            this.run();
        } catch (error) {
            Console.print("[ERROR] " + error.message);
        }
    }

    calculateSum(input) {
        if (input === "") {
            return 0;
        }

        // '\n'을 실제 줄바꿈 문자로 변환
        input = input.replace(/\\n/g, '\n');

        let numbers = [];
        let default_string = /[,|:]/;
        let customdefault_string = null;

        // 커스텀 구분자 확인
        if (input.startsWith("//")) {
            const parts = input.split('\n');
            customdefault_string = parts[0].slice(2);
            input = parts.slice(1).join('\n');
        }

        // 구분자로 숫자 분리
        if (customdefault_string) {
            numbers = input.split(customdefault_string);
        } else {
            numbers = input.split(default_string);
        }

        // 구분자 사용 여부 확인 
        if (numbers.length === 1 && !customdefault_string && !input.match(default_string)) {
            throw new Error("다시입력해주세요.");
        }

        let sum = 0;
        for (let num of numbers) {
            num = num.trim();
            if (num === "") continue;

            const parsedNum = parseInt(num, 10);
            if (isNaN(parsedNum)) {
                throw new Error("유효하지 않은 입력입니다: " + num);
            }
            if (parsedNum < 0) {
                throw new Error("음수는 허용되지 않습니다: " + parsedNum);
            }
            sum += parsedNum;
        }

        if (sum === 0 && numbers.some(n => n.trim() !== "")) {
            throw new Error("유효한 숫자가 입력되지 않았습니다.");
        }

        return sum;
    }
}

export default App;