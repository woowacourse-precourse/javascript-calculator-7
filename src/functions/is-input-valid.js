import { Console } from '@woowacourse/mission-utils';

function isInputValid(input) {
    const positiveIntegerPattern = /^[1-9]\d*$/;

    if(input.startsWith('//')) {
        validateCustomDelimiterInput(input, positiveIntegerPattern);
    } else {
        if(input!==''){
            validateDefaultInput(input, positiveIntegerPattern);
        }
    }
}

function validateCustomDelimiterInput(input, pattern) {
    const customDelimiterStartIndex = input.indexOf('\\n');
    if(customDelimiterStartIndex === -1 || customDelimiterStartIndex !==3){
        throw new Error('[ERROR] 1 잘못된 값을 입력했습니다.');
    }

    const delimiter = input.slice(2, customDelimiterStartIndex);
    Console.print(delimiter);
    const escapedDelimiter = delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // 특수문자 처리
    Console.print(escapedDelimiter);
    if(pattern.test(escapedDelimiter)){
        throw new Error('[ERROR] 1 잘못된 값을 입력했습니다.');
    }
    const string = input.slice(customDelimiterStartIndex + 2);
    validateString(string, escapedDelimiter, pattern);
}

function validateDefaultInput(input, pattern) {
    const arr = input.split(/[,:]/);
    Console.print(arr);
    validateArray(arr, pattern);

}

function validateString(string, delimiter, pattern) {
    const arr = string.split(new RegExp(`[${delimiter},:]`));
    Console.print(arr);
    if(arr.length === 0 || arr.some(value => !pattern.test(value))) {
        throw new Error('[ERROR] 2 잘못된 값을 입력했습니다.');
    }
}

function validateArray(arr, pattern) {
    if(arr.some(value => !pattern.test(value))) {
        throw new Error('[ERROR] 3 잘못된 값을 입력했습니다.');
    }
}

export default isInputValid;

