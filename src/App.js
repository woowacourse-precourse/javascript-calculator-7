import { Console } from '@woowacourse/mission-utils';
//왜자꾸 예제테스트에서 오류나지
// 사용자의 값을 입력 및 출력하려면 Console.readLineAsync()와 Console.print()를 활용한다

// 원래는 \n 을 어떻게 처리해야할지 모르겠어서 \n 자체로 바꿔주고 나머지 문자열을 이어붙이는 생각을 했는데
// 그런게아니었다 하핫


class App {
    
    async run() {
        try {
            const input = await Console.readLineAsync(`덧셈할 문자열을 입력해 주세요.\n`)
            const result = this.calculate_sum(input);
            Console.print("결과: " + result);
        } catch (error) {
            Console.print(error.message);
        }
    }

    calculate_sum(input) {
        if (input === "") {
            return 0;
        }

        let numbers = [];
        let default_split_text = /[,|:]/;
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

        // 구분자로 숫자 분리
        if (custom_split_text) {
            numbers = input.split(custom_split_text);
        } else {
            // 기본 구분자만 사용하는지 확인
            if (input.match(/[^0-9,:\s]/)) {
                throw new Error("[ERROR] 기본구분자가 아닙니다.");
            }
            numbers = input.split(default_split_text);
        }

        // 숫자가 하나만 있고 아무 구분자도 사용하지 않았을 때 오류 처리
        if (numbers.length === 1 && !custom_split_text && !input.match(default_split_text)) {
            throw new Error("[ERROR] 구분자를 포함하여 입력해 주세요.");
        }
        // 모든 요소가 비어있는 경우 오류 처리
        else if (numbers.every(n => n.trim() === "") && (input.match(default_split_text) || custom_split_text)) {
            throw new Error("[ERROR] 숫자를 입력해주세요.");
        }

        let sum = 0;
        for (let num of numbers) {
            num = num.trim();

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
