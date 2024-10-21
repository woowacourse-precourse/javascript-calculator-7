// App.js
import { Console } from '@woowacourse/mission-utils';

class App {
    run() {
        Console.print('덧셈할 문자열을 입력해 주세요.');
        Console.readLineAsync((input) => {
            try {
                const result = this.calculateSum(input);
                Console.print(`결과 : ${result}`);
            } catch (error) {
                Console.print(error.message);
            }
        });
    }

    calculateSum(input) {
        if (input === '') {
            return 0;
        }

        let numbers;

        if (input.startsWith('//')) {
            const [delimiterSection, numberSection] = input.split('\n');
            const customDelimiter = delimiterSection.slice(2);
            numbers = numberSection.split(customDelimiter);
        } else {
            numbers = input.split(/[,|:]/);
        }

        // 숫자가 아닌 값 또는 음수 처리
        const numberList = numbers.map((num) => {
            const parsedNum = Number(num);
            if (isNaN(parsedNum) || parsedNum < 0) {
                throw new Error('[ERROR] 잘못된 입력입니다.');
            }
            return parsedNum;
        });

        const sum = numberList.reduce((acc, curr) => acc + curr, 0);
        return sum;
    }
}

export default App;
