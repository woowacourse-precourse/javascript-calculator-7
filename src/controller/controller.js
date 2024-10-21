import View from "../view/view.js";

class Controller {
    #view;

    constructor() {
        this.#view = new View();
    }

    async calculate() {
        let inputData = await this.#view.readInput();
        
        this.#view.printResult(inputData);
    }
}

export default Controller;