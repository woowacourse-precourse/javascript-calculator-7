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
            const FORMATVALUE = VALUE.replace(/\\n/g, '\n');
            const NUMBERS = this.numbersExtraction(FORMATVALUE);
            const RESULT = this.add(NUMBERS);

            Console.print(`결과 : ${RESULT}`);
        } catch (error) {
            Console.print(`[ERROR] : ${error.message}`);
        }
    }

    numbersExtraction(input) {
        if (input.trim() === '') throw new Error('입력된 값이 없습니다.');

        let defaultRegExp = /[,:]/;
        let userInputValue = input;

        // custom
        if (input.startsWith('//')) {
            const customDelimiterRegExp = /\/\/(.*?)\n/;
            const customDelimiter = input.match(customDelimiterRegExp);

            if (!customDelimiter) {
                throw new Error('잘못된 형식입니다.');
            }

            const newRegExp = customDelimiter[1];
            defaultRegExp = new RegExp(`[${newRegExp}]`);
            userInputValue = input.split('\n')[1];
        }

        const numbers = userInputValue.split(defaultRegExp).map(Number);

        if (numbers.some(isNaN)) {
            throw new Error('숫자가 아닌 값이 포함되었습니다.');
        }

        return numbers;
    }

    add(numberList) {
        return numberList.reduce((sum, number) => sum + number, 0);
    }
}

export default App;
