// App.js
import { Console } from '@woowacourse/mission-utils';

class App {
    run() {
        Console.print('덧셈할 문자열을 입력해 주세요.');
        Console.readLineAsync((input) => {
            const result = this.calculateSum(input);
            Console.print(`결과 : ${result}`);
        });
    }

    calculateSum(input) {
        if (input === '') {
            return 0; // 빈 문자열 처리
        }

        let numbers;

        if (input.startsWith('//')) {
            const [delimiterSection, numberSection] = input.split('\n');
            const customDelimiter = delimiterSection.slice(2);
            numbers = numberSection.split(customDelimiter);
        } else {
            numbers = input.split(/[,|:]/);
        }

        const sum = numbers.reduce((acc, curr) => acc + Number(curr), 0);
        return sum;
    }
}

export default App;
