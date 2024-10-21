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
            return 0;
        }

        let numbers;

        // 커스텀 구분자가 존재하는지 확인
        if (input.startsWith('//')) {
            // 커스텀 구분자 형식: //[구분자]\n[숫자들]
            const [delimiterSection, numberSection] = input.split('\n');
            const customDelimiter = delimiterSection.slice(2);
            numbers = numberSection.split(customDelimiter);
        } else {
            // 기본 구분자 쉼표와 콜론을 처리
            numbers = input.split(/[,|:]/);
        }

        const sum = numbers.reduce((acc, curr) => acc + Number(curr), 0);
        return sum;
    }
}

export default App;
