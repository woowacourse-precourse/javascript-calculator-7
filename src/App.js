// @ts-nocheck

import { Console } from '@woowacourse/mission-utils';

class App {
    async run() {
        Console.print('덧셈할 문자열을 입력해 주세요.');
        await this.readInput();
    }

    async readInput() {
        try {
            const VALUE = await Console.readLineAsync('');
            const RESULT = this.calculate(VALUE);

            Console.print(`결과 : ${RESULT}`);
        } catch (error) {
            Console.print(`[ERROR] : ${error.message}`);
        }
    }

    calculate(input) {
        if (input.trim() === '') throw new Error('입력된 값이 없습니다.');

        const REGEXP = /[,:]/;

        const numbers = input.split(REGEXP).map(Number);

        if (numbers.some(isNaN)) {
            throw new Error('숫자가 아닌 값이 포함되었습니다.');
        }

        Console.print(numbers);

        return numbers;
    }
}

export default App;
