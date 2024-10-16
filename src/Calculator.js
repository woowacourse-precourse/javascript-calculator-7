export default class Calculator {

    calculate(input) {
        if (!input) return 0

        const deliters = this.getDelimiters(input)
        console.log(deliters)
    }

    getDelimiters(input) {
        const defaultDeliters = [",", ":"]
        const customDeliter = input.match(/^\/\/(.+)\/n$/)
        if (customDeliter) {
            return [...defaultDeliters, customDeliter[1]]
        }
        return defaultDeliters
    }
}