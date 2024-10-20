import { Console } from '@woowacourse/mission-utils';

class StringCalculator {
    static calculate(input) {
        if (!input) return 0; // 빈 문자열이면 0 반환

        let separator = /[,:]/; // 기본 구분자 ,: 설정
        const numbers = input.split(separator); // 구분자 별로 숫자 나누기
        
        return StringCalculator.sum(numbers); 
    }

    static sum(numbers) { // 구분된 숫자 더하기
        try {
            const result = numbers
                .map((num) => num.trim()) // 공백 제거
                .filter((num) => num !== '') // 빈 값 제외
                .map((num) => {
                    const parsed = Number(num);
                    if (parsed < 0) throw new Error("[ERROR] 음수는 허용되지 않습니다.");
                    return parsed;
                })
                .reduce((acc, num) => acc + num, 0); // 파싱된 숫자들 누적해서 더하기

            return result;
        } catch (error) {
            Console.print(error.message); // 음수 입력시
            return;
        }
    }
}

class App {
    async run() {
        try {
            const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
            const result = StringCalculator.calculate(input);
            if (result !== undefined) {
                Console.print(`결과 : ${result}`);
            }
        } catch (error) {
            Console.print(error.message);
        }
    }
}

export default App;