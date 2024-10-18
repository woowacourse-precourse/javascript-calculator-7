import { Console } from '@woowacourse/mission-utils';
import { getUserInput } from './User.js';

// 구분자 저장 리스트
const delimiters = [',', ':'];

export const runCalculator = async () => {
    const userInput = await getUserInput();

    defineDelimiters(userInput);

    Console.print(delimiters);
}

const defineDelimiters = (userInput) => {
    if (userInput.slice(0, 2) === '//' && userInput.slice(3, 5) === '\\n') {
        delimiters.push(userInput[2]);
    }
}