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
        let customDelimiter = input.match(/\/\/(.*?)\\n/g);

        if (customDelimiter) {
            customDelimiter = customDelimiter.map(item => item.slice(2, -2)).filter(delimiter => delimiter !== "")
        }// //와 \n 사이에 아무것도 들어오지 않을 경우 기본 구분자를 사용하도록

        return customDelimiter ? [...defaulDelimiters, ...customDelimiter] : defaulDelimiters
    }

    splitByDelimiters(input, delimiters) {
        input = input.replace(/\/\/.*?\\n/g, delimiters[0]); // 커스텀부분 문자열 인식 부분을 구분자로 변경(커스텀구분자가 2개 이상일 경우 뒤에 나오는 숫자와 앞에 나오는 숫자가 겹치는 것을 방지)

        const delimitersRegex = new RegExp(delimiters.map(delimiter => {
            return delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');  // 특수 문자 이스케이프
        }).join('|'), 'g');

        const tokens = input.split(delimitersRegex)
            .filter(item => item !== "")   // 빈 문자열 제거
            .map(item => Number(item));


        return tokens
    }

    isValidInput(tokens) {
        for (let item of tokens) {
            if (typeof item !== 'number' || isNaN(item) || item < 0) {
                throw new Error("[ERROR]")
            }
        }
    }
}