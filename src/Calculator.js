export default class Calculator {

    calculate(input) {
        if (!input) return 0

        const delimiters = this.getDelimiters(input)
        const tokens = this.splitByDelimiters(input, delimiters)

        this.isValidInput(tokens)

        return tokens.reduce((acc, cur) => acc + cur, 0)


    }

    getDelimiters(input) {
        const defaulDelimiters = [",", ":"]
        const customDelimiter = input.match(/\/\/(.*?)\\n/)

        return customDelimiter ? [...defaulDelimiters, customDelimiter[1]] : defaulDelimiters
    }

    splitByDelimiters(input, delimiters) {
        input = input.replace(/\/\/.*?\\n/g, ''); // 커스텀부분 문자열 부분 삭제

        let tokens = []
        for (let item of input) {
            if (!delimiters.includes(item)) {
                tokens.push(Number(item))
            }
        }
        return tokens
    }

    isValidInput(tokens) {
        for (let item of tokens) {
            if (typeof item !== 'number' || isNaN(item)) {
                throw new Error("[ERROR]")
            }
        }
    }
}