class Calculator {
    #inputData;
    #defaultSeparator;

    constructor(inputData) {
        this.#inputData = inputData;
        this.#defaultSeparator = /[,:]/;
    }

    calculate() {
        if (this.#inputData.trim() === "") return 0;
        
        const numbers = this.#inputData.split(this.#defaultSeparator).map(number => {
            const parsedNumber = parseInt(number);
            return parsedNumber;
        });

        return numbers.reduce((sum, num) => sum + num, 0);
    }
    
}

export default Calculator;