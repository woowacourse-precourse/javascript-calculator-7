import {Console} from '@woowacourse/mission-utils';

export async function calculator() {
    try {
        const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.')
        const parseResult = parseInput(input);
        const result = add(parseResult);
        Console.print(`결과 : ${result}`);
    } catch (error) {
        throw error;
    }
}

function parseInput(input) {
    validateInput(input)

    if(input.startsWith('/')) {
        const [custom, number] = input.split(/\\n/)
        validateCustomSeparator(input, number)

        const separator = custom.substring(2)
        const result = number.split(separator)

        return result.map(validateAndConvertNumber)
    }else if(typeof Number(input[0]) === 'number') {
        const result =  input.split(/[,;]/)

        return result.map(validateAndConvertNumber)
    }else {
        throw Error("[ERROR]")
    }
}

function add(parseResult) {
    return parseResult.reduce((acc, cur) => acc + cur, 0)
}

function validateInput(input) {
    if (input.trim() === '') {
        throw Error("[ERROR]");
    }
}

function validateCustomSeparator(input,number ) {
    if(!input.startsWith('//') || !number) {
        throw Error("[ERROR]")
    }
}

function validateAndConvertNumber(item) {
    const num = Number(item);
    if (isNaN(num)) {
        throw Error("[ERROR]");
    }
    if (num < 0) {
        throw Error("[ERROR]");
    }
    return num;
}

