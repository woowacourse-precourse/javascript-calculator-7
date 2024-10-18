import { Console } from '@woowacourse/mission-utils';
import { getUserInput } from './User.js';

// 구분자 저장 리스트
const delimiters = [',', ':'];

// 덧셈 계산기 실행 메서드
export const runCalculator = async () => {
    const userInput = await getUserInput();

    defineDelimiters(userInput);
}

// 구분자 정의 메서드
const defineDelimiters = (userInput) => {
    if (userInput.slice(0, 2) === '//' && userInput.slice(3, 5) === '\\n') {
        delimiters.push(userInput[2]);

        userInput = userInput.slice(5); // 구분자 정의 구문 이후부터가 덧셈 계산식
    }

    splitStringByDelimiters(userInput);
}

// 문자열 분리 메서드 (구분자를 기준으로)
const splitStringByDelimiters = (userInput) => {
    const regex = new RegExp(`[${delimiters.join('')}]`, 'g');
    const splitedString = userInput.split(regex);

    Console.print(convertToNumberList(splitedString));
}

// 문자 리스트를 숫자 리스트로 변환하는 메서드
const convertToNumberList = (splitedString) => {
    return splitedString.map(Number);
}