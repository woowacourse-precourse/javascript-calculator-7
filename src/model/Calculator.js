import separateNumber from "../utils/separateNumber.js";
import { DEFAULT_SEPARATOR } from "../constants/constants.js";

class Calculator {
    #inputData;
    #separator;

    constructor() {
        this.#inputData = null;
        this.#separator = DEFAULT_SEPARATOR;
    }

    setData(inputData) {
        this.#inputData = inputData;
    }

    calculate() {
        if (this.#inputData.trim() === "") return 0;

        const numberArray = separateNumber(this.#inputData, this.#separator);
        return numberArray.reduce((sum, num) => sum + num, 0);
    }
    
}

export default Calculator;