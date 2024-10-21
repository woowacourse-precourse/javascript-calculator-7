import { Console } from '@woowacourse/mission-utils';

class App {
    
    async run() {
        try {
            const input = await Console.readLineAsync(`덧셈할 문자열을 입력해 주세요.\n`)
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

        // 1. 구분자 없이 숫자만 입력된 경우 체크
        if (!default_split_text.test(input) && !input.startsWith("//")) {
            throw new Error("[ERROR] 구분자 없이 숫자만 입력습니다.");
        }

        // 커스텀 구분자 확인
        if (input.startsWith("//")) {
            const parts = input.split('\\n');
            if (parts.length < 2) {
                throw new Error("[ERROR] 커스텀 구분자 형식이 올바르지 않습니다.");
            }
            const splits = parts[0].slice(2);
            
            // 3. 커스텀 구분자가 //와 \n 사이에 없는 경우
            if (splits === "") {
                throw new Error("[ERROR] 커스텀 구분자가 지정되지 않았습니다.");
            }
            
            // 4. 구분자가 숫자인 경우 에러 처리
            if (!isNaN(splits)) {
                throw new Error("[ERROR] 숫자를 구분자로 사용할 수 없습니다.");
            }
            
            custom_split_text = new RegExp(splits);
            input = parts.slice(1).join('\\n');
        }

        // 입력 처리
        if (custom_split_text) {
            numbers = input.split(custom_split_text);
        } else {
            // 2. 기본 구분자가 아닌 경우 체크
            const not_valid_basic = input.match(/[^0-9,:\s]/);
            if (not_valid_basic) {
                throw new Error(`[ERROR] 올바른 구분자가 아닙니다.`);
            }
            numbers = input.split(default_split_text);
        }

        let sum = 0;
        for (let num of numbers) {
            const trimed_number = num.trim();
            if (trimed_number === "") continue;  
            
            const calculated_num = parseInt(trimed_number, 10);
            if (isNaN(calculated_num)) {
                throw new Error(`[ERROR] 올바른 숫자가 아닙니다.`);
            }
            
            // 5. 음수 체크
            if (calculated_num < 0) {
                throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
            }
            
            sum += calculated_num;
        }

        return sum;
    }
}

export default App;