import { Console } from '@woowacourse/mission-utils';
import { getUserInput } from './User.js';

// 구분자 저장 리스트
const delimiters = [',', ':'];

export const runCalculator = async () => {
    const userInput = await getUserInput();

    Console.print(userInput);
}