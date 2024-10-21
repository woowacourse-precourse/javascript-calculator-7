class Calculator {

    #sum;

    constructor(sum) {
        this.#sum = Number(sum);
    }

    static getSumCalculator(inputText) {
        if (inputText === 0) {
            return this.getSum(0);
        }
        const delimiter = inputText.delimiter;
        const operationText = inputText.operationText;
        const numbers = operationText.split(delimiter);
        const sum = numbers.reduce((pre, cur) => pre + parseInt(cur), 0);
        return this.getSum(sum);
    }

    static getSum(sum) {
        const calculatorInstantce = new Calculator(sum);
        return calculatorInstantce.#sum;
    }
}

export default Calculator;
