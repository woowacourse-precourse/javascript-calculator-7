import separateNumber from "../utils/separateNumber.js";

class Calculator {
    #inputData;
    #defaultSeparator;

    constructor() {
        this.#inputData = null;
        this.#defaultSeparator = /[,:]/;
    }

    setData(inputData) {
        this.#inputData = inputData;
    }

    calculate() {
        const numberArray = separateNumber(this.#inputData, this.#defaultSeparator);
        return numberArray.reduce((sum, num) => sum + num, 0);
    }
    
}

export default Calculator;