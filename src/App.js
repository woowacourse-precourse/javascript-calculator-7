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
        const default_split_text = /[,|:]/;
        let custom_split_text = null;

        // 커스텀 구분자 확인
        if (input.startsWith("//")) {
            const parts = input.split('\\n');
            if (parts.length < 2) {
                throw new Error("[ERROR] 커스텀 구분자 형식이 올바르지 않습니다.");
            }
            custom_split_text = new RegExp(parts[0].slice(2));
            input = parts.slice(1).join('\\n');
        }

        if (custom_split_text) {
            numbers = input.split(custom_split_text);
        } else {
            numbers = input.split(default_split_text);
        }

        // 숫자 유효성 검사
        let sum = 0;
        for (let num of numbers) {
            num = num.trim();
            if (num === "" || /[^0-9]/.test(num)) {
                throw new Error("[ERROR] 잘못된 문자입력했습니다.");
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
