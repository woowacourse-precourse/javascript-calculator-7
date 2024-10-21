import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/constants";
import { OUTPUT_MESSAGE } from "../constants/constants";

class View {
    #read
    #print

    constructor() {
        this.#read = Console.readLineAsync;
        this.#print = Console.print;
    }

    async readInput() {
        const inputData = await this.#read(INPUT_MESSAGE);
    }

    printResult(result) {
        this.#print(OUTPUT_MESSAGE(result));
    }
}