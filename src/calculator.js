import {Console} from '@woowacourse/mission-utils';

export async function calculator() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.')
    const parseResult = parseInput(input)
    const result = add(parseResult)
    Console.print(result)
}

function parseInput(input) {
    if(input.startsWith('//')) {
        const [custom, number] = input.split(/\\n/)
        const separator = custom.substring(2)
        const result = number.split(separator)

        return result.map((item) => Number(item))
    }else {
        const result =  input.split(/[,;]/)

        return result.map((item) => Number(item))
    }
}

function add(parseResult) {
    return parseResult.reduce((acc, cur) => acc + cur, 0)
}
