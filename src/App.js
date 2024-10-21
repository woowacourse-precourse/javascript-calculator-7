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

    // 쉼표와 콜론을 기본 구분자로 처리하여 문자열을 분리하고 합산하는 함수
    calculateSum(input) {
        if (input === '') {
            return 0; // 빈 문자열은 0을 반환
        }

        // 기본 구분자 쉼표(,)와 콜론(:)으로 분리
        const numbers = input.split(/[,|:]/);

        // 숫자 배열로 변환하고 합산
        const sum = numbers.reduce((acc, curr) => acc + Number(curr), 0);
        return sum;
    }
}

export default App;
