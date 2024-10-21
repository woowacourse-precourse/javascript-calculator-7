import readline from 'readline';

class App {
    constructor() {
        this.RL = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    }

    async run() {
        this.RL.question('덧셈할 문자열을 입력해주세요: ', (line) => {
            try {
                const result = this.calculate(line);
                console.log(`결과: ${result}`);
            } catch (error) {
                console.error(error.message);
            } finally {
                this.RL.close();
            }
        });
    }

    calculate(input) {
        if (!input) return 0; // 빈 문자열일 경우 0 반환

        let delimiter = /,|:/; // 기본 구분자 (쉼표, 콜론)

        // 모든 구분자로 숫자 분리
        const numbers = input.split(delimiter).map((num) => {
            const parsedNum = parseInt(num, 10);
            return parsedNum;
        });

        return numbers.reduce((sum, current) => sum + current, 0); // 숫자의 합 계산
    }
}

const app = new App();
app.run();
