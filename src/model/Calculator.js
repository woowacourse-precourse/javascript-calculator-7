import separateNumber from "../utils/separateNumber.js";
import useCustomSeparator from "../utils/useCustomSeparator.js";

class Calculator {
    #inputData;
    #separator;

    constructor() {
        this.#inputData = null;
        this.#separator = null;
    }

    setData(inputData) {
        [this.#inputData, this.#separator] = useCustomSeparator(inputData);
    }

    calculate() {
        if (this.#inputData.trim() === "") return 0;

        const numberArray = separateNumber(this.#inputData, this.#separator);
        return numberArray.reduce((sum, num) => sum + num, 0);
    }
    
}

export default Calculator;