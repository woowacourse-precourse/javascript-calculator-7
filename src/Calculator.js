class Calculator {
    constructor(numbers) {
        this.numbers = numbers;
    }

    calculate() {
        return this.numbers.reduce((sum, num) => sum + num, 0);
    }
}

export default Calculator;