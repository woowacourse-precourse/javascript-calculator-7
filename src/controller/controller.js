import View from "../view/view.js";
import Calculator from "../model/calculator.js";

class Controller {
    #view;
    #calculator;

    constructor() {
        this.#view = new View();
        this.#calculator = new Calculator();
    }

    async calculate() {
        const inputData = await this.#view.readInput();
        this.#calculator.setData(inputData);

        const result = this.#calculator.calculate();   
        this.#view.printResult(result);
    }
}

export default Controller;