import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/constants.js";
import { OUTPUT_MESSAGE } from "../constants/constants.js";

class View {
    #read
    #print

    constructor() {
        this.#read = Console.readLineAsync;
        this.#print = Console.print;
    }

    async readInput() {
        const inputData = await this.#read(INPUT_MESSAGE);
        return inputData;
    }

    printResult(result) {
        this.#print(OUTPUT_MESSAGE(result));
    }
}

export default View;