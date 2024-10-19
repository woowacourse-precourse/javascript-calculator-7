import { Console } from '@woowacourse/mission-utils';
import { getUserInput, validateInput } from './User.js';

// 구분자 저장 리스트
const delimiters = [',', ':'];

// 덧셈 계산기 실행 메서드
export const runCalculator = async () => {
    const userInput = await getUserInput(); // 계산식 입력 받기

    // 계산식 기본 예외 처리
    try {
        const exp = validateInput(userInput);
    } catch(error) {
        throw error;
    }

    const definedUserInput = defineDelimiters(userInput); // 구분자 정의
    const splitedString = splitStringByDelimiters(definedUserInput); // 구분자 기준으로 분리

    // 각 숫자에 대한 예외 처리
    try {
        const numbers = convertToNumberList(splitedString);
        Console.print(`결과 : ${calculateSum(numbers)}`);
    } catch(error) {
        console.log("Number Conversion에서 에러 발생:", error.message);
        throw error;
    }
}

// 구분자 정의 메서드
const defineDelimiters = (userInput) => {
    if (userInput.slice(0, 2) === '//' && userInput.slice(3, 5) === '\\n') {
        delimiters.push(userInput[2]);

        userInput = userInput.slice(5); // 구분자 정의 구문 이후부터가 덧셈 계산식
    }

    return userInput;
}

// 문자열 분리 메서드 (구분자를 기준으로)
const splitStringByDelimiters = (userInput) => {
    const regex = new RegExp(`[${delimiters.join('')}]`, 'g');
    const splitedString = userInput.split(regex);

    return splitedString;
}

// 문자 리스트를 숫자 리스트로 변환하는 메서드
const convertToNumberList = (splitedString) => {
    const numbers = splitedString.map((value) => {
        const num = Number(value);

        if (isNaN(num)) {
            throw new Error('[ERROR] 숫자가 아닌 값이 포함되어 있습니다.');
        }

        return num;
    });

    // 음수 값 처리
    const negativeNumbers = numbers.filter(num => num < 0);

    if (negativeNumbers.length > 0) {
        throw new Error('[ERROR] 모든 숫자는 양수여야 합니다.');
    }

    return splitedString.map(Number);
}

// 모든 수의 합 계산 메서드
const calculateSum = (numbers) => {
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return sum;
}