import { Console } from '@woowacourse/mission-utils';
import { Validator } from './Validator.js'; // 사용자 입력 유효성 검사

// 구분자 저장 리스트
const delimiters = [',', ':'];

// 덧셈 계산기 실행 메서드
export const runCalculator = async () => {
    const userInput = await getUserInput(); // 계산식 입력 받기

    try {
        Validator.validateInput(userInput);
        const definedUserInput = defineDelimiters(userInput); // 구분자 정의
        const splitedString = splitStringByDelimiters(definedUserInput); // 구분자 기준으로 분리
        Validator.validateNumbers(splitedString);
        const numbers = convertToNumberList(splitedString);
        Console.print(`결과 : ${calculateSum(numbers)}`);
    } catch (error) {
        throw error;
    }
}

// 사용자에게 계산식 입력 받는 메서드
const getUserInput = async () => {
    const userInput = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

    return userInput;
}

// 구분자 정의 메서드
const defineDelimiters = (userInput) => {
    if (userInput.slice(0, 2) === '//' && userInput.slice(3, 5) === '\\n') {
        Validator.validateCorrectlyDeclaredDelimiters(userInput);
        delimiters.push(userInput[2]);

        userInput = userInput.slice(5); // 구분자 정의 구문 이후부터가 덧셈 계산식
    }

    Validator.validateIncorrectlyDeclaredDelimiters(userInput);

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
    return splitedString.map(Number);
}

// 모든 수의 합 계산 메서드
const calculateSum = (numbers) => {
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return sum;
}