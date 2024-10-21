import { Console } from '@woowacourse/mission-utils';

class App {
    
    async run() {
        try {
            const input = await Console.readLineAsync(`덧셈할 문자열을 입력해 주세요.\n`);
            const result = this.calculate_sum(input);
            Console.print("결과 : " + result);
        } catch (error) {
            Console.print(error.message);
        }
    }

    calculate_sum(input) {
        if (input === "") {
            return 0;
        }

        let numbers = [];
        const default_split_text = /[,|:]/;  // 기본 구분자: 콤마와 콜론
        let custom_split_text = null;

        // 커스텀 구분자 확인
        if (input.startsWith("//")) {
            // 입력에서 '\\n'을 기준으로 분할
            const parts = input.split('\\n');
            if (parts.length < 2) {
                throw new Error("[ERROR] 커스텀 구분자 형식이 올바르지 않습니다.");
            }
            // 첫 줄에서 커스텀 구분자 추출
            custom_split_text = new RegExp(parts[0].slice(2));
            // 나머지 부분을 실제 숫자 데이터로 사용
            input = parts.slice(1).join('\\n');
        }

        if (custom_split_text) {
            numbers = input.split(custom_split_text);
        } else {
            numbers = input.split(default_split_text);
            // 구분자가 없는 숫자만 입력된 경우 검사
            if (numbers.length === 1 && input === numbers[0] && !default_split_text.test(input)) {
                throw new Error("[ERROR] 구분자를 포함하여 입력해 주세요.");
            }
        }

        // 숫자 유효성 검사
        let sum = 0;
        for (let num of numbers) {
            num = num.trim();
            if (num === "" || /[^0-9]/.test(num)) {
                throw new Error("[ERROR] 잘못된 문자 입력했습니다.");
            }
            const value = parseInt(num, 10);
            if (value < 0) {
                throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
            }
            sum += value;
        }

        return sum;
    }
}

export default App;
