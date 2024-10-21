import { Console } from '@woowacourse/mission-utils';

class StringCalculator {
    static add(input) {
        if (!input || input === "") {
            return 0;
        }

        const customDelimiterMatch = input.match(/^\/\/(.)\n/);
        let delimiters = /[,:]/;
        let numbersString = input;

        if (customDelimiterMatch) {
            const customDelimiter = customDelimiterMatch[1];
            delimiters = new RegExp(`[${customDelimiter}]`);
            numbersString = input.split("\n")[1];
        }

        const numbers = numbersString.split(delimiters).map(Number);
        this.validateNumbers(numbers);

        return numbers.reduce((sum, num) => sum + num, 0);
    }

    static validateNumbers(numbers) {
        numbers.forEach(num => {
            if (isNaN(num) || num < 0) {
                throw new Error("[ERROR] 잘못된 입력값입니다.");
            }
        });
    }
}

class App {
    async run() {
        try {
            Console.print("프로그램 시작");  // 디버깅 출력
            const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
            Console.print(`입력값: ${input}`);  // 디버깅 출력
            const result = StringCalculator.add(input);
            Console.print(`결과 : ${result}`);
        } catch (error) {
            Console.print(error.message);
        }
    }
}

const app = new App();
app.run();
