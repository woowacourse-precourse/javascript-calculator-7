import View from "../view/view.js";
import Calculator from "../model/calculator.js";

class Controller {
    #view;

    constructor() {
        this.#view = new View();
    }

    async calculate() {
        let inputData = await this.#view.readInput();

        let calculator = new Calculator(inputData);
        let result = calculator.calculate();
        
        this.#view.printResult(result);
    }
}

export default Controller;