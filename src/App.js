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
        if (!input) return 0;

        let delimiter = /,|:/; // 기본 구분자 (쉼표, 콜론)

        // 커스텀 구분자 처리
        if (input.startsWith('//')) {
            // 정규 표현식 수정
            const customDelimiterMatch = input.match(/^\/\/(.)\\n/); // //로 시작해야하고, 줄바꿈 문자 전의 커스텀 문자를 인식함

            if (!customDelimiterMatch) {
                throw new Error('[ERROR] 잘못된 입력 형식입니다.');
            }

            // 커스텀 구분자 추출
            const customDelimiter = customDelimiterMatch[1];
            delimiter = new RegExp(`[${customDelimiter}]`, 'g'); // 커스텀 구분자를 정규식으로 변환. 문자열 내 모든 패턴 검색

            // 구분자 이후의 숫자 문자열로 변경
            input = input.slice(customDelimiterMatch[0].length); // 커스텀 구분자 제거
        }

        // 모든 구분자로 숫자 분리
        const numbers = input.split(delimiter).map((num) => {
            const parsedNum = parseInt(num, 10);
            if (isNaN(parsedNum) || parsedNum < 0) {
                throw new Error('[ERROR] 유효하지 않은 숫자 입력입니다.');
            }
            return parsedNum;
        });

        return numbers.reduce((sum, current) => sum + current, 0); // 숫자의 합 계산
    }
}

const app = new App();
app.run();
