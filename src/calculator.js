import {Console} from '@woowacourse/mission-utils';

export async function calculator() {
    const input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.')
    const parseResult = parseInput(input)
    console.log('parseResult', parseResult)
}

function parseInput(input) {
    if(input.startsWith('//')) {
        const [custom, number] = input.split(/\\n/)

        const separator = custom.substring(2)

        return number.split(separator)
    }else {
        return input.split(/[,;]/)
    }
}

