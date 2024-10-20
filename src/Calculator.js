import { Console } from '@woowacourse/mission-utils';

// 구분자 저장 리스트
const delimiters = [',', ':'];

// 덧셈 계산기 실행 메서드
export const runCalculator = async () => {
    const userInput = await getUserInput(); // 계산식 입력 받기

    // 계산식 예외 처리
    try {
        validateInput(userInput);
        const definedUserInput = defineDelimiters(userInput); // 구분자 정의
        const splitedString = splitStringByDelimiters(definedUserInput); // 구분자 기준으로 분리
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

// 예외 처리 메서드
export const validateInput = (input) => {
    // null 또는 undefined인 경우
    if (input == null) {
        throw new Error('[ERROR] 정의되지 않은 수식입니다.');
    }

    return input;
}

// 구분자 정의 메서드
const defineDelimiters = (userInput) => {
    if (userInput.slice(0, 2) === '//' && userInput.slice(3, 5) === '\\n') {
        if ('0' <= userInput[2] && '9' >= userInput[2]) {
            throw new Error('[ERROR] 커스텀 구분자는 숫자가 될 수 없습니다.');
        }
        delimiters.push(userInput[2]);

        userInput = userInput.slice(5); // 구분자 정의 구문 이후부터가 덧셈 계산식
    }

    if (userInput.includes('//') && userInput.includes('\\n')) {
        const startDelimiter = userInput.indexOf('//');
        const endDelimiter = userInput.indexOf('\\n');

        if (startDelimiter === 0) {
            throw new Error('[ERROR] 커스텀 구분자로는 한 글자의 문자만 지정할 수 있습니다.');
        } 

        if (endDelimiter - startDelimiter !== 3) {
            throw new Error('[ERROR] 커스텀 구분자는 문자열 맨 앞에서만 지정할 수 있으며, 문자 하나만 지정 가능합니다.');
        }

        throw new Error('[ERROR] 커스텀 구분자는 문자열 맨 앞에서만 지정할 수 있습니다.');
    }

    else if (!userInput.includes('//') && userInput.includes('\\n')) {
        throw new Error('[ERROR] 커스텀 구분자를 지정하고 싶으시다면, 문자열 맨 앞에서 //과 함께 지정해주세요.');
    }

    else if (!userInput.includes('\\n') && userInput.includes('//')) {
        throw new Error('[ERROR] 커스텀 구분자를 지정하고 싶으시다면, 문자열 맨 앞에서 \\n과 함께 지정해주세요.');
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