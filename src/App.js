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
            this.throwError();
        }
    }

    numbersExtraction(input) {
        if (input.trim() === '') this.throwError();

        let defaultRegExp = /[,:]/;
        let userInputValue = input;

        // custom
        if (input.startsWith('//')) {
            const customDelimiterRegExp = /\/\/(.*?)\n/;
            const customDelimiter = input.match(customDelimiterRegExp);

            if (!customDelimiter) this.throwError();

            const newRegExp = customDelimiter[1];
            defaultRegExp = new RegExp(`[${newRegExp}]`);
            userInputValue = input.split('\n')[1];
        }

        const numbers = userInputValue.split(defaultRegExp).map(Number);

        if (numbers.some((num) => num < 0)) this.throwError();

        if (numbers.some(isNaN)) this.throwError();

        return numbers;
    }

    add(numberList) {
        return numberList.reduce((sum, number) => sum + number, 0);
    }

    throwError() {
        throw new Error('[ERROR]');
    }
}

export default App;
