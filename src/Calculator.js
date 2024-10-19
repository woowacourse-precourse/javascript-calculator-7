export default class Calculator {

    calculate(input) {
        if (!input) return 0

        const delimiters = this.getDelimiters(input)
        const tokens = this.splitByDelimiters(input, delimiters)
        console.log(delimiters)

        // this.isValidInput(tokens)

        // return tokens.reduce((acc, cur) => acc + cur, 0)


    }

    getDelimiters(input) {
        const defaulDelimiters = [",", ":"]
        const customDelimiter = input.match(/\/\/(.*?)\\n/g).map(item => item.slice(2, -2));

        return customDelimiter ? [...defaulDelimiters, ...customDelimiter] : defaulDelimiters
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