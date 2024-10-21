import {Console} from '@woowacourse/mission-utils';

export async function calculator() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.')
    try {
        const parseResult = parseInput(input);
        const result = add(parseResult);
        Console.print(result);
    } catch (error) {
        Console.print(error.message);
    }
}

function parseInput(input) {
    validateInput(input)

    if(input.startsWith('/')) {
        const [custom, number] = input.split(/\\n/)
        validateCustomSeparator(input, number)

        const separator = custom.substring(2)
        const result = number.split(separator)

        return result.map((item) => Number(item))
    }else if(typeof Number(input[0]) !== 'number') {
        const result =  input.split(/[,;]/)

        return result.map((item) => Number(item))
    }else {
        throw new Error(`[ERROR] 올바른 값이 아닙니다.`)
    }
}

function add(parseResult) {
    return parseResult.reduce((acc, cur) => acc + cur, 0)
}

function validateInput(input) {
    if (input.trim() === '') {
        throw new Error('[ERROR] 입력값이 비어있습니다.');
    }
}

function validateCustomSeparator(input,number ) {
    if(!input.startsWith('//') || !number) {
        throw new Error('[ERROR] 커스텀셀럭터 입력이 올바르지 않습니다.')
    }
}

