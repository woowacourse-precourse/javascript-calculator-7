export default class Calculator {

    calculate(input) {
        if (!input) return 0

        const deliters = this.getDelimiters(input)
        console.log(deliters)
    }

    getDelimiters(input) {
        const defaulDelimiters = [",", ":"]
        const customDeliter = input.match(/\/\/(.*?)\\n/)

        return customDeliter ? [...defaulDelimiters, customDeliter[1]] : defaulDelimiters
    }
}