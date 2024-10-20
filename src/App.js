import { Console } from '@woowacourse/mission-utils';

class App {
    async run() {
        try {
            const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요:");
            const result = this.calculate_sum(input);
            Console.print("결과: " + result);
            this.run();
        } catch (error) {
            Console.print(error.message);
        }
    }

    calculate_sum(input) {
        if (input === "") {
            return 0;
        }

        // '\n'을 실제 줄바꿈 문자로 변환
        input = input.replace(/\\n/g, '\n');

        let numbers = [];
        let default_split_text = /[,|:]/;
        let custom_split_text = null;

        // 커스텀 구분자 확인
        if (input.startsWith("//")) {
            const parts = input.split('\n');
            if (parts.length < 2) {
                throw new Error("[ERROR] 커스텀 구분자 형식이 올바르지 않습니다.");
            }
            custom_split_text = parts[0].slice(2);
            input = parts.slice(1).join('\n');
        }

        // 구분자로 숫자 분리
        if (custom_split_text) {
            numbers = input.split(custom_split_text);
        } else {
            // 기본 구분자만 사용하는지 확인
            if (input.match(/[^0-9,:\s]/)) {
                throw new Error("[ERROR] 기본구분자가 아닙니닷");
            }
            numbers = input.split(default_split_text);
        }

        // 구분자 사용 여부 확인 
        if (numbers.length === 1 && !custom_split_text && !input.match(default_split_text)) {
            throw new Error("[ERROR] 구분자를 포함하여 입력해 주세요.");
        }
        else if (numbers.every(n => n.trim() === "") && (input.match(default_split_text) || custom_split_text)) {
            throw new Error("[ERROR] 숫자를 입력해주세요.");
        }

        let sum = 0;
        for (let num of numbers) {
            num = num.trim();
            if (num === "") 
                continue;

            const calculated_num = parseInt(num, 10);
            if (isNaN(calculated_num)) {
                throw new Error("[ERROR] 유효하지 않은 입력: " + num);
            }
            if (calculated_num < 0) {
                throw new Error("[ERROR] 음수는 입력할 수 없습니다: " + num);
            }
          
            sum += calculated_num;
        }

        return sum;
    }
}

export default App;