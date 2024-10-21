import {Console} from '@woowacourse/mission-utils';
import {validateAndConvertNumber, validateCustomSeparator, validateInput} from "./validators.js";

export async function calculator() {
        const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.')
        const parseResult = parseInput(input);
        const result = add(parseResult);
        Console.print(`결과 : ${result}`);
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


