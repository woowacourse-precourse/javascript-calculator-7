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
        if (this.#inputData.trim() === "") return 0;

        const numberArray = separateNumber(this.#inputData, this.#defaultSeparator);
        return numberArray.reduce((sum, num) => sum + num, 0);
    }
    
}

export default Calculator;