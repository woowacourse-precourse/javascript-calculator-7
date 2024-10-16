class Calculator {
    static sum(numbers) {
        return numbers.reduce((total, num) => total + num, 0);
    }
}

export default Calculator;