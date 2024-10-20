import { Console } from '@woowacourse/mission-utils';

class App {
    async run() {
        try {
            const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요:");
            const result = this.calculate_sum(input);
            Console.print("결과: " + result);
            this.run();
        } catch (error) {
            Console.print("[ERROR] " + error.message);
        }
    }

    calculate_sum(input) {
        if (input === "") {
            return 0;
        }

        // '\n'을 실제 줄바꿈 문자로 변환
        input = input.replace(/\\n/g, '\n');

        let numbers = [];
        let default_string = /[,|:]/;
        let custom_default_string = null;

        // 커스텀 구분자 확인
        if (input.startsWith("//")) {
            const parts = input.split('\n');
            custom_default_string = parts[0].slice(2);
            input = parts.slice(1).join('\n');
        }

        // 구분자로 숫자 분리
        if (custom_default_string) {
            numbers = input.split(custom_default_string);
        } else {
            numbers = input.split(default_string);
        }

        // 구분자 사용 여부 확인 
        if (numbers.length === 1 && !custom_default_string && !input.match(default_string)) {
            throw new Error("구분자도 입력해주세용.");
        }
        else if (numbers.every(n => n.trim() === "") && (input.match(default_string) || custom_default_string)) {
        throw new Error("숫자도 입력해주세요.");
        }
        

        let sum = 0;
        for (let num of numbers) {
            num = num.trim();
            if (num === "") 
            continue;

            const calculated_num = parseInt(num, 10);
            if (isNaN(calculated_num)) {
                throw new Error("유효하지 않은 입력입니다: " + num);
            }
          
            sum += calculated_num;
        }

        return sum;
    }
}

export default App;